import React from "react";
import { Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const features = [
  "CÀI ĐẶT MIỄN PHÍ SSL CHO WEB",
  "THÔNG BÁO GIÁ KHÁC HÀNG",
  "TÍCH HỢP CÁC LOẠI LIVE CHAT",
  "CÓ SẴN PHIÊN BẢN DI ĐỘNG",
  "FORM THU THẬP THÔNG TIN",
  "POPUP HIỂN THỊ THÔNG BÁO",
  "LƯU DATA KHÁCH Ở NHIỀU NƠI",
  "TIỆN ÍCH MAXLEAD LIÊN HỆ",
  "VÒNG QUAY MAY MẮN",
  "ĐẾM NGƯỢC THỜI GIAN",
  "BỘ DATA VỀ MAIL VÀ CRM",
  "TẠO POPUP CẢM ƠN THANK",
];

const Features = () => {
  return (
    <div style={{ padding: "50px 5%", background: "#f5f5f5" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        TÍNH NĂNG SẼ CÓ TRÊN LANDING PAGE
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Button
              type="primary"
              size="large"
              style={{
                width: "100%",
                height: "auto",
                whiteSpace: "normal",
                textAlign: "center",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "bold",
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {feature}
            </Button>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landing Page Summary"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={2} style={{ color: "#1677ff", marginBottom: "20px" }}>
              TỔNG THỂ VỀ LANDING PAGE
            </Title>
            <Typography.Paragraph style={{ fontSize: "16px" }}>
              <strong>CCO MEDIA</strong> chuyên cung cấp trọn gói các dịch vụ về
              Landing Page như: Thiết kế Landing page cho mọi lĩnh vực, tối ưu
              và chỉnh giao diện Landing page, SEO landing page top GOOGLE
            </Typography.Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Features;
