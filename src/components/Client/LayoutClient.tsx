import FooterClient from "@/components/Client/Footer";
import HeaderClient from "@/components/Client/Header";
import { Layout } from "antd";
export default function LayoutClient({ children }: any) {
  return (
    <div style={{ position: "relative" }}>
      <Layout
        style={{ backgroundColor: "white", maxWidth: "155rem", margin: "auto" }}
      >
        <HeaderClient></HeaderClient>
        {/* <BannerHeader></BannerHeader> */}
        {children}
        {/* <MainClient></MainClient>      */}
        <FooterClient></FooterClient>
      </Layout>
    </div>
  );
}
