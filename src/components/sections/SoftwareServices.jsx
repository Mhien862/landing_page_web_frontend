import React from "react";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const services = [
  {
    title: "EMAIL MARKETING",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/EMAIL-MARKETING-300x300.webp",
    color: "#1677ff",
  },
  {
    title: "SMS MARKETING",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/SMS-MARKETING-300x300.png",
    color: "#ff4d85",
  },
  {
    title: "AUTO CALL",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/AUTO-CALL-300x300.png",
    color: "#36cfc9",
  },
  {
    title: "AUTO ADS",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/AUTO-ADS-300x300.png",
    color: "#ffa940",
  },
];

const SoftwareServices = () => {
  return (
    <div style={{ padding: "50px 5%", background: "#f5f5f5" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        DỊCH VỤ PHẦN MỀM ĐANG CUNG CẤP
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  width: "200px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: service.color,
                  fontWeight: "bold",
                }}
              >
                {service.title}
              </Title>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SoftwareServices;
