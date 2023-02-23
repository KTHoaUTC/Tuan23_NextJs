import React from "react";
import { Layout, theme } from "antd";
import SiderClient from "./Sider";
import ContentClient from "./Content";
const { Content } = Layout;
const MainClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: "0 160px" }}>
      <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
        <SiderClient></SiderClient>       
        <ul>
          <li style={{paddingTop:"2rem"}}><ContentClient></ContentClient></li>      
          <li style={{paddingTop:"2rem"}}><ContentClient></ContentClient></li> 
          <li style={{paddingTop:"2rem"}}><ContentClient></ContentClient></li>
        </ul>
      </Layout>
    </Content>
  );
};

export default MainClient;
