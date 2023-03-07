import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FacebookOutlined,
  GooglePlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
  marginTop: "0rem",
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
  marginTop: "2rem",
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
  marginTop: "0rem",
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
  paddingBottom: "2rem",
  fontSize: "1.5rem",
  [break_points.laptop_]: {
    fontSize: "1.3rem",
  },
  [break_points.tablet_]: {
    fontSize: "1.2rem",
  },
  [break_points.mobile_]: {
    fontSize: "1rem",
  },
});

const LoginIcon = styled.div({
  display: "flex",
  textDecoration: "none",
  width: "45rem",
 // marginLeft:'0rem',
  color: "red",
  marginBottom:'4rem',  
  [break_points.laptop_]: {
  },
  [break_points.tablet_]: {
    marginLeft: "16.5rem",
  },
  [break_points.mobile_]: {
    marginRight: "0rem",
    marginLeft: "12rem",
  },
});
const FacebookLogin = styled.button({
  width: "40rem",
  fontSize: "1.3rem",
  color: "white",
  marginRight: "5rem",
  fontFamily: "Gilroy",
  backgroundColor: "#2E92FF",
  border: "0.1rem solid #2E92FF",
  height: "3rem",
  borderRadius: "2rem",
  [break_points.laptop_]: {
    fontSize: "1.1rem",
  },
  [break_points.tablet_]: {
    width: "13rem",
    fontSize: "1rem",
    height: "2.5rem",
    marginRight: "0rem",
  },
  [break_points.mobile_]: {
    fontSize: "0.8rem",
    width: "12rem",
  },
});
const GoogleLogin = styled.button({
  fontFamily: "Gilroy",
  width: "40rem",
  fontSize: "1.3rem",
  color: "white",
  backgroundColor: "#828282",
  border: "0.1rem solid #828282",
  height: "3rem",
  borderRadius: "2rem",
  [break_points.laptop_]: {
    fontSize: "1.1rem",
  },
  [break_points.tablet_]: {
    width: "13rem",
    fontSize: "1rem",
    marginLeft: "1rem",
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
      <LoginTitle> LOGIN </LoginTitle>
      <LoginForm>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 40 }}
          // style={{ maxWidth: 900 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              type={"username"}
              size="large"
              placeholder="Nhập email, username..."
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              type={"password"}
              size="large"
              placeholder="Nhâp password..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <a href="#" className="ForgotPassword">
              <i> Forgot your password?</i>
            </a>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 15, span: 9 }}
          >
            <Checkbox style={{fontSize:'1rem'}}>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button style={{fontSize:'1.2rem', height:'3rem', width:'6rem'}} type="primary" htmlType="submit">
                Login
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
