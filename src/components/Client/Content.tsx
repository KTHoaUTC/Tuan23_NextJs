import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Layout, List, Skeleton } from "antd";
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
  //height: 30rem;
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
const ContentTitle = styled(FontMain)`
  h3 {
    width: 19rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0.1rem;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;
const Address = styled(FontMain)`
  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #000000;
    //text-overflow: ellipsis;
    img {
      padding-right: 0.5rem;
    }
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
  padding-top: 0.9rem;
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
      // padding-top: 0rem;
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
interface Product {
  id: number;
  name: string;
  img: string;
  desc: string;
  price: number;
}
function ContentClient() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const url = `https://dbjson.vercel.app/api/products`;
        const products = await axios.get(url);
        const productsData = products.data;
        setProducts(productsData);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  if (isLoading) {
    return <Skeleton active> </Skeleton>;
  }

  return (
    <Content style={{ padding: "0 24px", minHeight: 350 }}>
      <ContentFood>
        <List
          style={{margin:'0rem 3rem'}}
          grid={{ gutter: 16, column: 3 }}
          dataSource={products}
          renderItem={(item) => (
            <List.Item>
               <Card
                hoverable
                style={{ width: 340, height: "95%" }}
                cover={
                  <img
                    style={{ height: "20rem" }}
                    alt={item.name}
                    src={item.img}
                  />
                }
              >
                <ContentTitle>
                  <h3>{item.name}</h3>
                  <Address>
                    <p>
                      {" "}
                      <img src="/Vector.png" />
                      {item.desc}
                      <span style={{ color: "#007AFF" }}>({item.price})</span>
                    </p>
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
            </List.Item>
          )}
        />

        <ul>
          {products.map((item, index) => (
            <li>
              <Card
                hoverable
                style={{ width: 340, height: "95%" }}
                cover={
                  <img
                    style={{ height: "20rem" }}
                    alt={item.name}
                    src={item.img}
                  />
                }
              >
                <ContentTitle>
                  <h3>{item.name}</h3>
                  <Address>
                    <p>
                      {" "}
                      <img src="/Vector.png" />
                      {item.desc}
                      <span style={{ color: "#007AFF" }}>({item.price})</span>
                    </p>
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
          ))}
        </ul>
      </ContentFood>
    </Content>
  );
}

export default ContentClient;