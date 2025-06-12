import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import {
  LaptopOutlined,
  SettingOutlined,
  DollarOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import styles from "./ServicesPage.module.css";

const { Title, Text, Paragraph } = Typography;

const services = [
  {
    icon: <LaptopOutlined className={styles.serviceIcon} />,
    title: "THIẾT KẾ LANDING PAGE",
    description: "Chuyên thiết kế các mẫu giao diện Landing Page mới lịnh sực",
    color: "#1890ff",
  },
  {
    icon: <SettingOutlined className={styles.serviceIcon} />,
    title: "TỐI ƯU LANDING PAGE",
    description:
      "Chỉnh sửa và tối ưu Landing Page giúp web load nhanh và chuẩn SEO",
    color: "#ff4d4f",
  },
  {
    icon: <DollarOutlined className={styles.serviceIcon} />,
    title: "QUẢN LÝ TRANG WEB",
    description:
      "Giải pháp quản trị web giúp bạn tiết kiệm thời gian và nhân sự",
    color: "#52c41a",
  },
  {
    icon: <RocketOutlined className={styles.serviceIcon} />,
    title: "QUẢNG CÁO ONLINE",
    description:
      "Cung cấp trọn gói các dịch vụ quảng cáo giúp bạn gia tăng Doanh Số",
    color: "#722ed1",
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={1} className={styles.mainTitle}>
          DỊCH VỤ ĐANG CUNG CẤP
        </Title>
        <Text className={styles.subtitle}>
          Chúng tôi luôn sẵn sàng cung cấp cho bạn những giải pháp dịch vụ web
          landing page tối ưu nhất để giúp bạn tối ưu chi phí quảng cáo, gia
          tăng khách hàng và tăng tỷ lệ chốt đơn cao nhất
        </Text>
      </div>

      <Row gutter={[32, 32]} className={styles.servicesGrid}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              className={styles.serviceCard}
              style={{
                background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
              }}
              bordered={false}
            >
              <div
                className={styles.serviceIconWrapper}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <div className={styles.serviceImage}></div>
              <Title
                level={3}
                className={styles.serviceTitle}
                style={{ color: service.color }}
              >
                {service.title}
              </Title>
              <Paragraph className={styles.serviceDescription}>
                {service.description}
              </Paragraph>
              <Button
                type="primary"
                className={styles.detailButton}
                style={{
                  backgroundColor: service.color,
                  borderColor: service.color,
                }}
              >
                XEM CHI TIẾT
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={styles.features}></div>
    </div>
  );
};

export default ServicesPage;
