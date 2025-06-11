import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title } = Typography;

const benefits = [
  {
    title: "THIẾT KẾ NHANH CHÓNG",
    description:
      "Thời gian hoàn thành thiết kế Landing Page từ 1- 3 ngày và có thể nhanh hơn tùy thuộc vào yêu cầu và những thông tin mà khách hàng cung cấp",
    icon: "https://plus.unsplash.com/premium_photo-1661553008975-40cc0aa64b95?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LANDING PAGE THU HÚT",
    description:
      "Landing page thiết kế với nội dung hấp dẫn và thu hút giúp nâng cao TỶ LỆ CHUYỂN ĐỔI thông qua các biểu mẫu đăng ký có trên website",
    icon: "https://plus.unsplash.com/premium_photo-1678705961907-2aea6bd5e1ea?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "TỐI ƯU VỀ CHI PHÍ",
    description:
      "CCO MEDIA sẽ thiết kế cho bạn 1 landing page với mức CHI PHÍ CẠNH TRANH và ngân sách quảng cáo cũng giảm nhờ landing page được tối ưu SEO",
    icon: "https://plus.unsplash.com/premium_photo-1678567671227-fc52dc1e307f?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "DỄ DÀNG ĐO LƯỜNG HIỆU QUẢ LANDING PAGE",
    description:
      "Bạn rất dễ dàng đọc các chỉ số trong báo cáo hiệu quả của trang web thông qua các công cụ quản lý và các công cụ tích hợp của bên thứ 3 như Google Analytics",
    icon: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "THIẾT KẾ GIAO DIỆN CHUYÊN NGHIỆP",
    description:
      "Tất cả các landing page được thiết kế với giao diện HẤP DẪN khách hàng giúp mang lại trải nghiệm tuyệt vời nhất cho khách hàng của bạn",
    icon: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SỬ DỤNG NỀN TẢNG SERVER TỐC ĐỘ CAO",
    description:
      "Nền tảng SERVER tốc độ cao giúp người dùng truy cập nhanh chóng và giúp tăng trải nghiệm cho khách hàng khi xem trên cả máy tính và di động",
    icon: "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Benefits = () => {
  return (
    <div style={{ padding: "50px 5%" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        LỢI ÍCH KHI SỬ DỤNG LANDING PAGE CỦA CCO MEDIA
      </Title>
      <Row gutter={[32, 32]}>
        {benefits.map((benefit, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              style={{ height: "100%" }}
              cover={
                <div style={{ padding: "24px", textAlign: "center" }}>
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    style={{ height: "120px", objectFit: "contain" }}
                  />
                </div>
              }
            >
              <Title
                level={4}
                style={{ textAlign: "center", color: "#ff4d4f" }}
              >
                {benefit.title}
              </Title>
              <Typography.Paragraph style={{ textAlign: "center" }}>
                {benefit.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Benefits;
