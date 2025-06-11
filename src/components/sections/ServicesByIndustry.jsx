import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";

const { Title } = Typography;
const { Meta } = Card;

// Dữ liệu mẫu
const services = [
  {
    title: "Bất động sản",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Thẩm mỹ viện",
    img: "https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nha khoa",
    img: "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shop Online",
    img: "https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web sản phẩm",
    img: "https://images.unsplash.com/photo-1615623705641-db34ad498cc5?q=80&w=3640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web dịch vụ",
    img: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web sự kiện",
    img: "https://images.unsplash.com/photo-1660794483744-d6c7ab2ac6fd?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web khoá học",
    img: "https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ServicesByIndustry = () => {
  return (
    <div style={{ padding: "50px 5%" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
        DỊCH VỤ LANDING PAGE THEO NGÀNH
      </Title>
      <Row gutter={[16, 16]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={6} key={service.title}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.img} />}
              actions={[
                <Button type="primary" key="details">
                  Xem chi tiết
                </Button>,
              ]}
            >
              <Meta title={service.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesByIndustry;
