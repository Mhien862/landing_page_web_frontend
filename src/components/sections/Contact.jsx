import React from "react";
import { Typography, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const contactInfo = [
  {
    title: "VĂN PHÒNG CÔNG TY",
    content: "154 Phạm Văn Chiêu, Phường 9, Gò Vấp, HCM",
    icon: (
      <EnvironmentOutlined style={{ fontSize: "48px", color: "#1677ff" }} />
    ),
    link: "https://maps.google.com/?q=154 Phạm Văn Chiêu, Phường 9, Gò Vấp, HCM",
  },
  {
    title: "HOTLINE",
    content: "0902 813 410",
    icon: <PhoneOutlined style={{ fontSize: "48px", color: "#ff4d4f" }} />,
    link: "tel:0902813410",
  },
  {
    title: "HỘP THƯ HỖ TRỢ",
    content: "dichvuweblandingpage@gmail.com",
    icon: <MailOutlined style={{ fontSize: "48px", color: "#52c41a" }} />,
    link: "mailto:dichvuweblandingpage@gmail.com",
  },
];

const Contact = () => {
  return (
    <div style={{ padding: "50px 5%" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        THÔNG TIN LIÊN HỆ
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {contactInfo.map((info, index) => (
          <Col xs={24} sm={24} md={8} key={index}>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#fff1f0",
                  padding: "30px",
                  borderRadius: "20px",
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ marginBottom: "20px" }}>{info.icon}</div>
                <Title
                  level={4}
                  style={{ color: "#1677ff", marginBottom: "16px" }}
                >
                  {info.title}
                </Title>
                <div style={{ fontSize: "16px", color: "#000000d9" }}>
                  {info.content}
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contact;
