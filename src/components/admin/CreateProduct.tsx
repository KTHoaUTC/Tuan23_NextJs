import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, Radio, Select } from 'antd';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Thêm Loại Sản Phẩm"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        
        <Form.Item name="id" label="Mã Sản Phẩm" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="loaiSanPham" label="Tên Sản Phẩm" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="soLuong" label="Số Lượng"rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name="trangThai" label="Trạng Thái"rules={[{ required: true }]}>
            <Select>
              <Select.Option value="1">Còn Hàng</Select.Option>
              <Select.Option value="2">Hết Hàng</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="moTa"label="Mô Tả"rules={[{ required: true }]}>
            <Input />
          </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateProduct: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{marginBottom: '2rem'}}
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        + New
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default CreateProduct;