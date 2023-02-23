import React from "react";
import Link from "next/link";
import Router from "next/router";
import {
  Layout,
  theme,
  Input,
  Space,
  Dropdown,
  MenuProps,
  message,
} from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Search } = Input;
const { Header } = Layout;
const onSearch = (value: string) => console.log(value);
const handleMenuClick: MenuProps["onClick"] = (e) => {
  <button type="button" onClick={() => Router.push("/admin/Logout")} />;
  message.info("Click on menu item.");
  console.log("click", e);
};
const items: MenuProps["items"] = [
  {
    label: "Đăng Xuất",
    key: "1",
    icon: <UserOutlined />,
  },
  // {
  //   label: "Đăng Xuất",
  //   key: "2",
  //   icon: <UserOutlined />,
  // },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const HeaderAdmin: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ background: colorBgContainer }}>
      <div className="header">
        <p className="Header_left" style={{ float: "left" }}>
          {" "}
          Khuất Thị Hoa{" "}
        </p>
        <div className="navbar">
          <ul className="Header_right">
            <li>
              {" "}
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200, float: "right" }}
                enterButton
              />{" "}
            </li>
            <li>
              {" "}
              <Link href="/admin/Logout" legacyBehavior>
                <a style={{ width: 40, float: "right" }}>
                  {" "}
                  <LogoutOutlined />
                </a>
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Dropdown menu={menuProps}>
                <Space>
                  <SettingOutlined />
                  <DownOutlined />
                </Space>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
};
export default HeaderAdmin;
