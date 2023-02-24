import {
  DownOutlined,
  SearchOutlined,
  SmileOutlined
} from "@ant-design/icons";
import {
  Button,
  Col,
  Dropdown,
  Input,
  MenuProps,
  message,
  Row,
  Space
} from "antd";
import React from "react";
import styled from "styled-components";

// const { Header } = Layout;
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

const FontHeader= styled.div`
  font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
`

const HomeHeader = styled.div`
  text-align: center;
  align-items: center;
  position: relative;
  max-width: 144rem;
  min-height: 6rem;
  background-color: #ffffff;
  overflow: hidden;
`;
const HeaderLogo = styled.div`
  position: absolute;
  img {
    max-width: 13.8rem;
    height: 4.1rem;
    padding-top: 1.9rem;
    padding-left: 6.4rem;
  }
`;
const ButtonAddress = styled(FontHeader)`
  position: absolute;
  width: 7.4rem;
  height: 3.4rem;
  padding-top: 2.4rem;
  padding-left: 3.7rem;

  /* bg/3 */
  Button {
    font-size: 14px;
    line-height: 22px;
    border: 0.1rem solid #fcdab0;
    border-radius: 0.5rem;
  }
`;
const SearchInput = styled(FontHeader)`
  position: absolute;
  width: 47rem;
  height: 5rem;
  padding-top: 1.5rem;
  padding-left: 3.7rem;
  Input {
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #828282;
    flex: none;
    border: 0.1rem solid #e0e1e0;
    border-radius: 1rem;
    width: 5rem;
  }
`;
const Header_Right = styled(FontHeader)`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      padding-top: 1rem;
      Button {
        width: 74px;
        height: 34px;
        background-color: #ff881d;
        border-radius: 10px;
        border: 1px solid #fcdab0;  
        color: white;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
      a {
        padding-left: 2.3rem;
        color: #007aff;
        text-decoration: underline;
        flex: none;
        align-self: stretch;
        flex-grow: 1;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
`;
const Button_Langue = styled(FontHeader)`
  padding-left: 2.3rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-align: center;
  color: #000000;
  border-radius: 1rem;
`;
const HeaderClient: React.FC = () => {

  return (
    <HomeHeader style={{ overflow: 'hidden'}}>
      <Row>
        <Col span={7}>
          <Row>
            <Col span={12}>
              <HeaderLogo>
                <img src="/Logo.png" />
              </HeaderLogo>
            </Col>
            <Col span={12}>
              <ButtonAddress>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Hà Nội
                      <DownOutlined style={{ color: "#FCDAB0" }} />
                    </Space>
                  </Button>
                </Dropdown>
              </ButtonAddress>
            </Col>
          </Row>
        </Col>

        <Col span={10}>
          <SearchInput>
            <Input
              placeholder="Nhập từ khóa"
              prefix={<SearchOutlined style={{ color: "#FCDAB0" }} />}
            />
          </SearchInput>
        </Col>
        <Col span={7}>
          <Header_Right>
            <ul>
              <li>
                <Button>Order </Button>
              </li>
              <li>
                <Button_Langue>
                  <Dropdown.Button
                    menu={menuProps}
                    placement="bottom"
                    icon={<SmileOutlined />}
                  >
                    EN
                  </Dropdown.Button>
                </Button_Langue>
              </li>
              <li>
                <a> Đăng Nhập </a>
              </li>
            </ul>
          </Header_Right>
        </Col>
      </Row>
    </HomeHeader>
  );
};

export default HeaderClient;
