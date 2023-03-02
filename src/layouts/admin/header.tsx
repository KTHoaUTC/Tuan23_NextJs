import { LogoutOutlined } from "@ant-design/icons";
import { Input, Layout, theme } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const { Search } = Input;
const { Header } = Layout;
const onSearch = (value: string) => console.log(value);

const HeaderAdmin: React.FC = () => {
  const { data: session } = useSession({
    required: true
  });
  console.log("session", session);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ background: colorBgContainer }}>
      {session?.user ? (
        <>
          <div className="header">
            <p className="Header_left" style={{ float: "left" }}>
              {session.user.email}
            </p>
            <div className="navbar">
              <ul className="Header_right">
                <li>
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{ width: 200, float: "right" }}
                    enterButton
                  />
                </li>
                <li>
                  <Link href="/Auth" legacyBehavior>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                      style={{ width: 40, float: "right" }}
                    >
                      <LogoutOutlined />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header">
            <p className="Header_left" style={{ float: "left" }}>
              Vui Long Dang Nhap
            </p>
            <div className="navbar">
              <ul className="Header_right">
                <li>
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{ width: 200, float: "right" }}
                    enterButton
                  />
                </li>
                <li>
                  <Link href="/Auth" legacyBehavior>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      style={{ width: 40, float: "right" }}
                    >
                      SignIn
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </Header>
  );
};
export default HeaderAdmin;
