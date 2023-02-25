import { apis } from "@/apis/ApiNhanVien";
import CreateNhanVien from "@/components/admin/CreateNhanVien";
import EditNhanVien from "@/components/admin/EditNhanVien";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
interface DataType {
  index:number;
  id: number;
  email: string;
  username: string;
  password: string;
  phone: number;
}

export default function TableNhanVien({}: any, props: any) {
  const [nhanviens, setNhanViens] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const nhanviens= await apis.getDataNhanVien();
        setNhanViens(nhanviens);      
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const handleDelete = async (id: number) => {
    await apis.DeleteDataNhanVien(id);
    setNhanViens(nhanviens.filter((item) => item.id !== id));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "index+1",
      key: "id",
    },
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
      title: "Action",
      key: "action",
      render: (_, item: { id: number }) => (
        <Space size="middle">
          <a>
            <EditNhanVien></EditNhanVien>
          </a>
          <Popconfirm
            title="Bạn chắc chắn muốn xóa?"
            onConfirm={() => handleDelete(item.id)}
          >
            <Button style={{ float: "right", margin: "0px" }} type="primary">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  if (isLoading) {
    return <Skeleton active> </Skeleton>;
  }
  return (
    <>
      <h1> Danh Sách Nhân Viên</h1>
      <CreateNhanVien></CreateNhanVien>
      <Table columns={columns} dataSource={nhanviens} />
    </>
  );
}
