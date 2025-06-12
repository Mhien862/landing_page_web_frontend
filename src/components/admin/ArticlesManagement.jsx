import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Space,
  message,
  Modal,
  Form,
  Input,
  Select,
  Card,
  Tag,
  Popconfirm,
  Row,
  Col,
  Typography,
  Upload,
  Pagination,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { articlesAPI } from "../../services/api";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const ArticlesManagement = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAdmin = user.role === "super_admin" || user.role === "admin";

  useEffect(() => {
    loadArticles();
  }, [pagination.current, pagination.pageSize, searchText, statusFilter]);

  const loadArticles = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.current,
        limit: pagination.pageSize,
        search: searchText || undefined,
        status: statusFilter || undefined,
      };

      const response = await articlesAPI.getArticles(params);
      const { articles: articleList, total } = response.data.data;

      setArticles(articleList);
      setPagination((prev) => ({
        ...prev,
        total,
      }));
    } catch (error) {
      message.error("Lỗi khi tải danh sách bài viết");
      console.error("Error loading articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCurrentArticle(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = async (article) => {
    setCurrentArticle(article);
    form.setFieldsValue({
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      featured_image: article.featured_image,
      status: article.status,
    });
    setModalVisible(true);
  };

  const handleView = (article) => {
    setCurrentArticle(article);
    setViewModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await articlesAPI.deleteArticle(id);
      message.success("Xóa bài viết thành công");
      loadArticles();
    } catch (error) {
      if (error.response?.status === 403) {
        message.error("Bạn không có quyền xóa bài viết này");
      } else {
        message.error("Lỗi khi xóa bài viết");
      }
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (currentArticle) {
        await articlesAPI.updateArticle(currentArticle.id, values);
        message.success("Cập nhật bài viết thành công");
      } else {
        await articlesAPI.createArticle(values);
        message.success("Tạo bài viết thành công");
      }
      setModalVisible(false);
      loadArticles();
    } catch (error) {
      if (error.response?.status === 403) {
        message.error("Bạn không có quyền thực hiện thao tác này");
      } else {
        message.error(
          currentArticle ? "Lỗi khi cập nhật bài viết" : "Lỗi khi tạo bài viết"
        );
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "green";
      case "draft":
        return "orange";
      case "archived":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "published":
        return "Đã xuất bản";
      case "draft":
        return "Bản nháp";
      case "archived":
        return "Đã lưu trữ";
      default:
        return status;
    }
  };

  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      width: 300,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => (
        <Tag color={getStatusColor(status)}>{getStatusText(status)}</Tag>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "author_name",
      key: "author_name",
      width: 150,
    },
    {
      title: "Lượt xem",
      dataIndex: "views",
      key: "views",
      width: 100,
      align: "center",
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      width: 180,
      render: (date) => new Date(date).toLocaleString("vi-VN"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 200,
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
          />
          <Button
            size="small"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            disabled={!isAdmin && user.id !== record.author_id}
          />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa bài viết này?"
            onConfirm={() => handleDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button
              size="small"
              danger
              icon={<DeleteOutlined />}
              disabled={!isAdmin && user.id !== record.author_id}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Quản lý bài viết</Title>

      <Card style={{ marginBottom: 16 }}>
        <Row gutter={16} align="middle">
          <Col flex="auto">
            <Space>
              <Input.Search
                placeholder="Tìm kiếm bài viết..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onSearch={loadArticles}
                style={{ width: 300 }}
              />
              <Select
                placeholder="Lọc theo trạng thái"
                style={{ width: 150 }}
                value={statusFilter}
                onChange={setStatusFilter}
                allowClear
              >
                <Option value="published">Đã xuất bản</Option>
                <Option value="draft">Bản nháp</Option>
                <Option value="archived">Đã lưu trữ</Option>
              </Select>
            </Space>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreate}
            >
              Tạo bài viết mới
            </Button>
          </Col>
        </Row>
      </Card>

      <Table
        columns={columns}
        dataSource={articles}
        rowKey="id"
        loading={loading}
        pagination={false}
        scroll={{ x: 1000 }}
      />

      <div style={{ marginTop: 16, textAlign: "center" }}>
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={pagination.total}
          onChange={(page, pageSize) =>
            setPagination({ ...pagination, current: page, pageSize })
          }
          showSizeChanger
          showQuickJumper
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} của ${total} bài viết`
          }
        />
      </div>

      {/* Modal tạo/chỉnh sửa bài viết */}
      <Modal
        title={currentArticle ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        width={800}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="Tiêu đề"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
          >
            <Input placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>

          <Form.Item name="excerpt" label="Mô tả ngắn">
            <TextArea
              rows={3}
              placeholder="Nhập mô tả ngắn cho bài viết"
              maxLength={500}
              showCount
            />
          </Form.Item>

          <Form.Item name="featured_image" label="Ảnh đại diện">
            <Input placeholder="URL ảnh đại diện" />
          </Form.Item>

          <Form.Item
            name="content"
            label="Nội dung"
            rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
          >
            <TextArea
              rows={10}
              placeholder="Nhập nội dung bài viết"
              showCount
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái"
            initialValue="draft"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
          >
            <Select>
              <Option value="draft">Bản nháp</Option>
              <Option value="published">Xuất bản</Option>
              <Option value="archived">Lưu trữ</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {currentArticle ? "Cập nhật" : "Tạo mới"}
              </Button>
              <Button onClick={() => setModalVisible(false)}>Hủy</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal xem chi tiết bài viết */}
      <Modal
        title="Chi tiết bài viết"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        width={800}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            Đóng
          </Button>,
        ]}
      >
        {currentArticle && (
          <div>
            <Title level={3}>{currentArticle.title}</Title>
            <div style={{ marginBottom: 16 }}>
              <Space>
                <Tag color={getStatusColor(currentArticle.status)}>
                  {getStatusText(currentArticle.status)}
                </Tag>
                <span>Tác giả: {currentArticle.author_name}</span>
                <span>Lượt xem: {currentArticle.views}</span>
              </Space>
            </div>
            {currentArticle.featured_image && (
              <img
                src={currentArticle.featured_image}
                alt={currentArticle.title}
                style={{
                  width: "100%",
                  maxHeight: 300,
                  objectFit: "cover",
                  marginBottom: 16,
                }}
              />
            )}
            {currentArticle.excerpt && (
              <div style={{ marginBottom: 16 }}>
                <strong>Mô tả:</strong>
                <p>{currentArticle.excerpt}</p>
              </div>
            )}
            <div>
              <strong>Nội dung:</strong>
              <div
                style={{
                  marginTop: 8,
                  padding: 16,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 4,
                  whiteSpace: "pre-wrap",
                }}
              >
                {currentArticle.content}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ArticlesManagement;
