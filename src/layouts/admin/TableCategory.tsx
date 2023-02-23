import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import EditProduct from "@/components/admin/EditProduct";
import DeleteProduct from "@/components/admin/DeleteProduct";
import CreateCategory from "@/components/admin/CreateCategory";
interface DataType {
  key: string;
  id: string;
  name: string;
  mota: string;
  trangthai: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã Loại Sản Phẩm",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Loại Sản Phẩm",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
          if (tag === "Sắp Hết") {
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
          <DeleteProduct></DeleteProduct>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "1",
    name: "Quần",
    mota: "Đẹp",
    trangthai: ["Còn Hàng"],
  },
  {
    key: "3",
    id: "2",
    name: "Áo ",
    mota: "Tuyệt vời",
    trangthai: ["Sắp Hết"],
  },
  {
    key: "3",
    id: "3",
    name: " Váy",
    mota: "Ngắn",
    trangthai: ["Còn Hàng"],
  },
];

const TableCategory: React.FC = () => (
  <>
    <CreateCategory></CreateCategory>
    <Table columns={columns} dataSource={data} />;
  </>
);

export default TableCategory;
