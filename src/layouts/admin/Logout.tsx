import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const LogoutAdmin: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
      <a className="ForgotPassword">
        {" "}
        <i> Forgot your password?</i>
      </a>
    </Form.Item>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <p> Or Login with: </p>
      <div className="iconLogin">
        <a className="iconFacebook">
          <FacebookOutlined />
        </a>
        <a className="iconGoogle">
          <GooglePlusOutlined />
        </a>
      </div>
    </Form.Item>
  </Form>
);

export default LogoutAdmin;
