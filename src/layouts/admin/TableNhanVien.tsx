import { useEffect, useState } from "react";
import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import EditProduct from "@/components/admin/EditProduct";
import DeleteProduct from "@/components/admin/DeleteProduct";
import CreateNhanVien from "@/components/admin/CreateNhanVien";
import axios from "axios";
interface DataType {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Tên",
    dataIndex: "username",
    key: "username",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "PassWord",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "PhoneNumber",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Giới Tính",
    dataIndex: "gioitinh",
    key: "gioitinh",
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
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
      </Space>
    ),
  },
];
export default function TableNhanVien({}: any, props: any) {
  const [khachhangs, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const url = `https://fakestoreapi.com/users`;
        const khachhangs = await axios.get(url);

        const khachhangsData = khachhangs.data;
        setTodos(khachhangsData);
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
      <h1> Danh Sách Nhân Viên</h1>
      <CreateNhanVien></CreateNhanVien>
      <Table columns={columns} dataSource={khachhangs} />

      {/* {isLoading ? (
        <h1> Loading...</h1>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <p> {todo.name}</p>
            <p> {todo.age}</p>
            <p> {todo.diachi}</p>
            <p> {todo.gioitinh}</p>
          </div>
        ))
      )} */}
    </>
  );
}
