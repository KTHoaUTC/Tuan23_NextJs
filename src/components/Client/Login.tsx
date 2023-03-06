import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { break_points } from "@/utils/styled";
import React from "react";
import styled from "styled-components";
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const HomeLogin = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginTop: "5rem",
  fontFamily: "Gilroy",
  [break_points.mobile_]: {
    marginLeft: "20rem",
  },
});
const LoginTitle = styled.div({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "2.8rem",
  color: "#FF881D",
  marginTop: "5rem",
  marginBottom: "3rem",
  [break_points.laptop_]: {
    fontSize: "2.5rem",
  },
  [break_points.tablet_]: {
    fontSize: "2rem",
  },
  [break_points.mobile_]: {
    fontSize: "1.7rem",
  },
});

const LoginForm = styled.div({});

const SocialLogin = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginTop: "2rem",
  fontFamily: "Gilroy",
});
const LoginWith = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  fontFamily: "Gilroy",
  paddingBottom: "2rem",
  fontSize: "2rem",
  [break_points.laptop_]: {
    fontSize: "1.7rem",
  },
  [break_points.tablet_]: {
    fontSize: "1.5rem",
  },
  [break_points.mobile_]: {
    fontSize: "1.2rem",
  },
});

const LoginIcon = styled.div({
  display: "flex",
  textDecoration: "none",
  width: "50rem",
  fontSize: "1.7rem",
  paddingLeft: "20rem",
  paddingRight: "10rem",
  color: "red",
  [break_points.laptop_]: {
    fontSize: "1.5rem",
  },
  [break_points.tablet_]: {
    fontSize: "2rem",
    marginLeft: "8rem",
    paddingLeft: "0rem",
  },
  [break_points.mobile_]: {
    fontSize: "1rem",
    marginRight: "0rem",
    marginLeft:'12rem',
  },
});
const FacebookLogin = styled.button({
  width: "40rem",
  fontSize: "1.5rem",
  color: "white",
  marginRight: "5rem",
  backgroundColor: "#2E92FF",
  border: "0.1rem solid #2E92FF",
  height: "3rem",
  borderRadius: "2rem",
  [break_points.laptop_]: {
    fontSize: "1.4rem",
  },
  [break_points.tablet_]: {
    width: "15rem",
    fontSize: "1rem",
    height: "2.5rem",
    marginLeft: "10rem",
    marginRight: "0rem",
  },
  [break_points.mobile_]: {
    fontSize: "0.8rem",
    width: "12rem",
  },
});
const GoogleLogin = styled.button({
  width: "40rem",
  fontSize: "1.5rem",
  color: "white",
  marginRight: "5rem",
  backgroundColor: "#828282",
  border: "0.1rem solid #828282",
  height: "3rem",
  borderRadius: "2rem",
  [break_points.laptop_]: {
    fontSize: "1.4rem",
  },
  [break_points.tablet_]: {
    width: "15rem",
    fontSize: "1rem",
    marginLeft: "4rem",
    marginRight: "0rem",
    height: "2.5rem",
  },
  [break_points.mobile_]: {
    fontSize: "0.8rem",
    width: "12rem",
  },
});

const LoginClient = () => {
  return (
    <HomeLogin>
      <LoginTitle> Đăng Nhập </LoginTitle>
      <LoginForm>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16}}
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
            <Input type={"username"} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password type={"password"} />
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
            <Button type="primary" htmlType="submit">
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
      </LoginForm>
      <SocialLogin>
        <LoginWith> Or Login with: </LoginWith>
        <LoginIcon>
          <FacebookLogin>
            <FacebookOutlined /> Đăng Nhập với Facebook
          </FacebookLogin>
          <GoogleLogin>
            <GooglePlusOutlined />
            Đăng Nhập với Google
          </GoogleLogin>
        </LoginIcon>
      </SocialLogin>
    </HomeLogin>
  );
};
export default LoginClient;
