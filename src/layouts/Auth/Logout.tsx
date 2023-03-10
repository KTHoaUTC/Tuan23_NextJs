import React, { useRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import cookie from "js-cookie";

const Login = styled.div`
  text-align: center;
  align-items: center;
  padding-top: 3rem;
  padding-left: 30rem;
`;

export default function LogoutAdmin() {
  const email = useRef("");
  const password = useRef("");
  return (
    <Login>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            type={"username"}
            onChange={(e) => (email.current = e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            type={"password"}
            onChange={(e) => (password.current = e.target.value)}
          />
          <a className="ForgotPassword">
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() =>
              signIn("credentials", {
                email: email.current,
                password: password.current,
                callbackUrl:"/admin",
                redirect:true,
              })
            }
          >
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
    </Login>
  );
}
