import React from "react";

import { Layout, theme } from "antd";
import styled from "styled-components";

const {  Sider } = Layout;
const FontMain = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;
const MenuContent = styled(FontMain)`
  float: left;
  @media screen and (max-width: 50rem) {
    display: none;
  }
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
  ul {
    list-style-type: none;
    width: 25.8rem;
    height: 130rem;
    background: #ffffff;
    box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
      0px 4px 8px rgba(96, 97, 112, 0.16);
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
`;
const SiderClient: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
        <Sider style={{ backgroundColor: colorBgContainer }} width={200}>
          <MenuContent>
            <ul>
              <p>
                <img src="/all.png" />
                All
              </p>
              <li>
                <img src="/fastfood.png" />
                Fast food
              </li>
              <li>
                <img src="/fastfood.png" />
                Take-away
              </li>
              <li>
                <img src="/chinese.png" />
                Chinese food
              </li>
              <li>
                <img src="/japanese.png" />
                Japanese food
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
