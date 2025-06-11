import React from "react";
import { Typography, Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Panel } = Collapse;

const faqItems = [
  {
    key: "1",
    question: "Để thiết kế 1 LANDING PAGE cần những gì ?",
    answer: `Để thiết kết được 1 trang landing page hoàn thiện và thu hút thì bạn cần cung cấp cho chúng tôi các thông tin chi tiết về nhu cầu thiết kế như: bố cục mong muốn, màu sắc chủ đạo, các tiện ích cần có và nội dung cần hiển thị trên landing page như hình ảnh, văn bản mô tả, các thông tin liên hệ…

`,
  },
  {
    key: "2",
    question: "Thời gian để thiết kế 1 trang LANDING PAGE là bao lâu ?",
    answer: `Thời gian để thiết kế hoàn thiện 1 trang landing page từ 1 ngày tới 1 tuần tuỳ thuộc vào yêu cầu thiết kế của bạn và mức độ tương tác làm việc của 2 bên, các tài liệu mà bạn cung cấp để đăng tải lên trang landing page`,
  },
  {
    key: "3",
    question: "Chi phí thiết kế trang LANDING PAGE là bao nhiêu ?",
    answer: `Để thiết kế hoàn thiện 1 trang bạn cần các chi phí sau: tên miền, hosting tài khoản thiết kế ladipage, phí công thiết kế, Trung bình từ 1,5tr tới 5tr tuỳ theo yêu cầu`,
  },
  {
    key: "4",
    question: "Landing page CÓ dùng để chạy quảng cáo được không ?",
    answer: `Có landing page hoàn toàn có thể dùng để setup chiến dịch quảng cáo bình thường giống như 1 trang website`,
  },
];

const FAQ = () => {
  return (
    <div style={{ padding: "50px 5%", background: "#f5f5f5" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        NHỮNG CÂU HỎI THƯỜNG GẶP
      </Title>

      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <PlusOutlined
            rotate={isActive ? 45 : 0}
            style={{ fontSize: "16px" }}
          />
        )}
        style={{ background: "#f5f5f5" }}
      >
        {faqItems.map((item) => (
          <Panel
            header={item.question}
            key={item.key}
            style={{
              marginBottom: 16,
              background: "#fff",
              borderRadius: 8,
              border: "1px solid #e8e8e8",
            }}
          >
            <div style={{ whiteSpace: "pre-line" }}>{item.answer}</div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
