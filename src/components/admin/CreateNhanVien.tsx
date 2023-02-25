import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import axios from 'axios';
import { apis } from '@/apis/ApiNhanVien';

interface Values {
  title: string;
  description: string;
  modifier: string;
}
interface DataType {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: number;
}
interface CollectionCreateFormProps {
  open: boolean;
  onCreate: any;
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
      title="Thêm Mới Nhân Viên"
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
      style={{ maxWidth: 600 }}
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
      </Form>
    </Modal>
  );
};

const CreateNhanVien: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [nhanviens, setNhanViens] = useState<DataType[]>([]);
const handleCreate= async( newData: DataType)=>{
  await apis.CreateDataNhanVien(newData);
  setNhanViens([...nhanviens, newData]);
  console.log(newData)
  setOpen(false)
}
  return (
    <div>
      <Button
        style={{marginBottom: '2rem', float:'right'}}
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        + New
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={handleCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default CreateNhanVien;