import React, { useState, useEffect } from "react";
import { Layout, Menu, Card, Typography, Button, message } from "antd";
import {
  DashboardOutlined,
  PictureOutlined,
  ContactsOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BannerManagement from "../components/admin/BannerManagement";
import ContactsManagement from "../components/admin/ContactsManagement";
import UsersManagement from "../components/admin/UsersManagement";
import ArticlesManagement from "../components/admin/ArticlesManagement";
import styles from "./AdminDashboard.module.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  // Kiểm tra quyền truy cập
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      message.error("Vui lòng đăng nhập!");
      navigate("/");
      return;
    }

    const userData = JSON.parse(savedUser);
    if (!["super_admin", "admin", "editor"].includes(userData.role)) {
      message.error("Bạn không có quyền truy cập trang này!");
      navigate("/");
      return;
    }

    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    message.success("Đăng xuất thành công!");
    navigate("/");
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "banner",
      icon: <PictureOutlined />,
      label: "Quản lý Banner",
    },
    {
      key: "articles",
      icon: <FileTextOutlined />,
      label: "Quản lý Bài viết",
    },
    {
      key: "contacts",
      icon: <ContactsOutlined />,
      label: "Danh sách Contacts",
    },
    // Chỉ admin và super_admin mới thấy menu Users
    ...(user && ["super_admin", "admin"].includes(user.role)
      ? [
          {
            key: "users",
            icon: <UserOutlined />,
            label: "Quản lý Users",
          },
        ]
      : []),
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "banner":
        return <BannerManagement />;
      case "articles":
        return <ArticlesManagement />;
      case "contacts":
        return <ContactsManagement />;
      case "users":
        return <UsersManagement user={user} />;
      default:
        return (
          <div>
            <Title level={2}>Dashboard</Title>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              <Card>
                <div style={{ textAlign: "center" }}>
                  <PictureOutlined
                    style={{ fontSize: "48px", color: "#1890ff" }}
                  />
                  <Title level={4}>Quản lý Banner</Title>
                  <p>Thay đổi hình ảnh và nội dung banner trang chủ</p>
                  <Button
                    type="primary"
                    onClick={() => setSelectedKey("banner")}
                  >
                    Quản lý Banner
                  </Button>
                </div>
              </Card>

              <Card>
                <div style={{ textAlign: "center" }}>
                  <FileTextOutlined
                    style={{ fontSize: "48px", color: "#722ed1" }}
                  />
                  <Title level={4}>Quản lý Bài viết</Title>
                  <p>Tạo, chỉnh sửa và quản lý các bài viết tin tức</p>
                  <Button
                    type="primary"
                    onClick={() => setSelectedKey("articles")}
                  >
                    Quản lý Bài viết
                  </Button>
                </div>
              </Card>

              <Card>
                <div style={{ textAlign: "center" }}>
                  <ContactsOutlined
                    style={{ fontSize: "48px", color: "#52c41a" }}
                  />
                  <Title level={4}>Danh sách Contacts</Title>
                  <p>Xem và quản lý thông tin khách hàng đăng ký</p>
                  <Button
                    type="primary"
                    onClick={() => setSelectedKey("contacts")}
                  >
                    Xem Contacts
                  </Button>
                </div>
              </Card>

              {user && ["super_admin", "admin"].includes(user.role) && (
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <UserOutlined
                      style={{ fontSize: "48px", color: "#fa8c16" }}
                    />
                    <Title level={4}>Quản lý Users</Title>
                    <p>Tạo và quản lý tài khoản người dùng</p>
                    <Button
                      type="primary"
                      onClick={() => setSelectedKey("users")}
                    >
                      Quản lý Users
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        );
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="dark"
      >
        <div className={styles.logo}>
          <h2 style={{ color: "white", textAlign: "center", margin: "16px 0" }}>
            {collapsed ? "LP" : "Landing Page"}
          </h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={3} style={{ margin: 0 }}>
            Admin Dashboard
          </Title>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span>
              Xin chào, <strong>{user.username}</strong> ({user.role})
            </span>
            <Button icon={<HomeOutlined />} onClick={() => navigate("/")}>
              Về trang chủ
            </Button>
            <Button danger icon={<LogoutOutlined />} onClick={handleLogout}>
              Đăng xuất
            </Button>
          </div>
        </Header>

        <Content
          style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
