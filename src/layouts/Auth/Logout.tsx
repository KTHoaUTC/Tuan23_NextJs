import React, {useRef} from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import cookie from "js-cookie";
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login = styled.div`
  text-align: center;
  align-items: center;
  padding-top: 3rem;
  padding-left: 30rem;
`;

export default function LogoutAdmin  ()  {
  const userName= useRef("");
  const passWord= useRef("")
  
  const onSubmit = async () => {
    cookie.set("token","ABCD",{expires:1/24});
      const result= await signIn("credentials",{
        username: userName.current,
        password: passWord.current,
        redirect: true,
        callbackUrl:"/admin"

      }).then(responsive=>{
        console.log(responsive)
      }).catch(error=>{
        console.log(error)
      })
      console.log(result)
  };
  return (
    <Login>
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
          <Input type={"username"} onChange={(e)=>(userName.current= e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password type={"password"}  onChange={(e)=>(passWord.current= e.target.value)} />
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
          <Button  type="primary" htmlType="submit" onClick={onSubmit}>
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
};


