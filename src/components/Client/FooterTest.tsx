import styled from "styled-components";
import React from "react";

const Footer = styled.div`
  width: 144rem;
  height: 35.2rem;
  position: absolute;
  background: #ffffff;
`;
const Left1 = styled.div`
  float: left;
  width: 18.6rem;
  margin-top: 3.9rem;
  margin-left: 16.8rem;
  p {
    padding-bottom: 1rem;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    color: #000000;
  }
  ul {
    list-style-type: none;
    li {
      padding-bottom: 0.4rem;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      color: #2e92ff;
    }
  }
`;
const Left_App = styled.div`
  float: left;
  margin-top: 3.9rem;
  margin-left: 5.1rem;
  p {
    padding-bottom: 1rem;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    color: #000000;
  }
  ul {
    list-style-type: none;
    li {
      img {
        width: 8.8rem;
        height: 8.8rem;
        box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
          0px 2px 4px rgba(96, 97, 112, 0.16);
      }
      padding-bottom: 2rem;
      display: flex;
      align-items: center;
    }
  }
`;
const Center = styled.div`
  background-color: #f1e4e4;
  /* text-align: center;
  align-items: center; */
  // margin-left: 12.2rem;
  img {
    padding-top: 10.1rem;
    padding-left: 12.2rem;
    text-align: center;
    align-items: center;
    width: 21.2rem;
    height: 6.2rem;
  }
  p {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #828282;
    padding-left: 12.2rem;
    padding-top: 1.3rem;
    padding-bottom: 16.4rem;
  }
  ul {
    list-style-type: none;

    li {
      display: flex;
      background: #828282;
      align-items: center;
    }
  }
`;

const Right = styled.div`
  float: right;
  width: 33.1rem;
  margin-top: 3.9rem;
  margin-right: 16.8rem;
  p {
    padding-left: 11.5rem;
    padding-bottom: 1rem;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    color: #000000;
  }
  ul {
    list-style-type: none;
    li {
      padding-bottom: 0.3rem;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      color: #0b0b0b;
      img {
        padding-top: 1.7rem;
        width: 16.4rem;
        height: 5rem;
        padding-bottom: 2.9rem;
      }
    }
  }
`;

export default function FooterClient() {
  return (
    <Footer>
      <Left1>
        <ul>
          <p>Công ty</p>
          <li> Giới thiệu & liên hệ </li>
          <li>Trung tâm trợ giúp</li>
          <li>Điều khoản sử dụng</li>
          <li>Bảo mật thông tin</li>
          <li>Giải quyết khiếu nại</li>
          <li>Hợp tác nhân viên giao nhận</li>
          <li>Đăng ký quán</li>
          <li>Ứng dụng Capichi</li>
          
        </ul>
      </Left1>
      <Left_App>
        <ul>
          <p>App Capichi</p>
          <li>
            <img src="Group 62.png"></img>{" "}
          </li>
          <li>
            <img src="Group 63.png"></img>{" "}
          </li>
        </ul>
      </Left_App>

      <Center>
        <img src="/Logo.png" />
        <p> @ Capichi 2021 - A Food Delivery Corporation</p>
        <ul>
          {/* <li><a><img src="/Shape.png"></img></a></li>
            <li><a><img src="/Shape.png"></img></a></li>
            <li><a><img src="/Shape.png"></img></a></li> */}
        </ul>
      </Center>

      <Right>
        <ul>
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
            Số điện thoại:<span style={{ color: "red" }}> 1900 1522</span>{" "}
          </li>
          <li>
            Email:<span style={{ color: "#2E92FF" }}> capichi@gmail.com</span>{" "}
          </li>
          <li>
            <img src="image 2.png"></img>
          </li>
        </ul>
      </Right>
    </Footer>
  );
}
