import { Card, Layout, List, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const { Content } = Layout;
const FontMain = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;
const ContentFood = styled(FontMain)`
  @media screen and (min-width: 780px) {
    display: flex;
    flex-wrap: wrap;
    float: right;
    justify-content: space-between;
    margin-left: 0rem;
    margin-top: 2rem;
    .item_List {
      .cardItem {
        width: 23rem;
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
        .addressRestau {
          font-size: 1.2rem;
          line-height: 1.4rem;
          color: #000000;
        }
        .TrangThai {
          font-size: 1.2rem;
          line-height: 1.4rem;
          color: #1dac0e;
          display: flex;
          align-items: center;
          align-content: center;
          padding-top: 0.5rem;
        }
        .Hours {
          color: yellow;
          ul {
            padding-left: 0rem;
            display: flex;
            list-style-type: none;
            li {
              padding-right: 0.5rem;
              display: flex;
              align-items: center;
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
        }
        .Contact {
          padding-bottom: 0rem;
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
        }
        .icon {
          padding-right: 0.5rem;
          width: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 45rem;
    .item_List {
      display: none;
    }

    margin-left: 1rem;
    margin-top: 1rem;
    .item_List {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      //  width: 15rem;

      .cardItem {
        width: 19rem;
        h3 {
          width: 15rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 0.1rem;
          font-weight: 700;
          font-size: 1.6rem;
          margin-bottom: 0rem;
          //line-height: 2.2rem;
        }
        .addressRestau {
          font-size: 1rem;
          line-height: 1.4rem;
          color: #000000;
        }
        .TrangThai {
          padding-top: 0rem;
          font-size: 1rem;
          line-height: 1.4rem;
          color: #1dac0e;
          display: flex;
          align-items: center;
          align-content: center;
        }
        .Hours {
          color: yellow;
          ul {
            margin-bottom: 0rem;
            padding-left: 0rem;
            display: flex;
            list-style-type: none;
            li {
              padding-right: 0.5rem;
              display: flex;
              align-items: center;
              button {
                width: 7rem;
                height: 2rem;
                border: none;
                background-color: rgba(46, 146, 255, 0.2);
                border-radius: 0.7rem;
                font-size: 1rem;
                display: flex;
                align-items: center;
                text-align: center;
              }
            }
          }
        }
        .Contact {
          padding-bottom: 0rem;
          margin-bottom: 0rem;
          ul {
            display: flex;
            list-style-type: none;
            li {
              display: flex;
              align-items: center;
              padding-left: 0.1rem;
              margin-right: 0.5rem;
              button {
                color: white;
                font-weight: 700;
                font-size: 1.4rem;
                border: none;
                display: flex;
                padding: 0.8rem 1.3rem;
                width: 8rem;
                height: 3.2rem;
                background-color: #ff881d;
                box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
                  0px 8px 16px rgba(96, 97, 112, 0.16);
                border-radius: 1rem;
              }
              img {
                width: 5rem;
                height: 5rem;
                margin-left: 1rem;
              }
            }
          }
        }
        .icon {
          padding-right: 0.5rem;
          width: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    width: 48rem;
    .item_List {
      display: none;
    }

    margin-left: 2rem;
    margin-top: 1rem;
    .item_List {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      //  width: 15rem;

      .cardItem {
        width: 19rem;
        h3 {
          width: 15rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 0.1rem;
          font-weight: 700;
          font-size: 1.6rem;
          margin-bottom: 0rem;
          //line-height: 2.2rem;
        }
        .addressRestau {
          font-size: 1rem;
          line-height: 1.4rem;
          color: #000000;
        }
        .TrangThai {
          padding-top: 0rem;
          font-size: 1rem;
          line-height: 1.4rem;
          color: #1dac0e;
          display: flex;
          align-items: center;
          align-content: center;
        }
        .Hours {
          color: yellow;
          ul {
            margin-bottom: 0rem;
            padding-left: 0rem;
            display: flex;
            list-style-type: none;
            li {
              padding-right: 0.5rem;
              display: flex;
              align-items: center;
              button {
                width: 7rem;
                height: 2rem;
                border: none;
                background-color: rgba(46, 146, 255, 0.2);
                border-radius: 0.7rem;
                font-size: 1rem;
                display: flex;
                align-items: center;
                text-align: center;
              }
            }
          }
        }
        .Contact {
          padding-bottom: 0rem;
          margin-bottom: 0rem;
          ul {
            display: flex;
            list-style-type: none;
            li {
              display: flex;
              align-items: center;
              padding-left: 0.1rem;
              button {
                color: white;
                font-weight: 700;
                font-size: 1.4rem;
                border: none;
                display: flex;
                padding: 0.8rem 1.3rem;
                width: 8rem;
                height: 3.2rem;
                background-color: #ff881d;
                box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
                  0px 8px 16px rgba(96, 97, 112, 0.16);
                border-radius: 1rem;
              }
              img {
                width: 5rem;
                height: 5rem;
                margin-left: 1rem;
              }
            }
          }
        }
        .icon {
          padding-right: 0.5rem;
          width: 1.5rem;
        }
      }
    }
  }
`;
interface Product {
  id: number;
  name: string;
  address: string;
  img: string;
  trangthai: string;
  map: string;
}
const ContentClient: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const url = `http://localhost:3100/listFood`;
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
    <>
      <ContentFood>
        <div className="item_List">
          <List
            grid={{
              gutter: 8,
              //  xs: 1,
              sm: 2,
              // md: 4,
              lg: 3,
              //xl: 6,
              xxl: 3,
            }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 6,
            }}
            dataSource={products}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <div className="cardItem">
                  <Card
                    hoverable
                    //     style={{ width: 340, height: "95%" }}
                    cover={<img alt={item.name} src={item.img} />}
                  >
                    <h3>{item.name}</h3>
                    <p className="addressRestau">
                      <img className="icon" src="/Vector.png" />
                      {item.address}
                      <span style={{ color: "#007AFF" }}>({item.map})</span>
                    </p>
                    <p className="TrangThai">
                      <img className="icon" src="Vector (1).png" />{" "}
                      {item.trangthai}
                    </p>
                    <div className="Hours">
                      <ul>
                        <li>
                          <img className="icon" src="Vector (2).png" />
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
                    </div>
                    <br></br>
                    <div className="Contact">
                      <ul>
                        <li>
                          <button>Delivery</button>
                        </li>
                        <li>
                          <img src="\Group 47.png" />
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </List.Item>
            )}
          />
        </div>
      </ContentFood>
    </>
  );
};
export default ContentClient;
