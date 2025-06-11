import React from "react";
import { Typography, Button } from "antd";
import styles from "./HeroBanner.module.css";

const { Title, Paragraph } = Typography;

const HeroBanner = () => {
  // Lấy ảnh ngẫu nhiên từ Unsplash theo chủ đề công nghệ
  const bannerImageUrl =
    "https://images.unsplash.com/photo-1573671935871-77305106a2f2?q=80&w=3528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className={styles.heroBanner}
      style={{ backgroundImage: `url(${bannerImageUrl})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <Title level={1} style={{ color: "white" }}>
          DỊCH VỤ THIẾT KẾ WEB LANDING PAGE CHUYÊN NGHIỆP
        </Title>
        <Paragraph style={{ color: "white", fontSize: "18px" }}>
          Chuyên thiết kế Web Landing Page giới thiệu sản phẩm dịch vụ giúp bán
          hàng online hiệu quả và tiết kiệm chi phí nhất.
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
