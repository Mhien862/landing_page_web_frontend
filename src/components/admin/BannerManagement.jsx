import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  message,
  Image,
  Typography,
  Space,
  Divider,
  Spin,
} from "antd";
import { SaveOutlined, EyeOutlined } from "@ant-design/icons";
import { settingsAPI } from "../../services/api";

const { Title, Text } = Typography;
const { TextArea } = Input;

const BannerManagement = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [bannerData, setBannerData] = useState(null);

  // Load banner data khi component mount
  useEffect(() => {
    loadBannerData();
  }, []);

  const loadBannerData = async () => {
    setLoading(true);
    try {
      const response = await settingsAPI.getHeroBanner();
      if (response.data.success) {
        const data = response.data.data;
        setBannerData(data);
        form.setFieldsValue({
          image: data.image,
          title: data.title,
          subtitle: data.subtitle,
        });
      }
    } catch (error) {
      console.error("Error loading banner:", error);
      message.error("Lỗi tải dữ liệu banner");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (values) => {
    setSaving(true);
    try {
      const response = await settingsAPI.updateHeroBanner(values);
      if (response.data.success) {
        setBannerData(values);
        message.success("Cập nhật banner thành công!");
      }
    } catch (error) {
      console.error("Error saving banner:", error);
      if (error.response?.data?.error) {
        message.error(error.response.data.error);
      } else {
        message.error("Lỗi cập nhật banner");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
        <div style={{ marginTop: "16px" }}>Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div>
      <Title level={2}>Quản lý Banner</Title>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        {/* Form chỉnh sửa */}
        <Card title="Chỉnh sửa Banner" style={{ height: "fit-content" }}>
          <Form form={form} layout="vertical" onFinish={handleSave}>
            <Form.Item
              label="URL Hình ảnh"
              name="image"
              rules={[
                { required: true, message: "Vui lòng nhập URL hình ảnh!" },
                { type: "url", message: "URL không hợp lệ!" },
              ]}
            >
              <Input placeholder="https://example.com/image.jpg" size="large" />
            </Form.Item>

            <Form.Item
              label="Tiêu đề"
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
            >
              <Input placeholder="Tiêu đề banner" size="large" />
            </Form.Item>

            <Form.Item
              label="Mô tả"
              name="subtitle"
              rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
            >
              <TextArea rows={4} placeholder="Mô tả banner" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={saving}
                icon={<SaveOutlined />}
                size="large"
                block
              >
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Preview */}
        <Card title="Xem trước Banner" style={{ height: "fit-content" }}>
          {bannerData && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <Text strong>Hình ảnh:</Text>
                <div style={{ marginTop: "8px" }}>
                  <Image
                    src={bannerData.image}
                    alt="Banner Preview"
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
                  />
                </div>
              </div>

              <Divider />

              <div style={{ marginBottom: "16px" }}>
                <Text strong>Tiêu đề:</Text>
                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
                    background: "#f5f5f5",
                    borderRadius: "6px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {bannerData.title}
                </div>
              </div>

              <div>
                <Text strong>Mô tả:</Text>
                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
                    background: "#f5f5f5",
                    borderRadius: "6px",
                    lineHeight: "1.6",
                  }}
                >
                  {bannerData.subtitle}
                </div>
              </div>

              <div style={{ marginTop: "16px" }}>
                <Button
                  type="default"
                  icon={<EyeOutlined />}
                  onClick={() => window.open("/", "_blank")}
                >
                  Xem trên trang chủ
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default BannerManagement;
