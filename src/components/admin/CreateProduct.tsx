import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";

const CreateProduct: React.FC = () => {
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
        style={{ float: "right", margin: "10px" }}
        type="primary"
        onClick={showModal}
      >
        + New
      </Button>
      <Modal
        title="Thêm mới sản phẩm"
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
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateProduct;
