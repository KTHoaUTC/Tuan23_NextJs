import axios from 'axios';
interface DataType {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: number;
  }
const getDataNhanVien = async () => {
    const url = `http://localhost:3100/users`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

const DeleteDataNhanVien = async (id: number) => {
    const url = `http://localhost:3100/users/${id}`;
    const response = await axios.delete(url);
    const result = response.status === 200 ? response.data : {};
    return result;
  };
  const CreateDataNhanVien = async (newData: DataType) => {
    const url = `http://localhost:3100/users`;
    const response = await axios.post(url, newData);
    const result = response.status === 200 ? response.data : {};
    return result;
  };

  const EditDataNhanVien = async ( id: number, updateData: DataType) => {
    const url = `http://localhost:3100/users/${id}`;
    const response = await axios.put(url, updateData);
    const result = response.status === 200 ? response.data : {};
    return result;
  }; 
export const apis = {
    getDataNhanVien,
    DeleteDataNhanVien,
    CreateDataNhanVien,
    EditDataNhanVien
}