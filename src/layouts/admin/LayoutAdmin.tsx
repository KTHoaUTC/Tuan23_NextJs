import { Breadcrumb, Layout, theme } from "antd";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import "../../styles/admin/styleAdmin.scss";
import DashboardAdmin from "./dashboard";
import FooterAdmin from "./footer";
import HeaderAdmin from "./header";
const { Content } = Layout;

export default function AppAdmin({ children, session }: any) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <SessionProvider session={session}>
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
            </div>
          </Content>
          <FooterAdmin />
        </Layout>
      </Layout>
    </SessionProvider>
  );
}
