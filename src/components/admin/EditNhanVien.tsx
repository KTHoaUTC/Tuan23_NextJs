import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

interface DataType {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: number;
  }

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
      title="Sửa Loại Sản Phẩm"
      okText="Edit"
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
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
          <Form.Item name="id" label="Mã Nhân Viên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="userName" label="Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="passWord" label="Mật Khẩu" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Số Điện Thoại" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gioiTinh" label="Giới Tính" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
      </Form>
    </Modal>
  );
};

const EditNhanVien: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
       <EditOutlined />
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

export default EditNhanVien;