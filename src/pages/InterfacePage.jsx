import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import styles from "./InterfacePage.module.css";

const interfaceList = [
  {
    id: "BDS20",
    name: "GIAO DIỆN 1",
    image: "https://example.com/interface1.jpg",
  },
  {
    id: "BDS21",
    name: "GIAO DIỆN 2",
    image: "https://example.com/interface2.jpg",
  },
  {
    id: "BDS22",
    name: "GIAO DIỆN 3",
    image: "https://example.com/interface3.jpg",
  },
  {
    id: "BDS23",
    name: "GIAO DIỆN 4",
    image: "https://example.com/interface4.jpg",
  },
  {
    id: "BDS24",
    name: "GIAO DIỆN 5",
    image: "https://example.com/interface5.jpg",
  },
  {
    id: "BDS25",
    name: "GIAO DIỆN 6",
    image: "https://example.com/interface6.jpg",
  },
  {
    id: "BDS26",
    name: "GIAO DIỆN 7",
    image: "https://example.com/interface7.jpg",
  },
  {
    id: "BDS27",
    name: "GIAO DIỆN 8",
    image: "https://example.com/interface8.jpg",
  },
  {
    id: "BDS28",
    name: "GIAO DIỆN 9",
    image: "https://example.com/interface9.jpg",
  },
  {
    id: "BDS29",
    name: "GIAO DIỆN 10",
    image: "https://example.com/interface10.jpg",
  },
  {
    id: "BDS30",
    name: "GIAO DIỆN 11",
    image: "https://example.com/interface11.jpg",
  },
  {
    id: "BDS31",
    name: "GIAO DIỆN 12",
    image: "https://example.com/interface12.jpg",
  },
  {
    id: "BDS32",
    name: "GIAO DIỆN 13",
    image: "https://example.com/interface13.jpg",
  },
  {
    id: "BDS33",
    name: "GIAO DIỆN 14",
    image: "https://example.com/interface14.jpg",
  },
  {
    id: "BDS34",
    name: "GIAO DIỆN 15",
    image: "https://example.com/interface15.jpg",
  },
  {
    id: "BDS35",
    name: "GIAO DIỆN 16",
    image: "https://example.com/interface16.jpg",
  },
  {
    id: "BDS36",
    name: "GIAO DIỆN 17",
    image: "https://example.com/interface17.jpg",
  },
  {
    id: "BDS37",
    name: "GIAO DIỆN 18",
    image: "https://example.com/interface18.jpg",
  },
  {
    id: "BDS38",
    name: "GIAO DIỆN 19",
    image: "https://example.com/interface19.jpg",
  },
  {
    id: "BDS39",
    name: "GIAO DIỆN 20",
    image: "https://example.com/interface20.jpg",
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

      <Button
        type="primary"
        className={styles.moreButton}
        href="https://dichvulandingpage.com/giao-dien/"
        target="_blank"
      >
        XEM THÊM ĐẦY ĐỦ MẪU GIAO DIỆN
      </Button>

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
              <Button
                type="primary"
                href="https://dichvulandingpage.com/lien-he/"
                target="_blank"
              >
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
