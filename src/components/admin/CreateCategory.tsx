import React, { useEffect, useRef, useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Typography,
} from "antd";
import type { FormInstance } from "antd/es/form";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserType {
  name: string;
  age: string;
  soluong: number;
  mota: string;
  trangthai: string[];
}

interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
}

const useResetFormOnCloseModal = ({
  form,
  open,
}: {
  form: FormInstance;
  open: boolean;
}) => {
  const prevOpenRef = useRef<boolean>();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;

  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};

const ModalForm: React.FC<ModalFormProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onSave = () => {
    form.submit();
  };

  return (
    <Modal
      title="Thêm Loại Sản Phẩm"
      open={open}
      onOk={onSave}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="Tên Sản Phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="soluong" label="Số Lượng" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="trangthai"
          label="Trạng Thái"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="1">Còn Hàng</Select.Option>
            <Select.Option value="2">Hết Hàng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="mota" label="Mô Tả" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateCategory: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showUserModal = () => {
    setOpen(true);
  };

  const hideUserModal = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === "userForm") {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue("users") || [];
          basicForm.setFieldsValue({ users: [...users, values] });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="group" label="Group Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) =>
            prevValues.users !== curValues.users
          }
        >
          {({ getFieldValue }) => {
            const users: UserType[] = getFieldValue("users") || [];
            return users.length ? (
              <ul>
                {users.map((user) => (
                  <li key={user.name} className="user">
                    {/* <Avatar icon={<UserOutlined />} /> */}
                    {user.name} -{user.soluong}-{user.trangthai}-{user.mota}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          {/* <Button htmlType="submit" type="primary">
            Submit
          </Button> */}
          <Button
            htmlType="button"
            style={{ margin: "0 8px" }}
            onClick={showUserModal}
          >
            Add User
          </Button>
        </Form.Item>
      </Form>

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};

export default CreateCategory;
