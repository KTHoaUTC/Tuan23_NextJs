import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { apis } from "@/apis/ApiNhanVien";
interface DataType {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: number;
}
interface CollectionEditFormProps {
  open: boolean;
  onUpdate: any;
  onCancel: () => void;
  users: {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: number;
  };
}
const CollectionEditForm: React.FC<CollectionEditFormProps> = ({
  open,
  onUpdate,
  onCancel,
  users,
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
            onUpdate(users.id, values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        {/* <Form.Item  name="id" label="Mã Nhân Viên" rules={[{ required: true }]}>
          <Input />
        </Form.Item> */}
        <Form.Item
          initialValue={users.email}
          name="email"
          label="Email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={users.username}
          name="username"
          label="Tên"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={users.password}
          name="password"
          label="Mật Khẩu"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={users.phone}
          name="phone"
          label="Số Điện Thoại"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const EditUser = ({
  users,
  resetData,
}: {
  resetData: any;
  users: {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: number;
  };
}) => {
  const [open, setOpen] = useState(false);
  const [nhanviens, setNhanViens] = useState<DataType[]>([]);
  const handleEdit = async (id: number, updateData: DataType) => {
    const result = await apis.EditDataNhanVien(id, updateData);
    setNhanViens(
      nhanviens.map((item) =>
        item.id === id ? { ...item, ...result.nhanviens } : item
      )
    );
    resetData(id, nhanviens);
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
      <CollectionEditForm
        open={open}
        users={users}
        onUpdate={handleEdit}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default EditUser;