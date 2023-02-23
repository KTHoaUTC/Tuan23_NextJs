import React from "react";
import { Col, Layout, Row } from "antd";
import styled from "styled-components";
const { Footer } = Layout;

const FontFooter = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
`;

const FooterMain = styled(FontFooter)`
  background-color: #ffffff;
`;
const FooterLeft = styled.div`
  margin-top: 3.9rem;
  margin-left: 5rem;
`;
const FooterLeft1 = styled.div`
  float: left;
  width: 18.6rem;

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
const FooterLeft2 = styled(FontFooter)`
  float: right;
  //margin-top: 3.9rem;
  //margin-left: 5.1rem;
  p {
    padding-bottom: 1rem;
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
        //box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
        //  0px 2px 4px rgba(96, 97, 112, 0.16);
      }
      padding-bottom: 2rem;
      display: flex;
      align-items: center;
    }
  }
`;

const FooterCenter = styled.div`
  background-color: #f1e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterRight = styled(FontFooter)`
  float: left;
  text-align: right;
  width: 33.1rem;
  margin-top: 3.9rem;
  padding-left: 10rem;
  margin-right: 16.8rem;
  p {
    padding-left: 11.5rem;
    padding-bottom: 1rem;
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
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: flex;
      align-items: center;
      color: #0b0b0b;
      img {
        padding-top: 1.7rem;
        width: 15rem;
        height: 9rem;
        padding-bottom: 2.9rem;
      }
    }
  }
`;

const FooterClient: React.FC = () => {
  return (
    <FooterMain>
      <Row>
        <Col span={8}>
          <FooterLeft>
            <FooterLeft1>
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
            </FooterLeft1>
            <FooterLeft2>
              <ul>
                <p>App Capichi</p>
                <li>
                  <img src="Group 62.png"></img>{" "}
                </li>
                <li>
                  <img src="Group 63.png"></img>{" "}
                </li>
              </ul>
            </FooterLeft2>
          </FooterLeft>{" "}
        </Col>

        <Col span={8}>
          <FooterCenter>
            <img src="/Logo.png" />
            <p> @ Capichi 2021 - A Food Delivery Corporation</p>
          </FooterCenter>{" "}
        </Col>

        <Col span={8}>
          <FooterRight>
            <ul>
              <p>Địa chỉ công ty</p>
              <li> Công ty cổ phần Capichi</li>
              <li>
                Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường Cầu giấy,
                quận Cầu Giấy, Hà Nội
              </li>
              <li>
                Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP. Hà
                Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021
              </li>
              <li>
                Số điện thoại:<span style={{ color: "red" }}> 1900 1522</span>{" "}
              </li>
              <li>
                Email:
                <span style={{ color: "#2E92FF" }}>
                  {" "}
                  capichi@gmail.com
                </span>{" "}
              </li>
              <li>
                <img src="image 2.png"></img>
              </li>
            </ul>
          </FooterRight>
        </Col>
      </Row>
    </FooterMain>
  );
};

export default FooterClient;
