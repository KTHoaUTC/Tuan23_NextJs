import React from "react";
import styled from "styled-components";
const FontFooter = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
`;
const FooterMain = styled(FontFooter)`
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
`;
const FooterClient: React.FC = () => {
  return (
    <FooterMain style={{ textAlign: "center" }}>
      <div className="FooterLeft1">
        <ul className="Info_Company">
          <p className="Footer_Title ">Công ty</p>
          <li> Giới thiệu & liên hệ </li>
          <li>Trung tâm trợ giúp</li>
          <li>Điều khoản sử dụng</li>
          <li>Bảo mật thông tin</li>
          <li>Giải quyết khiếu nại</li>
          <li>Hợp tác nhân viên giao nhận</li>
          <li>Đăng ký quán</li>
          <li>Ứng dụng Capichi</li>
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
            <a>
              <img src="/Instagram.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="/Instagram.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img src="/Instagram.png"></img>
            </a>
          </li>
        </ul>
      </div>
      <div className="FooterRight">
        <ul className="Address_Company">
          <p>Địa chỉ công ty</p>
          <li> Công ty cổ phần Capichi</li>
          <li>
            Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường Cầu giấy, quận
            Cầu Giấy, Hà Nội
          </li>
          <li>
            Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP. Hà Nội
            cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021
          </li>
          <li>
            Số điện thoại:<span style={{ color: "red" }}> 1900 1522</span>
          </li>
          <li>
            Email:
            <span style={{ color: "#2E92FF" }}>capichi@gmail.com</span>
          </li>
          <li>
            <img src="image 2.png"></img>
          </li>
        </ul>
      </div>
    </FooterMain>
  );
};

export default FooterClient;
