import React from "react";
import { Typography, Row, Col, Card, Button, List, Space } from "antd";
import { CheckOutlined, GiftOutlined } from "@ant-design/icons";
import styles from "./PricingPage.module.css";

const { Title, Text, Paragraph } = Typography;

const packages = [
  {
    price: "1,500",
    name: "GÓI CƠ BẢN",
    description:
      "Thiết kế Landing page dựa trên những mẫu có sẵn và hỗ trợ tùy chỉnh thay đổi nội dung, hình ảnh theo thông tin cung cấp",
    features: [
      "Web Chuẩn SEO",
      "Tương Thích Mobile",
      "SEO Từ Khóa",
      "Tốc Độ Load Nhanh",
      "Giao Diện Theo Mẫu",
    ],
    gifts: ["Tặng chứng chỉ số SSL", "Tặng Hosting 1 Năm"],
    backgroundColor: "#fdf6f0",
  },
  {
    price: "2,500",
    name: "GÓI PHỔ THÔNG",
    description:
      "Thiết Kế Landing Page theo yêu cầu của Khách Hàng và bố cục và hình ảnh dựa theo web mẫu mà khách hàng cung cấp",
    features: [
      "Web Chuẩn SEO",
      "Tương Thích Mobile",
      "SEO Từ Khóa",
      "Tốc Độ Load Nhanh",
      "Giao Diện Chỉnh sửa",
    ],
    gifts: ["Tặng chứng chỉ số SSL", "Tặng Hosting 1 Năm"],
    backgroundColor: "#f0faf9",
    highlight: true,
  },
  {
    price: "5,000",
    name: "GÓI NÂNG CAO",
    description:
      "Thiết Kế Landing Page theo yêu cầu của Khách Hàng và cài đặt cấu hình lên chính web hiện đang có nếu tương thích",
    features: [
      "Web Chuẩn SEO",
      "Tương Thích Mobile",
      "SEO Từ Khóa",
      "Tốc Độ Load Nhanh",
      "Giao Diện Thiết kế",
    ],
    gifts: ["Tặng chứng chỉ số SSL", "Tặng Hosting 1 Năm"],
    backgroundColor: "#fdf6f0",
  },
];

const PricingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={1} className={styles.mainTitle}>
          BẢNG GIÁ DỊCH VỤ LANDING PAGE
        </Title>
        <Text className={styles.subtitle}>
          Chính sách bảng giá dịch vụ LANDING PAGE TẠI{" "}
          <span className={styles.highlight}>CCO MEDIA</span>
        </Text>
      </div>

      <Row gutter={[24, 24]} className={styles.pricingGrid}>
        {packages.map((pkg, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              className={styles.pricingCard}
              style={{ backgroundColor: pkg.backgroundColor }}
              bordered={false}
            >
              <Title level={2} className={styles.price}>
                {pkg.price}
              </Title>
              <Title level={3} className={styles.packageName}>
                {pkg.name}
              </Title>
              <Paragraph className={styles.description}>
                {pkg.description}
              </Paragraph>

              <List
                className={styles.featureList}
                dataSource={pkg.features}
                renderItem={(item) => (
                  <List.Item>
                    <Space>
                      <CheckOutlined className={styles.checkIcon} />
                      <Text>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />

              <List
                className={styles.giftList}
                dataSource={pkg.gifts}
                renderItem={(item) => (
                  <List.Item>
                    <Space>
                      <GiftOutlined className={styles.giftIcon} />
                      <Text>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />

              <Button type="primary" className={styles.registerButton}>
                ĐĂNG KÝ NGAY
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={styles.description}>
        <Paragraph>
          Chính sách{" "}
          <span className={styles.highlight}>
            BẢNG GIÁ DỊCH VỤ LANDING PAGE
          </span>{" "}
          được <span className={styles.highlight}>CCO MEDIA</span> đưa ra với
          nhiều mức gói khác nhau giúp khách hàng có nhiều sự lựa chọn cho phù
          hợp với yêu cầu{" "}
          <span className={styles.highlight}>THIẾT KẾ LANDING PAGE GIÁ RẺ</span>
          . Với mức giá cạnh tranh nhất trên thị trường cộng với những điểm mạnh
          vượt trội khi triển khai{" "}
          <span className={styles.bold}>DỊCH VỤ LANDING PAGE</span> và với các
          gói COMBO tặng kèm miễn phí khi khách hàng đặt dịch vụ thiết kế
          landing page <span className={styles.bold}>ĐẢM BẢO</span> khách hàng
          sẽ nhận được <span className={styles.highlight}>NHIỀU HƠN</span> những
          gì mà khách hàng phải trả
        </Paragraph>
        <Paragraph>
          Trải qua nhiều năm trong nghề thiết kế{" "}
          <span className={styles.highlight}>LANDING PAGE</span> cho các khách
          hàng và các thương hiệu thì chúng tôi nhận thấy chính sách bảng giá
          dịch vụ landing page cũng chính là yếu tố mà rất nhiều khách hàng cần
          nhắc trước khi chọn ký hợp đồng dịch vụ. Hiểu được vấn đề đó nên{" "}
          <span className={styles.highlight}>CCO MEDIA</span> đã đưa ra mức giá
          rất thấp để hỗ trợ khách hàng giúp ai cũng có thể đăng ký thực hiện 1
          trang web landing page dành riêng cho mình để giới thiệu các sản phẩm
          dịch vụ cho hiệu quả cao nhất
        </Paragraph>
      </div>
    </div>
  );
};

export default PricingPage;
