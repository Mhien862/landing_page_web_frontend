// src/components/AppHeader.jsx

import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Dropdown, Avatar, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import LoginModal from "./LoginModal";
import styles from "./AppHeader.module.css"; // Chúng ta sẽ tạo file CSS này ngay sau đây

const { Header } = Layout;

const menuItems = [
  { key: "/", label: "TRANG CHỦ" },
  { key: "/giao-dien", label: "GIAO DIỆN" },
  { key: "/bang-gia", label: "BẢNG GIÁ" },
  { key: "/dich-vu", label: "DỊCH VỤ" },
  { key: "/hop-tac", label: "HỢP TÁC" },
  { key: "/tin-tuc", label: "TIN TỨC" },
  { key: "/lien-he", label: "LIÊN HỆ" },
];

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  // Kiểm tra user đã đăng nhập khi component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const userMenuItems = [
    {
      key: "admin",
      label: "Quản trị",
      icon: <SettingOutlined />,
      onClick: () => navigate("/admin"),
    },
    {
      key: "logout",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        {/* Bạn có thể thay bằng thẻ <img> cho logo của mình */}
        <span>Landing Page</span>
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={menuItems}
        className={styles.menu}
        style={{ minWidth: 0 }}
      />

      {user ? (
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />
            <span style={{ color: "white" }}>{user.username}</span>
            <span style={{ color: "#1890ff", fontSize: "12px" }}>
              ({user.role})
            </span>
          </Space>
        </Dropdown>
      ) : (
        <Button type="primary" onClick={() => setShowLoginModal(true)}>
          Login
        </Button>
      )}

      <LoginModal
        visible={showLoginModal}
        onCancel={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </Header>
  );
};

export default AppHeader;
