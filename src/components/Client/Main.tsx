import React from "react";
import { Layout, theme } from "antd";
import SiderClient from "./Sider";
import ContentClient from "./Content";
import ContentClientTest from "./ContentTest";
import ContentTest2 from "./ContentTest2";
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
          <li style={{paddingTop:"2rem"}}><ContentTest2></ContentTest2></li>   
         {/*   <li style={{paddingTop:"10rem"}}><ContentClient></ContentClient></li>      
         <li style={{paddingTop:"2rem"}}><ContentClientTest></ContentClientTest></li>  */}

        </ul>
      </Layout>
    </Content>
  );
};

export default MainClient;
