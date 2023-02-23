import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";

const EditProduct: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{ float: "right", margin: "5px" }}
        type="primary"
        onClick={showModal}
      >
        <EditOutlined />
      </Button>
      <Modal
        title="Sửa sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Tên Sản Phẩm">
            <Input />
          </Form.Item>
          <Form.Item label="Số Lượng">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Trạng Thái">
            <Select>
              <Select.Option value="1">Còn Hàng</Select.Option>
              <Select.Option value="2">Hết Hàng</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mô Tả">
            <Input />
          </Form.Item>
          <Form.Item label="">
            <Button style={{ float: "right" }} type="primary">
              Sửa
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProduct;
