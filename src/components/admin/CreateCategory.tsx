import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

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
        <Form.Item name="id" label="Mã Loại Sản Phẩm" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="loaiSanPham" label="Loại Sản Phẩm" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
  
          <Form.Item name="moTa" label="Mô tả" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="trangThai" label="Trạng Thái" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateCategory: React.FC = () => {
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

export default CreateCategory;