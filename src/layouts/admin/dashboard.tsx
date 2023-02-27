import React, { useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Trang Chủ",
    "1",
    <Link href={"/admin/TrangChu"}>
      <PieChartOutlined />
    </Link>
  ),
  getItem("Khuất Thị Hoa", "sub1", <UserOutlined />, [
    getItem(
      "My Profile",
      "2",
      <Link href={"/admin/ProFile"}>
        <PieChartOutlined />
      </Link>
    ),
    getItem("Settings", "3"),
  ]),
  // getItem('Dashboard', '4', <DesktopOutlined />),
  getItem("QL Sản Phẩm", "sub2", <TeamOutlined />, [
    getItem(
      "Sản Phẩm",
      "5",
      <Link href={"/admin/ListProduct"}>
        <PieChartOutlined />
      </Link>
    ),
    getItem(
      "Loại Sản Phẩm",
      "6",
      <Link href={"/admin/ListCategory"}>
        <PieChartOutlined />
      </Link>
    ),
  ]),
  getItem(
    "QL Nhân vien",
    "7",
    <Link href={"/admin/ListUser"}>
      <FileOutlined />
    </Link>
  ),
];

const DashboardAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};

export default DashboardAdmin;
