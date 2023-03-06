import { DownOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Button,
  Dropdown,
  Input,
  MenuProps,
  message,
  Space,
} from "antd";
import Link from "next/link";
import { useSession } from "next-auth/react";
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
    display: none;
  }
  .logoHeader {
    max-width: 13.8rem;
    height: 4.1rem;
    padding: 0.7rem 14rem 0rem 6.4rem;
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
const HeaderResponsive = styled(FontHeader)`
  @media screen and (min-width: 51rem) {
    display: none;
  }
  .HeaderTop {
    display: flex;
    max-width: 50rem;
    min-height: 4rem;
    background: #ffffff;
    align-items: center;
    align-content: center;
    margin-left: 1rem;
    .loginHeader {
      text-decoration: underline;
      flex: none;
      color: #007aff;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3rem;
      padding-right: 4rem;
    }
    .language {
      padding-right: 5rem;
      text-align: center;
      display: flex;
      .DropdownLang {
        padding-left: 0.6rem;
        padding-top: 0.2rem;
        height: 1.8rem;
        width: 3.7rem;
        color: #000000;
        border: 0.1rem solid #fcdab0;
        border-radius: 1.4rem;
        .ButtonLang {
          font-size: 1.4rem;
          line-height: 22px;
        }
      }
    }
    .logoHeader {
      max-width: 8rem;
      margin-right: 13rem;
    }
    .buttonHeader {
      .ButtonOrder {
        cursor: pointer;
        width: 5rem;
        height: 2rem;
        background-color: #ff881d;
        border-radius: 1rem;
        border: 0.1rem solid #ff881d;
        color: white;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }

  .HeaderBotton {
    display: flex;
    max-width: 50rem;
    min-height: 4rem;
    background: #ffffff;
    align-items: center;
    align-content: center;
    margin-left: 0.5rem;
    .btnSearch {
      width: 40rem;
      padding-top: 0.6rem;
      padding-right: 0.5rem;
      Input {
        padding-left: 1.5rem;
        font-size: 1.2rem;
        color: #828282;
        flex: none;
        width: 36rem;
        height: 2.4rem;
      }
    }
    .addressHeader {
      font-size: 1.5rem;
      padding-top: 0.5rem;
      .btnAdd {
        border: 0.1rem solid #fcdab0;
        border-radius: 0.6rem;
        height: 2.7rem;
        font-size: 1.5rem;
        padding-top: 0rem;
      }
    }
  }
  @media screen and (max-width: 390px) {
    .HeaderTop {
      display: flex;
      max-width: 50rem;
      min-height: 4rem;
      background: #ffffff;
      align-items: center;
      align-content: center;
      margin-left: 2rem;
      .loginHeader {
        text-decoration: underline;
        flex: none;
        color: #007aff;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3rem;
        padding-right: 4rem;
      }
      .language {
        padding-right: 5rem;
        text-align: center;
        display: flex;
        .DropdownLang {
          padding-left: 0.6rem;
          padding-top: 0.2rem;
          height: 1.8rem;
          width: 3.7rem;
          color: #000000;
          border: 0.1rem solid #fcdab0;
          border-radius: 1.4rem;
          .ButtonLang {
            font-size: 1.4rem;
            line-height: 22px;
          }
        }
      }
      .logoHeader {
        max-width: 8rem;
        margin-right: 15rem;
      }
      .buttonHeader {
        .ButtonOrder {
          cursor: pointer;
          width: 5rem;
          height: 2rem;
          background-color: #ff881d;
          border-radius: 1rem;
          border: 0.1rem solid #ff881d;
          color: white;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }

    .HeaderBotton {
      display: flex;
      max-width: 50rem;
      min-height: 4rem;
      background: #ffffff;
      align-items: center;
      align-content: center;
      margin-left: 2rem;
      .btnSearch {
        width: 40rem;
        padding-top: 0.6rem;
        padding-right: 0.5rem;
        Input {
          padding-left: 1.5rem;
          font-size: 1.2rem;
          color: #828282;
          flex: none;
          width: 36rem;
          height: 2.4rem;
        }
      }
      .addressHeader {
        font-size: 1.5rem;
        padding-top: 0.5rem;
        .btnAdd {
          border: 0.1rem solid #fcdab0;
          border-radius: 0.6rem;
          height: 2.7rem;
          font-size: 1.5rem;
          padding-top: 0rem;
        }
      }
    }
  }
`;
// const HeaderTop = styled(FontHeader)`
//   display: flex;
//   max-width: 50rem;
//   min-height: 4rem;
//   background: #ffffff;
//   align-items: center;
//   align-content: center;
//   margin-left: 1rem;
//   @media screen and (min-width: 50rem) {
//     .loginHeader {
//       text-decoration: underline;
//       flex: none;
//       color: #007aff;
//       font-weight: 700;
//       font-size: 1rem;
//       line-height: 1.3rem;
//       padding-right: 1rem;
//     }
//     .language {
//       padding-right: 5rem;
//       text-align: center;
//       display: flex;
//       .DropdownLang {
//         padding-left: 0.6rem;
//         padding-top: 0.2rem;
//         height: 1.8rem;
//         width: 3.7rem;
//         color: #000000;
//         border: 0.1rem solid #fcdab0;
//         border-radius: 1.4rem;
//         .ButtonLang {
//           font-size: 1.4rem;
//           line-height: 22px;
//         }
//       }
//     }
//     .logoHeader {
//       max-width: 8rem;
//       margin-right: 10rem;
//     }
//     .buttonHeader {
//       .ButtonOrder {
//         cursor: pointer;
//         width: 5rem;
//         height: 2rem;
//         background-color: #ff881d;
//         border-radius: 1rem;
//         border: 0.1rem solid #ff881d;
//         color: white;
//         font-weight: 700;
//         font-size: 1rem;
//       }
//     }
//   }
// `;
// const HeaderBotton = styled(FontHeader)`
//   @media screen and (min-width: 50rem) {
//     margin-left: 1rem;
//     .btnSearch {
//       width: 38rem;
//       padding-top: 0.6rem;
//       Input {
//         padding-left: 1.5rem;
//         font-size: 1.2rem;
//         color: #828282;
//         flex: none;
//         width: 30rem;
//         height: 2.4rem;
//       }
//     }
//     .addressHeader {
//       border-radius: 0.5rem;
//       margin-right: 5rem;
//       font-size: 1.5rem;
//       position: absolute;
//       left: 77.6%;
//       right: 2.67%;
//       top: 9.12%;
//       bottom: 87.88%;
//       display: flex;
//       flex-direction: row;
//       align-items: center;
//       .btnAdd {
//         border: 0.1rem solid #fcdab0;
//         border-radius: 0.6rem;
//       }
//     }
//   }
// `;
const HeaderClient: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
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
          <a>
            <Link href="/Client/Login">Đăng Nhập</Link>{" "}
          </a>
        </div>
      </HomeHeader>
      <HeaderResponsive>
        <div className="HeaderTop">
          <div className="loginHeader">
            <a>
              <Link href="/Client/Login">Đăng Nhập</Link>{" "}
            </a>
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
          <div className="logoHeader">
            <img className="imgLogo" src="/Logo.png" alt="" />
          </div>
          <div className="buttonHeader">
            <button className="ButtonOrder"> Order</button>
          </div>
        </div>
        <div className="HeaderBotton">
          <div className="btnSearch">
            <Input
              placeholder="Nhập từ khóa"
              prefix={<SearchOutlined style={{ color: "#FF881D" }} />}
            ></Input>
          </div>
          <div className="addressHeader">
            <Dropdown menu={menuProps}>
              <Button className="btnAdd">
                <Space>
                  Hà Nội
                  <DownOutlined style={{ color: "#FCDAB0" }} />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
      </HeaderResponsive>
    </>
  );
};

export default HeaderClient;
