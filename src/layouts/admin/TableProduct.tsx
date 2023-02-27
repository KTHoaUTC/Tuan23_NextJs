import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import CreateProduct from "@/components/admin/CreateProduct";
import EditProduct from "@/components/admin/EditProduct";
//import DeleteProduct from "@/components/admin/DeleteNhanVien";
interface DataType {
  key: string;
  id: string;
  name: string;
  soluong: number;
  mota: string;
  trangthai: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã Sản Phẩm",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số Lượng",
    dataIndex: "soluong",
    key: "soluong",
  },
  {
    title: "Mô Tả",
    dataIndex: "mota",
    key: "mota",
  },
  {
    title: "Trạng Thái",
    key: "trangthai",
    dataIndex: "trangthai",
    render: (_, { trangthai }) => (
      <>
        {trangthai.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <EditProduct></EditProduct>
        </a>
        <a>
          {/* <DeleteProduct></DeleteProduct> */}
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "1",
    name: "Quần dài",
    soluong: 32,
    mota: "Đẹp",
    trangthai: ["nice", "developer"],
  },
  {
    key: "2",
    id: "2",
    name: "Áo phông",
    soluong: 2,
    mota: "Tuyệt vời",
    trangthai: ["nice", "developer"],
  },
];

const AppTable: React.FC = () => (
  <>
    <CreateProduct></CreateProduct>
    <Table columns={columns} dataSource={data} />;
  </>
);

export default AppTable;
