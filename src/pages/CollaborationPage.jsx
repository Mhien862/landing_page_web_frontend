import React from "react";
import { Typography, Button, Row, Col } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import styles from "./CollaborationPage.module.css";

const { Title, Paragraph, Text } = Typography;

const CollaborationPage = () => {
  return (
    <div className={styles.container}>
      <Title level={1} className={styles.mainTitle}>
        HỢP TÁC THIẾT KẾ LANDING PAGE
      </Title>

      <Row gutter={[48, 48]} align="middle" className={styles.content}>
        <Col xs={24} md={12}>
          <div className={styles.textContent}>
            <Paragraph className={styles.introText}>
              Xin chào bạn. Nếu bạn đang như câu sau thì hãy nhanh tay liên hệ
              ngay với chúng tôi để hợp tác bạn nhé:
            </Paragraph>

            <div className={styles.reasonList}>
              <div className={styles.reasonItem}>
                <Text strong>
                  1. Bạn đang có hệ thống giải pháp giúp thiết kế các trang
                </Text>
                <div className={styles.highlight}>
                  <Text strong type="primary">
                    LANDING PAGE
                  </Text>
                  <Text>
                    {" "}
                    nhanh gọn và đang tìm các bên để phân phối tiếp thị tới
                    khách hàng
                  </Text>
                </div>
              </div>

              <div className={styles.reasonItem}>
                <Text strong>
                  2. Bạn đang muốn học hỏi để có thể tự biết thiết kế landing
                  page hoặc muốn tìm việc làm thiết kế trang landing page online
                </Text>
                <div className={styles.highlight}>
                  <Text strong type="primary">
                    VẬY
                  </Text>
                  <Text>
                    {" "}
                    thì bạn đã tìm đúng nơi để hợp tác rồi, chúng tôi sẵn sàng
                    hợp tác cùng bạn để đôi bên cùng{" "}
                  </Text>
                  <Text strong type="primary">
                    WIN WIN
                  </Text>
                </div>
              </div>
            </div>

            <Paragraph className={styles.conclusionText}>
              Nếu bạn đang có nhu cầu hãy liên hệ ngay để chúng ta cùng trao đổi
              chi tiết bạn nhé
            </Paragraph>

            <Button
              type="primary"
              size="large"
              icon={<PhoneOutlined />}
              className={styles.contactButton}
              href="tel:0902813410"
            >
              HOTLINE/ZALO: 0902 813 410
            </Button>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className={styles.imageWrapper}>
            <img
              src="https://dichvulandingpage.com/wp-content/uploads/elementor/thumbs/hop-tac-thiet-ke-landingpage-pxvud6zrgqfxv22iq7mkd6al0qcgp5fb83f9wo2748.png"
              alt="Hợp tác thiết kế Landing Page"
              className={styles.illustration}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CollaborationPage;
