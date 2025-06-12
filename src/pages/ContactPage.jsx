import React, { useState } from "react";
import { Typography, Row, Col, Card, Form, Input, Button, message } from "antd";
import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import apiClient from "../services/api";
import styles from "./ContactPage.module.css";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await apiClient.post("/api/contacts", values);
      if (response.data.success) {
        message.success("Gửi thông tin liên hệ thành công!");
        form.resetFields();
      }
    } catch (error) {
      message.error(
        error.response?.data?.error || "Có lỗi xảy ra, vui lòng thử lại!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Title level={1} className={styles.mainTitle}>
        THÔNG TIN LIÊN HỆ
      </Title>

      <Title level={2} className={styles.companyName}>
        CÔNG TY TNHH TRUYỀN THÔNG CCO
      </Title>

      <Row gutter={[32, 32]} className={styles.contactInfo}>
        <Col xs={24} md={8}>
          <Card className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <HomeOutlined className={styles.icon} />
            </div>
            <Title level={3} className={styles.cardTitle}>
              TRỤ SỞ CÔNG TY
            </Title>
            <Text className={styles.cardText}>
              154 Phạm Văn Chiêu, Phường 9, Gò Vấp
            </Text>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <PhoneOutlined className={styles.icon} />
            </div>
            <Title level={3} className={styles.cardTitle}>
              HOTLINE
            </Title>
            <Text className={styles.cardText}>
              <a href="tel:0902813410" className={styles.link}>
                0902.813.410
              </a>
            </Text>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <MailOutlined className={styles.icon} />
            </div>
            <Title level={3} className={styles.cardTitle}>
              EMAIL HỖ TRỢ
            </Title>
            <Text className={styles.cardText}>
              <a
                href="mailto:dichvuweblandingpage@gmail.com"
                className={styles.link}
              >
                dichvuweblandingpage@gmail.com
              </a>
            </Text>
          </Card>
        </Col>
      </Row>

      <div className={styles.formContainer}>
        <Card className={styles.formCard}>
          <Title level={2} className={styles.formTitle}>
            ĐĂNG KÝ TƯ VẤN
          </Title>
          <Form
            form={form}
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            className={styles.form}
          >
            <Form.Item
              name="name"
              label="Họ và tên"
              rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
            >
              <Input size="large" placeholder="Nhập họ và tên của bạn" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input size="large" placeholder="Nhập email của bạn" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
            >
              <Input size="large" placeholder="Nhập số điện thoại của bạn" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Nội dung"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <TextArea
                rows={4}
                placeholder="Nhập nội dung cần tư vấn"
                className={styles.textarea}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className={styles.submitButton}
              >
                GỬI THÔNG TIN
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776714534!2d106.63305731533417!3d10.839543360839026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a8d2b7f8c5%3A0x8b7bb93a5d1b3a0a!2zMTU0IFBo4bqhbSBWxINuIENoacOqdSwgUGjGsOG7nW5nIDksIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1647325714548!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CCO Media Location"
          className={styles.map}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
