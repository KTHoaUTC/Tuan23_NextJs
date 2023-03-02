import React from "react";

import { Layout, theme } from "antd";
import styled from "styled-components";

const { Sider } = Layout;
const FontMain = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;
const MenuContent = styled(FontMain)`
  float: left;
  ul {
    list-style-type: none;
    width: 25.8rem;
    height: 130rem;
    background: #ffffff;
    box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
      0px 4px 8px rgba(96, 97, 112, 0.16);
    p {
      width: 19rem;
      height: 4rem;
      color: #ffffff;
      background-color: #ff881d;
      border-radius: 1rem;
      line-height: 2.4rem;
      display: flex;
      align-items: center;
      align-content: center;
      img {
        margin-left: 0.5rem;
        margin-right: 1.5rem;
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  
    li {
      padding-top: 1rem;
      line-height: 2.4rem;
      display: flex;
      align-items: center;
      align-content: center;
      img {
        margin-left: 0.5rem;
        margin-right: 1.5rem;
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media screen and (max-width: 50rem) {
    overflow: auto;
    ul {
      display: flex;
      list-style-type: none;
      width: 30rem;
      height: 7rem;
      p {
        margin-right: 2.5rem;
        width: 3.2rem;
        height: 5rem;
        color: #f6f5f5;
        background-color: #ff881d;
        border-radius: 1rem;
        line-height: 1.4rem;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          margin-left: 0.5rem;
          margin-right: 0.4rem;
          padding-top: 0.1rem;
          margin-bottom: 0.3rem;
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      li {
        color: #3b3b3b;
        padding-right: 3rem;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          margin-bottom: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
`;
const SiderClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider style={{ backgroundColor: colorBgContainer }}>
      <MenuContent>
        <ul>
          <p>
            <img src="/all.png" />
            All
          </p>
          <li>
            <img src="/fastfood.png" />
            Fastfood
          </li>
          <li>
            <img src="/fastfood.png" />
            Takeaway
          </li>
          <li>
            <img src="/chinese.png" />
            Chinesefood
          </li>
          <li>
            <img src="/japanese.png" />
            Japanesefood
          </li>
          <li>
            <img src="/voucher.png" />
            Voucher
          </li>
          <li>
            <img src="/vergetarian2.png" />
            Vegetarian
          </li>
          <li>
            <img src="/coffee.png" />
            Coffee
          </li>
          <li>
            <img src="/pizza.png" />
            Pizza
          </li>
          <li>
            <img src="/gift.png" />
            Gift
          </li>
          <li>
            <img src="/sweet.png" />
            Sweet
          </li>
          <li>
            <img src="/milk.png" />
            Milk
          </li>
          <li>
            <img src="/all.png" />
            Freeship
          </li>
        </ul>
      </MenuContent>
    </Sider>
  );
};

export default SiderClient;
