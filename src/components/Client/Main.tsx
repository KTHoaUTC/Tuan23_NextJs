import { Layout, theme } from "antd";
import React from "react";
import styled from "styled-components";
import ContentClient from "./Content";
import SiderClient from "./Sider";
const { Content } = Layout;

const Main= styled.div`
@media screen and (max-width: 144rem) {
   
      display: flex;
}
@media screen and (max-width: 50rem) {
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
`
const MainClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content>
      <Layout style={{ background: colorBgContainer }}>
        <Main>
          <SiderClient></SiderClient>
        <ContentClient></ContentClient>
        </Main>
        
      </Layout>
    </Content>
  );
};

export default MainClient;
