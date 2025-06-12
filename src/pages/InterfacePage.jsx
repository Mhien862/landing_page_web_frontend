import React, { useState } from "react";
import { Row, Col, Button, Modal, Typography } from "antd";
import styles from "./InterfacePage.module.css";

const { Text } = Typography;

const interfaceList = [
  {
    id: "BDS20",
    name: "GIAO DIỆN 1",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS21",
    name: "GIAO DIỆN 2",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS22",
    name: "GIAO DIỆN 3",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS23",
    name: "GIAO DIỆN 4",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS24",
    name: "GIAO DIỆN 5",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS25",
    name: "GIAO DIỆN 6",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS26",
    name: "GIAO DIỆN 7",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS27",
    name: "GIAO DIỆN 8",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS28",
    name: "GIAO DIỆN 9",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS29",
    name: "GIAO DIỆN 10",
    image: "https://example.com/interface10.jpg",
  },
  {
    id: "BDS30",
    name: "GIAO DIỆN 11",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all  ",
  },
  {
    id: "BDS31",
    name: "GIAO DIỆN 12",
    image: "https://example.com/interface12.jpg",
  },
  {
    id: "BDS32",
    name: "GIAO DIỆN 13",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS33",
    name: "GIAO DIỆN 14",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS34",
    name: "GIAO DIỆN 15",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS35",
    name: "GIAO DIỆN 16",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS36",
    name: "GIAO DIỆN 17",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS37",
    name: "GIAO DIỆN 18",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS38",
    name: "GIAO DIỆN 19",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
  {
    id: "BDS39",
    name: "GIAO DIỆN 20",
    image:
      "https://i0.wp.com/themes.svn.wordpress.org/builders-landing-page/1.0.8/screenshot.png?w=post-thumbnail&strip=all",
  },
];

const InterfacePage = () => {
  const [selectedInterface, setSelectedInterface] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (item) => {
    setSelectedInterface(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MẪU GIAO DIỆN LANDING PAGE BẤT ĐỘNG SẢN</h1>

      <Row gutter={[24, 24]} className={styles.interfaceGrid}>
        {interfaceList.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <div className={styles.interfaceCard}>
              <Button
                type="primary"
                className={styles.interfaceButton}
                onClick={() => showModal(item)}
              >
                {item.name}
              </Button>
              <div className={styles.interfaceId}>MÃ: {item.id}</div>
            </div>
          </Col>
        ))}
      </Row>

      <Button type="primary" className={styles.moreButton} target="_blank">
        XEM THÊM ĐẦY ĐỦ MẪU GIAO DIỆN
      </Button>

      <div className={styles.description}>
        <Text>
          <span className={styles.websiteName}>DICHVULANDINGPAGE.COM</span> là
          nơi chuyên thiết kế ra những{" "}
          <span className={styles.highlight}>MẪU GIAO DIỆN LANDING PAGE</span>{" "}
          đẹp và chuyên nghiệp phù hợp cho nhiều ngành nghề. ƯU ĐIỂM của landing
          page được thiết kế bởi Cao MEDIA là giao diện đẹp và bắt mắt, tối ưu
          hoá khả năng chuyển đổi, có tốc độ load trang nhanh, đó{" "}
          <span className={styles.highlight}>CHUẨN SEO</span> lên tới 100% giúp
          gia tăng thứ hạng tìm kiếm trên{" "}
          <span className={styles.bold}>GOOGLE</span> làm gia tăng lượng truy
          cập vào trang <span className={styles.bold}>LANDING PAGE</span>
        </Text>
      </div>
      <div className={styles.description}>
        <Text>
          Với đội ngũ nhân sự giàu kinh nghiệm đã trải qua nhiều dự án và với
          kho giao diện LANDING PAGE mẫu đa dạng, chúng tôi công ty{" "}
          <span className={styles.bold}>CCO MEDIA</span> tự tin sẽ mang tới cho
          quý KHÁCH HÀNG 1 trang web landing page ƯNG Ý nhất góp phần giúp bạn
          phát triển công việc KINH DOANH ONLINE tốt nhất. Nếu bạn cần triển
          khai thiết kế landing page hãy liên hệ ngay với chúng tôi để được đội
          ngũ chuyên gia hỗ trợ{" "}
          <span className={styles.highlight}>TƯ VẤN MIỄN PHÍ</span> hoàn toàn
          bạn nhé.
        </Text>
      </div>

      <Modal
        title={selectedInterface?.name}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedInterface && (
          <div className={styles.modalContent}>
            <img
              src={selectedInterface.image}
              alt={selectedInterface.name}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <p>Mã giao diện: {selectedInterface.id}</p>
              <Button type="primary" target="_blank">
                LIÊN HỆ ĐẶT HÀNG
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InterfacePage;
