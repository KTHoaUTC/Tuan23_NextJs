import { Layout, theme } from "antd";
import React from "react";
import ContentClient from "./Content";
import ContentMobie from "./ContentTest";
import ContentClientTest from "./ContentText2";
import SiderClient from "./Sider";
const { Content } = Layout;

const MainClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content>
      <Layout style={{ background: colorBgContainer }}>
        <SiderClient></SiderClient>
       <ContentClient></ContentClient> 
        {/* <ContentMobie></ContentMobie>*/}
         {/* <ContentClientTest></ContentClientTest> */}
      </Layout>
    </Content>
  );
};

export default MainClient;
