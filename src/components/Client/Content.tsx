import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Layout, Skeleton } from "antd";
import styled from "styled-components";
import { List } from "antd";

const { Content } = Layout;
const FontMain = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;
const ContentFood = styled(FontMain)`
  @media screen and (max-width: 55rem) {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 18rem;
  margin-top: 2rem;
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
`;

const ContentFoodRes = styled(FontMain)`
  @media screen and (min-width: 51rem) {
    display: none;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;

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
        <List
          grid={{ gutter: 15, column: 3 }}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 9,
          }}
          dataSource={products}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card
                hoverable
                style={{ width: 340, height: "95%" }}
                cover={<img alt={item.name} src={item.img} />}
              >
                <h3>{item.name}</h3>
                <p className="addressRestau">
                  <img className="icon" src="/Vector.png" />
                  {item.address}
                  <span style={{ color: "#007AFF" }}>({item.map})</span>
                </p>
                <p className="TrangThai">
                  <img className="icon" src="Vector (1).png" /> {item.trangthai}
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
            </List.Item>
          )}
        />
      </ContentFood>
      <ContentFoodRes>
        <List
          grid={{ gutter: 15, column: 2 }}
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
              <Card
                hoverable
                style={{ width: 340, height: "95%" }}
                cover={<img alt={item.name} src={item.img} />}
              >
                <h3>{item.name}</h3>
                <p className="addressRestau">
                  <img className="icon" src="/Vector.png" />
                  {item.address}
                  <span style={{ color: "#007AFF" }}>({item.map})</span>
                </p>
                <p className="TrangThai">
                  <img className="icon" src="Vector (1).png" /> {item.trangthai}
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
            </List.Item>
          )}
        />
      </ContentFoodRes>
    </>
  );
};
export default ContentClient;
