import React from "react";
import { break_points } from "@/utils/styled";
import styled from "styled-components";
const FontFooter = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
`;
const FooterMain = styled(FontFooter)`
  @media screen and (min-width: 780px) {
    display: flex;
    max-width: 144rem;
    .FooterLeft1 {
      padding-left: 5rem;
      .Info_Company {
        list-style-type: none;
        p {
          padding-bottom: 1rem;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          color: #000000;
        }
        li {
          padding-bottom: 0.4rem;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.2rem;
          display: flex;
          align-items: center;
          color: #2e92ff;
        }
      }
    }
    .FooterLeft2 {
      ul {
        list-style-type: none;
        p {
          padding-bottom: 1rem;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          color: #000000;
        }
        li {
          padding-bottom: 2rem;
          display: flex;
          align-items: center;
          img {
            width: 8.8rem;
            height: 8.8rem;
          }
        }
      }
    }
    .FooterCenter {
      width: 27rem;
      text-align: center;
      justify-content: center;
      align-items: center;
      .logoFooter {
        margin-left: 9rem;
        margin-top: 10rem;
        width: 20rem;
        height: 6rem;
      }
      p {
        margin-left: 7.8rem;
        align-items: center;
        font-size: 1rem;
        color: #828282;
        //padding-top: 1rem;
      }
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        align-content: center;
        margin-left: 11rem;
        li {
          a {
            padding-right: 1rem;
            img {
              width: 2.5rem;
              padding-bottom: 2.9rem;
            }
          }
        }
      }
    }
    .FooterRight {
      float: right;
      margin-left: 8rem;
      width: 30rem;
      .Address_Company {
        list-style-type: none;
        p {
          padding-left: 17.9rem;
          padding-bottom: 1rem;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          color: #000000;
        }
        li {
          float: right;
          padding-bottom: 0.3rem;
          font-size: 1.4rem;
          line-height: 2.2rem;
          display: flex;
          text-align: right;
          color: #0b0b0b;
          img {
            padding-top: 1.7rem;
            width: 16.4rem;
            height: 9rem;
            padding-bottom: 2.9rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 46.5rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .FooterLeft1 {
      display: none;
    }
    .FooterLeft2 {
      display: none;
    }
    .FooterCenter {
      .logoFooter {
        padding-left: 2rem;
        margin-left: 16rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
      }
      p {
        font-weight: 400;
        line-height: 1rem;
        width: 40rem;
        margin-left: 3rem;
        align-items: center;
        font-size: 1rem;
        color: #828282;
      }
      ul {
        padding-left: 18.5rem;
        list-style-type: none;
        display: flex;
        li {
          margin-right: 1rem;
          img {
            width: 2rem;
          }
        }
      }
    }
    .FooterRight {
      width: 30rem;
      margin-left: 6.5rem;
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        .Company {
          padding-bottom: 0rem;
          padding-left: 0rem;
          font-weight: 700;
          font-size: 1.2rem;
          color: #000000;
        }
        .item_Info {
          display: flex;
          align-items: center;
          text-align: center;
          line-height: 1.2rem;
          color: #080800;
          font-size: 1rem;
        }
        img {
          padding-top: 1rem;
          width: 16rem;
          height: 5rem;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    width: 46.5rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    .FooterLeft1 {
      display: none;
    }
    .FooterLeft2 {
      display: none;
    }
    .FooterCenter {
      .logoFooter {
        padding-left: 2rem;
        margin-left: 16rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 17rem;
      }
      p {
        font-weight: 400;
        line-height: 1rem;
        width: 40rem;
        margin-left: 6rem;
        align-items: center;
        font-size: 1rem;
        color: #828282;
      }
      ul {
        padding-left: 21rem;
        list-style-type: none;
        display: flex;
        li {
          margin-right: 1rem;
          img {
            width: 2rem;
          }
        }
      }
    }
    .FooterRight {
      width: 30rem;
      margin-left: 8.5rem;
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        .Company {
          padding-bottom: 0rem;
          padding-left: 0rem;
          font-weight: 700;
          font-size: 1.2rem;
          color: #000000;
        }
        .item_Info {
          display: flex;
          align-items: center;
          text-align: center;
          line-height: 1.2rem;
          color: #080800;
          font-size: 1rem;
        }
        img {
          padding-top: 1rem;
          width: 13rem;
          height: 4rem;
        }
      }
    }
  }
`;
const FooterClient: React.FC = () => {
  return (
    <FooterMain style={{ textAlign: "center" }}>
      <div className="FooterLeft1">
        <ul className="Info_Company">
          <p className="Footer_Title ">C??ng ty</p>
          <li> Gi???i thi???u & li??n h??? </li>
          <li>Trung t??m tr??? gi??p</li>
          <li>??i???u kho???n s??? d???ng</li>
          <li>B???o m???t th??ng tin</li>
          <li>Gi???i quy???t khi???u n???i</li>
          <li>H???p t??c nh??n vi??n giao nh???n</li>
          <li>????ng k?? qu??n</li>
          <li>???ng d???ng Capichi</li>
        </ul>
      </div>
      <div className="FooterLeft2">
        <ul>
          <p className="Footer_Title">App Capichi</p>
          <li>
            <img src="Group 62.png"></img>
          </li>
          <li>
            <img src="Group 63.png"></img>
          </li>
        </ul>
      </div>
      <div className="FooterCenter">
        <img className="logoFooter" src="/Logo.png" />
        <p> @ Capichi 2021 - A Food Delivery Corporation</p>
        <ul>
          <li>
            <img src="/Instagram.png"></img>
          </li>
          <li>
            <img src="/Instagram.png"></img>
          </li>
          <li>
            <img src="/Instagram.png"></img>
          </li>
        </ul>
      </div>
      <div className="FooterRight">
        <ul className="Address_Company">
          <p className="Company">?????a ch??? c??ng ty</p>
          <li className="item_Info"> C??ng ty c??? ph???n Capichi</li>
          <li className="item_Info">
            T???ng 4, t??a nh?? VietinBank, s??? 1 L?? Th??i T??ng, ph?????ng C???u gi???y, qu???n
            C???u Gi???y, H?? N???i
          </li>
          <li className="item_Info">
            Gi???y CN ??KDN s???: 02264651313, do s??? K??? ho???ch v?? ?????u t?? TP. H?? N???i
            c???p ng??y 11/12/2020, s???a ?????i l???n th??? 21, ng??y 01/02/2021
          </li>
          <li className="item_Info">
            S??? ??i???n tho???i:<span style={{ color: "red" }}> 1900 1522</span>
          </li>
          <li className="item_Info">
            Email:
            <span style={{ color: "#2E92FF" }}>capichi@gmail.com</span>
          </li>
          <li className="item_Info">
            <img src="image 2.png"></img>
          </li>
        </ul>
      </div>
    </FooterMain>
  );
};

export default FooterClient;
