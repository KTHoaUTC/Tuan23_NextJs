import axios from 'axios';
interface DataType {
    id: number;
    email: string;
    username: string;
    password: string;
    phone: number;
  }
const getDataNhanVien = async () => {
    const url = `https://fakestoreapi.com/users/`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

const DeleteDataNhanVien = async (id: number) => {
    const url = `https://fakestoreapi.com/users/${id}`;
    const response = await axios.delete(url);
    const result = response.status === 200 ? response.data : {};
    return result;
  };
  const CreateDataNhanVien = async (newData: DataType) => {
    const url = `https://fakestoreapi.com/users/`;
    const response = await axios.post(url, newData);
    const result = response.status === 200 ? response.data : {};
    return result;
  };

  
export const apis = {
    getDataNhanVien,
    DeleteDataNhanVien,
    CreateDataNhanVien
}