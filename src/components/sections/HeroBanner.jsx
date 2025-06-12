import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";
import { settingsAPI } from "../../services/api";
import styles from "./HeroBanner.module.css";

const { Title, Paragraph } = Typography;

const HeroBanner = () => {
  const [bannerData, setBannerData] = useState({
    image:
      "https://images.unsplash.com/photo-1573671935871-77305106a2f2?q=80&w=3528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "DỊCH VỤ THIẾT KẾ WEB LANDING PAGE CHUYÊN NGHIỆP",
    subtitle:
      "Chuyên thiết kế Web Landing Page giới thiệu sản phẩm dịch vụ giúp bán hàng online hiệu quả và tiết kiệm chi phí nhất.",
  });

  useEffect(() => {
    loadBannerData();
  }, []);

  const loadBannerData = async () => {
    try {
      const response = await settingsAPI.getHeroBanner();

      if (response.data.success) {
        const newData = response.data.data;
        setBannerData(newData);
      }
    } catch (error) {
      console.error("Error loading banner data:", error);
      // Sử dụng data mặc định nếu có lỗi
    }
  };

  return (
    <div
      className={styles.heroBanner}
      style={{ backgroundImage: `url(${bannerData.image})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <Title level={1} style={{ color: "white" }}>
          {bannerData.title}
        </Title>
        <Paragraph style={{ color: "white", fontSize: "18px" }}>
          {bannerData.subtitle}
        </Paragraph>
        <div>
          <Button type="primary" size="large" style={{ marginRight: "10px" }}>
            ĐĂNG KÝ TƯ VẤN
          </Button>
          <Button size="large" ghost>
            XEM GIAO DIỆN →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
