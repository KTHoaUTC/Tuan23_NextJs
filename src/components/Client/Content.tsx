import React from "react";

import { Card, Layout, theme } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const FontMain = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;
const ContentFood = styled.div`
  margin-left: 8rem;
  ul {
    display: flex;
    list-style-type: none;
    li {
      padding-left: 2rem;
      display: flex;
      align-items: center;
    }
  }
`;
const ContentTitle = styled.div`
  h3 {
    margin-top: 0.1rem;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;
const Address = styled(FontMain)`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #000000;
  img {
    padding-right: 0.5rem;
  }
`;
const TrangThai = styled(FontMain)`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #1dac0e;
  display: flex;
  align-items: center;
  align-content: center;
  padding-top: 0.5rem;
  img {
    padding-right: 0.5rem;
  }
`;
const Hours = styled(FontMain)`
  color: yellow;
  padding-top: 0.5rem;
  /*  padding-right: 0.5rem; */
  padding-left: 0rem;

  ul {
    padding-left: 0rem;
    display: flex;
    list-style-type: none;
    li {
      padding-left: 0rem;
      display: flex;
      align-items: center;
      img {
        padding-right: 0.5rem;
      }
      button {
        width: 7.9rem;
        height: 2rem;
        border: none;
        background-color: rgba(46, 146, 255, 0.2);
        border-radius: 0.7rem;
        font-size: 1.2rem;
        line-height: 1.4rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
      }
    }
  }
`;
const Contact = styled(FontMain)`
  ul {
    padding-left: 0rem;
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      padding-left: 0.5rem;
      button {
        color: white;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.6rem;
        border: none;
        display: flex;
        padding: 0.8rem 1.6rem;
        width: 9rem;
        height: 3.2rem;
        background-color: #ff881d;
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
        border-radius: 1rem;
      }
      img {
        width: 6rem;
        height: 6rem;
        margin-left: 2rem;
      }
    }
  }
`;
const ContentClient: React.FC = () => {
  return (
    <Content style={{ padding: "0 24px", minHeight: 350 }}>
      <ContentFood>
        <ul>
          <li>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="/Rectangle 2029 (1).png" />}
            >
              <ContentTitle>
                <h3>Peppo restaurant</h3>
                <Address>
                  <img src="/Vector.png" />
                  12, Pham Ngoc Thach st, Dong Da dist, Ha Noi{" "}
                  <span style={{ color: "#007AFF" }}>(0.3 km)</span>{" "}
                </Address>
                <TrangThai>
                  <img src="Vector (1).png" /> Đang mở cửa
                </TrangThai>
                <Hours>
                  <ul>
                    <li>
                      <img src="Vector (2).png" />
                    </li>
                    <li>
                      <button>08:30 - 10:30</button>
                    </li>
                    <li>
                      <button
                        style={{
                          backgroundColor: "rgba(29, 172, 14, 0.2)",
                        }}
                      >
                        08:30 - 10:30
                      </button>
                    </li>
                  </ul>
                </Hours>
                <br></br>
                <Contact>
                  <ul>
                    <li>
                      <button>Delivery</button>
                    </li>
                    <li>
                      <img src="\Group 47.png" />
                    </li>
                  </ul>
                </Contact>
              </ContentTitle>
            </Card>
          </li>
          <li>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="/Rectangle 2029 (2).png" />}
            >
              <ContentTitle>
                <h3>Peppo restaurant</h3>
                <Address>
                  <img src="/Vector.png" />
                  12, Pham Ngoc Thach st, Dong Da dist, Ha Noi{" "}
                  <span style={{ color: "#007AFF" }}>(0.3 km)</span>{" "}
                </Address>
                <TrangThai>
                  <img src="Vector (1).png" /> Đang mở cửa
                </TrangThai>
                <Hours>
                  <ul>
                    <li>
                      <img src="Vector (2).png" />
                    </li>
                    <li>
                      <button>08:30 - 10:30</button>
                    </li>
                    <li>
                      <button
                        style={{
                          backgroundColor: "rgba(29, 172, 14, 0.2)",
                        }}
                      >
                        08:30 - 10:30
                      </button>
                    </li>
                  </ul>
                </Hours>
                <br></br>
                <Contact>
                  <ul>
                    <li>
                      <button>Delivery</button>
                    </li>
                    <li>
                      <img src="\Group 47.png" />
                    </li>
                  </ul>
                </Contact>
              </ContentTitle>
            </Card>
          </li>
          <li>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<img alt="example" src="/Rectangle 2029 (3).png" />}
            >
              <ContentTitle>
                <h3>Peppo restaurant</h3>
                <Address>
                  <img src="/Vector.png" />
                  12, Pham Ngoc Thach st, Dong Da dist, Ha Noi{" "}
                  <span style={{ color: "#007AFF" }}>(0.3 km)</span>{" "}
                </Address>
                <TrangThai>
                  <img src="Vector (1).png" /> Đang mở cửa
                </TrangThai>
                <Hours>
                  <ul>
                    <li>
                      <img src="Vector (2).png" />
                    </li>
                    <li>
                      <button>08:30 - 10:30</button>
                    </li>
                    <li>
                      <button
                        style={{
                          backgroundColor: "rgba(29, 172, 14, 0.2)",
                        }}
                      >
                        08:30 - 10:30
                      </button>
                    </li>
                  </ul>
                </Hours>
                <br></br>
                <Contact>
                  <ul>
                    <li>
                      <button>Delivery</button>
                    </li>
                    <li>
                      <img src="\Group 47.png" />
                    </li>
                  </ul>
                </Contact>
              </ContentTitle>
            </Card>
          </li>
        </ul>
      </ContentFood>
    </Content>
  );
};

export default ContentClient;
