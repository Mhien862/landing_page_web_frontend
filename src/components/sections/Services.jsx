import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "THIẾT KẾ LANDING PAGE",
    description: "Chuyên thiết kế các mẫu giao diện Landing Page mọi lĩnh vực",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/thiet-ke-landing-page.png",
  },
  {
    title: "TỐI ƯU LANDING PAGE",
    description:
      "Chỉnh sửa và tối ưu Landing Page giúp web load nhanh và chuẩn SEO",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/toi-uu-landing-page.png",
  },
  {
    title: "QUẢN LÝ TRANG WEB",
    description:
      "Giải pháp quản trị web giúp bạn tiết kiệm thời gian và nhân sự",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/quan-ly-landing-page.png",
  },
  {
    title: "QUẢNG CÁO ONLINE",
    description:
      "Cung cấp trọn gói các dịch vụ quảng cáo giúp bạn gia tăng Doanh Số",
    icon: "https://dichvulandingpage.com/wp-content/uploads/2022/11/quang-cao-trang-landing-page.png",
  },
];

const Services = () => {
  return (
    <div style={{ padding: "50px 5%" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "20px", color: "#1677ff" }}
      >
        DỊCH VỤ ĐANG CUNG CẤP
      </Title>
      <Paragraph
        style={{ textAlign: "center", fontSize: "16px", marginBottom: "50px" }}
      >
        Chúng tôi luôn sẵn sàng cung cấp cho bạn những giải pháp dịch vụ web
        landing page tối ưu nhất để giúp bạn tối ưu chi phí quảng cáo, gia tăng
        khách hàng và tăng tỷ lệ chốt đơn cao nhất
      </Paragraph>

      <Row gutter={[32, 32]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              style={{
                height: "100%",
                textAlign: "center",
                background: "#fff1f0",
                border: "none",
                borderRadius: "12px",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <div style={{ marginBottom: "20px" }}>
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Title
                level={4}
                style={{ color: "#1677ff", marginBottom: "16px" }}
              >
                {service.title}
              </Title>
              <Paragraph style={{ fontSize: "14px", marginBottom: 0 }}>
                {service.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
