import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Typography,
  Input,
  Pagination,
  Tag,
  Empty,
  Spin,
  Button,
  Space,
} from "antd";
import {
  EyeOutlined,
  CalendarOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { articlesAPI } from "../services/api";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Meta } = Card;

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 12,
    total: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    loadArticles();
  }, [pagination.current, pagination.pageSize, searchText]);

  const loadArticles = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.current,
        limit: pagination.pageSize,
        search: searchText || undefined,
      };

      const response = await articlesAPI.getPublishedArticles(params);
      const { articles: articleList, total } = response.data.data;

      setArticles(articleList);
      setPagination((prev) => ({
        ...prev,
        total,
      }));
    } catch (error) {
      console.error("Error loading articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleArticleClick = (articleId) => {
    navigate(`/tin-tuc/${articleId}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div style={{ padding: "24px", minHeight: "80vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={1} style={{ textAlign: "center", marginBottom: 40 }}>
          TIN TỨC VỀ DỊCH VỤ LANDING PAGE
        </Title>

        <Row gutter={[0, 24]} style={{ marginBottom: 32 }}>
          <Col span={24} style={{ textAlign: "center" }}>
            <Search
              placeholder="Tìm kiếm bài viết..."
              allowClear
              enterButton="Tìm kiếm"
              size="large"
              style={{ maxWidth: 400 }}
              onSearch={handleSearch}
            />
          </Col>
        </Row>

        <Spin spinning={loading}>
          {articles.length === 0 && !loading ? (
            <Empty
              description="Không có bài viết nào"
              style={{ margin: "60px 0" }}
            />
          ) : (
            <>
              <Row gutter={[24, 24]}>
                {articles.map((article) => (
                  <Col xs={24} sm={12} lg={8} xl={6} key={article.id}>
                    <Card
                      hoverable
                      cover={
                        article.featured_image ? (
                          <img
                            alt={article.title}
                            src={article.featured_image}
                            style={{
                              height: 200,
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              height: 200,
                              backgroundColor: "#f0f0f0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#999",
                            }}
                          >
                            Không có ảnh
                          </div>
                        )
                      }
                      actions={[
                        <div key="stats">
                          <Space>
                            <span>
                              <EyeOutlined /> {article.views}
                            </span>
                          </Space>
                        </div>,
                      ]}
                      onClick={() => handleArticleClick(article.id)}
                    >
                      <Meta
                        title={
                          <div style={{ height: 48, overflow: "hidden" }}>
                            {article.title}
                          </div>
                        }
                        description={
                          <div>
                            {article.excerpt && (
                              <Paragraph
                                ellipsis={{ rows: 3 }}
                                style={{ marginBottom: 12 }}
                              >
                                {article.excerpt}
                              </Paragraph>
                            )}
                            <div>
                              <Space direction="vertical" size={4}>
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                  <UserOutlined /> {article.author_name}
                                </Text>
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                  <CalendarOutlined />{" "}
                                  {formatDate(article.published_at)}
                                </Text>
                              </Space>
                            </div>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>

              {pagination.total > 0 && (
                <div style={{ textAlign: "center", marginTop: 40 }}>
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
              )}
            </>
          )}
        </Spin>
      </div>
    </div>
  );
};

// Component chi tiết bài viết
export const NewsDetailPage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    setLoading(true);
    try {
      const response = await articlesAPI.getPublishedArticleById(id);
      setArticle(response.data.data);
    } catch (error) {
      console.error("Error loading article:", error);
      navigate("/tin-tuc");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px 0" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "100px 0" }}>
        <Empty description="Không tìm thấy bài viết" />
        <Button type="primary" onClick={() => navigate("/tin-tuc")}>
          Quay lại danh sách tin tức
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", minHeight: "80vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/tin-tuc")}
          style={{ marginBottom: 24 }}
        >
          Quay lại danh sách tin tức
        </Button>

        <article>
          <Title level={1}>{article.title}</Title>

          <div style={{ marginBottom: 24 }}>
            <Space direction="vertical" size={8}>
              <Space>
                <Text type="secondary">
                  <UserOutlined /> Tác giả: {article.author_name}
                </Text>
                <Text type="secondary">
                  <CalendarOutlined /> {formatDate(article.published_at)}
                </Text>
                <Text type="secondary">
                  <EyeOutlined /> {article.views} lượt xem
                </Text>
              </Space>
            </Space>
          </div>

          {article.featured_image && (
            <img
              src={article.featured_image}
              alt={article.title}
              style={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                marginBottom: 24,
                borderRadius: 8,
              }}
            />
          )}

          {article.excerpt && (
            <div
              style={{
                backgroundColor: "#f6f8fa",
                padding: 16,
                borderRadius: 8,
                marginBottom: 24,
                borderLeft: "4px solid #1890ff",
              }}
            >
              <Text strong>Tóm tắt: </Text>
              <Text>{article.excerpt}</Text>
            </div>
          )}

          <div
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
            }}
          >
            {article.content}
          </div>
        </article>

        <div
          style={{
            marginTop: 40,
            padding: 20,
            backgroundColor: "#f9f9f9",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          <Title level={4}>Bạn cần tư vấn về dịch vụ Landing Page?</Title>
          <Button type="primary" size="large">
            Liên hệ ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
