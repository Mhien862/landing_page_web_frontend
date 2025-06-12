import React, { useState, useEffect } from "react";
import {
  Table,
  Card,
  Typography,
  message,
  Button,
  Space,
  Tag,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { authAPI } from "../../services/api";

const { Title } = Typography;
const { Option } = Select;

const UsersManagement = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm] = Form.useForm();
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await authAPI.getUsers();
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error("Error loading users:", error);
      message.error("Lỗi tải danh sách users");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (values) => {
    setCreating(true);
    try {
      const response = await authAPI.createUser(values);
      if (response.data.success) {
        message.success("Tạo user thành công!");
        setShowCreateModal(false);
        createForm.resetFields();
        loadUsers();
      }
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response?.data?.error) {
        message.error(error.response.data.error);
      } else {
        message.error("Lỗi tạo user");
      }
    } finally {
      setCreating(false);
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "super_admin":
        return "red";
      case "admin":
        return "orange";
      case "editor":
        return "blue";
      default:
        return "default";
    }
  };

  const getRoleText = (role) => {
    switch (role) {
      case "super_admin":
        return "Super Admin";
      case "admin":
        return "Admin";
      case "editor":
        return "Editor";
      default:
        return role;
    }
  };

  const canCreateRole = (targetRole) => {
    if (user.role === "super_admin") return true;
    if (user.role === "admin" && targetRole === "editor") return true;
    return false;
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      width: 60,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={getRoleColor(role)}>{getRoleText(role)}</Tag>
      ),
      filters: [
        { text: "Super Admin", value: "super_admin" },
        { text: "Admin", value: "admin" },
        { text: "Editor", value: "editor" },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
      render: (date) => new Date(date).toLocaleString("vi-VN"),
    },
  ];

  return (
    <div>
      <Title level={2}>Quản lý Users</Title>

      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Danh sách người dùng
            </Title>
            <p style={{ margin: 0, color: "#666" }}>
              Quản lý tài khoản người dùng hệ thống
            </p>
          </div>

          <Space>
            <Button
              icon={<ReloadOutlined />}
              onClick={loadUsers}
              loading={loading}
            >
              Làm mới
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setShowCreateModal(true)}
            >
              Tạo user mới
            </Button>
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} của ${total} users`,
          }}
        />
      </Card>

      {/* Modal tạo user */}
      <Modal
        title="Tạo user mới"
        open={showCreateModal}
        onCancel={() => {
          setShowCreateModal(false);
          createForm.resetFields();
        }}
        footer={null}
        width={500}
      >
        <Form form={createForm} layout="vertical" onFinish={handleCreateUser}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập username!" },
              { min: 3, message: "Username phải có ít nhất 3 ký tự!" },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Vai trò"
            name="role"
            rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]}
          >
            <Select placeholder="Chọn vai trò">
              {user.role === "super_admin" && (
                <Option value="admin">Admin</Option>
              )}
              <Option value="editor">Editor</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: "right" }}>
            <Space>
              <Button onClick={() => setShowCreateModal(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit" loading={creating}>
                Tạo user
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UsersManagement;
