import React from "react";
import { Typography, Row, Col, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <footer>
      {/* Tư vấn miễn phí section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1677ff 0%, #003eb3 100%)",
          padding: "50px 5%",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "url('https://dichvulandingpage.com/wp-content/uploads/2022/11/bg-footer.png')",
            opacity: 0.1,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title
            level={2}
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            TƯ VẤN MIỄN PHÍ
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "16px",
              marginBottom: "30px",
            }}
          >
            Bạn cần sự hỗ trợ hoặc tư vấn thêm về thông tin sản phẩm dịch vụ hãy
            liên hệ ngay với CCO MEDIA
          </Text>
          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#fadb14",
                borderColor: "#fadb14",
                color: "black",
                fontWeight: "bold",
                padding: "0 40px",
                height: "50px",
                fontSize: "16px",
              }}
              href="tel:0902813410"
            >
              HOTLINE/ZALO: 0902 813 410
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div
        style={{ background: "black", padding: "50px 5% 30px", color: "white" }}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={6}>
            <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
              LIÊN HỆ VỚI CCO MEDIA
            </Title>
            <div style={{ marginBottom: "15px" }}>HOTLINE 1: 0902 813 410</div>
            <div style={{ marginBottom: "15px" }}>HOTLINE 2: 094 1945858</div>
            <div style={{ marginBottom: "15px" }}>HOTLINE 3: 0902 884 990</div>
            <div style={{ marginBottom: "15px" }}>EMAIL: info@ccomedia.vn</div>
            <div style={{ marginBottom: "20px" }}>
              154 Phạm Văn Chiêu, Phường 9, Gò Vấp
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="#" style={{ color: "white", fontSize: "24px" }}>
                <FacebookOutlined />
              </a>
              <a href="#" style={{ color: "white", fontSize: "24px" }}>
                <InstagramOutlined />
              </a>
              <a href="#" style={{ color: "white", fontSize: "24px" }}>
                <TwitterOutlined />
              </a>
              <a href="#" style={{ color: "white", fontSize: "24px" }}>
                <YoutubeOutlined />
              </a>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
              DỊCH VỤ
            </Title>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <a href="#" style={{ color: "white" }}>
                ĐK TÊN MIỀN
              </a>
              <a href="#" style={{ color: "white" }}>
                ĐK HOSTING
              </a>
              <a href="#" style={{ color: "white" }}>
                TÀI KHOẢN LADIPAGE
              </a>
              <a href="#" style={{ color: "white" }}>
                QUẢN TRỊ WEBSITE
              </a>
              <a href="#" style={{ color: "white" }}>
                TỐI ƯU SEO WEB
              </a>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
              HƯỚNG DẪN
            </Title>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <a href="#" style={{ color: "white" }}>
                CHỌN KHỐI
              </a>
              <a href="#" style={{ color: "white" }}>
                CHỌN TIỆN ÍCH
              </a>
              <a href="#" style={{ color: "white" }}>
                CHỌN GIAO DIỆN
              </a>
              <a href="#" style={{ color: "white" }}>
                CHỈNH SỬA LADIPAGE
              </a>
              <a href="#" style={{ color: "white" }}>
                SAO LƯU WEB
              </a>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white", marginBottom: "20px" }}>
              WEB DỊCH VỤ
            </Title>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <a href="#" style={{ color: "white" }}>
                SMS BRANDNAME
              </a>
              <a href="#" style={{ color: "white" }}>
                EMAIL MARKETING
              </a>
              <a href="#" style={{ color: "white" }}>
                DỊCH VỤ AUTO CALL
              </a>
              <a href="#" style={{ color: "white" }}>
                QUẢNG CÁO TIKTOK
              </a>
              <a href="#" style={{ color: "white" }}>
                QUẢNG CÁO THƯƠNG HIỆU
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "30px",
            paddingTop: "20px",
            textAlign: "center",
            color: "#fadb14",
          }}
        >
          BẢN QUYỀN THUỘC VỀ DỊCH VỤ THIẾT KẾ LANDING PAGE - SẢN PHẨM CỦA CCO
          MEDIA GROUP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
