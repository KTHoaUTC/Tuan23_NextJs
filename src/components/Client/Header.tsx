import { DownOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, message, Space } from "antd";
import React from "react";
import styled from "styled-components";
const items: MenuProps["items"] = [
  {
    label: "Hồ Chí Minh",
    key: "1",
  },
  {
    label: "Hải Phòng",
    key: "2",
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const FontHeader = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
`;
const HomeHeader = styled(FontHeader)`
  display: flex;
  max-width: 144rem;
  min-height: 5rem;
  background: #ffffff;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 50rem) {
    background-color: #007aff;
  }
  .logoHeader {
    max-width: 13.8rem;
    height: 4.1rem;
    padding: 0.7rem 14rem 0rem 6.4rem;
    @media screen and (max-width: 50rem) {
      max-width: 8rem;
      height: 2rem;
      padding-top: 0.1rem;
      padding-left: 15rem;
    }
  }
  .addressHeader {
    max-width: 20rem;
    border: 0.1rem solid #fcdab0;
    border-radius: 0.5rem;
    margin-right: 5rem;
    font-size: 1.5rem;
  }
  .searchHeader {
    max-width: 58rem;
    height: 4rem;
    padding-top: 0.6rem;
    padding-right: 4rem;
    Input {
      font-size: 1.4rem;
      color: #828282;
      flex: none;
      width: 40rem;
      height: 2.4rem;
    }
    
  }
  .buttonHeader {
    max-width: 40rem;
    padding-right: 2.3rem;
    .ButtonOrder {
      cursor: pointer;
      width: 6rem;
      height: 2.3rem;
      background-color: #ff881d;
      border-radius: 1rem;
      border: 0.1rem solid #ff881d;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
      @media screen and (max-width: 50rem) {
      width: 72px;
      height: 0px;
      flex-wrap: wrap;
      padding-right: 1rem;
    }
    }
  }
  .language {
    padding-right: 1rem;
    text-align: center;
    .DropdownLang {
      background-color: #ff881d;
      color: white;
      font-weight: 700;
      border: 0.1rem solid #ff881d;
      .ButtonLang {
        border-radius: 1rem;
        font-size: 1.6rem;
        line-height: 24px;
      }
    }
  }
  .loginHeader {
    padding-left: 2.3rem;
    color: #007aff;
    text-decoration: underline;
    flex: none;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
const HeaderClient: React.FC = () => {
  return (
    <HomeHeader>
      <div className="logoHeader">
        <img className="imgLogo" src="/Logo.png" alt="" />
      </div>
      <div className="addressHeader">
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Hà Nội
              <DownOutlined style={{ color: "#FCDAB0" }} />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="searchHeader">
        <Input
          placeholder="Nhập từ khóa"
          prefix={<SearchOutlined style={{ color: "#FCDAB0" }} />}
        />
      </div>
      <div className="buttonHeader">
        <button className="ButtonOrder"> Order</button>
      </div>
      <div className="language">
        <Dropdown className="DropdownLang" menu={menuProps}>
          <Button className="ButtonLang">
            <Space>
              EN
              <SmileOutlined style={{ color: "#FCDAB0" }} />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="loginHeader">
        <a> Đăng Nhập </a>
      </div>
    </HomeHeader>
  );
};

export default HeaderClient;
