import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import HeaderAdmin from "./header";
import FooterAdmin from "./footer";
import MainAdmin from "./main";
import DashboardAdmin from "./dashboard";
import "../../styles/admin/styleAdmin.scss";
const { Content } = Layout;
const AppAdmin = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardAdmin />
      <Layout className="site-layout">
        <HeaderAdmin />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Hoa</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
            {/* <MainAdmin/> */}
          </div>
        </Content>
        <FooterAdmin />
      </Layout>
    </Layout>
  );
};

export default AppAdmin;
