// src/components/AppHeader.jsx

import React from "react";
import { Layout, Menu, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
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

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

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
      <Button type="primary">Login</Button>
    </Header>
  );
};

export default AppHeader;
