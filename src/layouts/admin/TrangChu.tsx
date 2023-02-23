import { Col, Row, Layout, theme } from "antd";
import React from "react";
import Chart from "./Chart/Chart";
//import ChartLine from "./Chart/ChartLine";
import ChartTable from "./Chart/ChartTable";
const { Content } = Layout;

const TrangChu_Chart: React.FC = () => {
  return (
    <>
      <Row className="Chart">
        <Col span={24}>
          {/* <ChartLine></ChartLine> */}
          <p className="title_Chart">Biểu đồ Hiển Thị Dữ Liệu </p>
        </Col>
        <Col span={12}>
          <ChartTable></ChartTable>
          <p className="title_Chart">Biểu đồ Hiển Thị Dữ Liệu </p>
        </Col>
        <Col span={12}>
          <Chart></Chart>
          <p className="title_Chart">Biểu đồ Hiển Thị Dữ Liệu </p>
        </Col>
      </Row>
    </>
  );
};

export default TrangChu_Chart;
