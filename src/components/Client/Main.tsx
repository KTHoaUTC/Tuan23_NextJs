import React from "react";
import { Layout, theme } from "antd";
import SiderClient from "./Sider";
import ContentClient from "./Content";
import ContentClientTest from "./ContentTest";
import ContentTest2 from "./Content";
const { Content } = Layout;
const MainClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: "0 5rem" }}>
      <Layout style={{ background: colorBgContainer }}>
        <SiderClient></SiderClient>       
        <ContentClient></ContentClient>
      </Layout>
    </Content>
  );
};

export default MainClient;
