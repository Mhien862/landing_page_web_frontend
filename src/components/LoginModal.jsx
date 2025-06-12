import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authAPI } from "../services/api";

const LoginModal = ({ visible, onCancel, onLogin }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await authAPI.login({
        username: values.username,
        password: values.password,
      });

      if (response.data.success) {
        const { token, user } = response.data.data;

        // Lưu token vào localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        message.success("Đăng nhập thành công!");
        form.resetFields();
        onLogin(user);
        onCancel();
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response?.data?.error) {
        message.error(error.response.data.error);
      } else {
        message.error("Đăng nhập thất bại!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Đăng nhập hệ thống"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={400}
    >
      <Form
        form={form}
        name="login"
        onFinish={handleLogin}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên đăng nhập!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Tên đăng nhập"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Mật khẩu"
            size="large"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "#f0f0f0",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ margin: "0 0 8px 0" }}>Tài khoản demo:</h4>
        <p style={{ margin: 0, fontSize: "12px" }}>
          <strong>Username:</strong> superadmin
          <br />
          <strong>Password:</strong> admin123456
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
