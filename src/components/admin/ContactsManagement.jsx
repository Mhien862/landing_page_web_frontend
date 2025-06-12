import React, { useState, useEffect } from "react";
import {
  Table,
  Card,
  Typography,
  message,
  Input,
  Button,
  Space,
  Tag,
  Modal,
} from "antd";
import { SearchOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import { contactsAPI } from "../../services/api";

const { Title } = Typography;
const { Search } = Input;

const ContactsManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const response = await contactsAPI.getAllContacts();
      if (response.data.success) {
        setContacts(response.data.data);
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
      message.error("Lỗi tải danh sách contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetail = (contact) => {
    setSelectedContact(contact);
    setShowDetailModal(true);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phone.includes(searchText)
  );

  const columns = [
    {
      title: "STT",
      key: "index",
      width: 60,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => <a href={`mailto:${email}`}>{email}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => <a href={`tel:${phone}`}>{phone}</a>,
    },
    {
      title: "Tin nhắn",
      dataIndex: "message",
      key: "message",
      ellipsis: true,
      width: 200,
    },
    {
      title: "Thời gian",
      dataIndex: "created_at",
      key: "created_at",
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
      render: (date) => new Date(date).toLocaleString("vi-VN"),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: () => <Tag color="green">Mới</Tag>,
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 100,
      render: (_, record) => (
        <Button
          type="primary"
          size="small"
          icon={<EyeOutlined />}
          onClick={() => handleViewDetail(record)}
        >
          Xem
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Danh sách Contacts</Title>

      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Search
            placeholder="Tìm kiếm theo tên, email, số điện thoại..."
            allowClear
            style={{ width: 400 }}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
          />

          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={loadContacts}
            loading={loading}
          >
            Làm mới
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={filteredContacts}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} của ${total} contacts`,
          }}
          scroll={{ x: 1000 }}
        />
      </Card>

      {/* Modal chi tiết contact */}
      <Modal
        title="Chi tiết Contact"
        open={showDetailModal}
        onCancel={() => setShowDetailModal(false)}
        footer={[
          <Button key="close" onClick={() => setShowDetailModal(false)}>
            Đóng
          </Button>,
        ]}
        width={600}
      >
        {selectedContact && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Họ tên:</strong> {selectedContact.name}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Email:</strong>
              <a
                href={`mailto:${selectedContact.email}`}
                style={{ marginLeft: "8px" }}
              >
                {selectedContact.email}
              </a>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Số điện thoại:</strong>
              <a
                href={`tel:${selectedContact.phone}`}
                style={{ marginLeft: "8px" }}
              >
                {selectedContact.phone}
              </a>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Thời gian gửi:</strong>{" "}
              {new Date(selectedContact.created_at).toLocaleString("vi-VN")}
            </div>
            <div>
              <strong>Tin nhắn:</strong>
              <div
                style={{
                  marginTop: "8px",
                  padding: "12px",
                  background: "#f5f5f5",
                  borderRadius: "6px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {selectedContact.message}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ContactsManagement;
