interface DataType {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

export const Users: DataType[] = [
  {
    id: 1,
    name: "Khuat Thi Hoa",
    email: "hoa@gmail.com",
    password: " 123",
    role: "user",
  },
  {
    id: 2,
    name: "Quan",
    email: "Quan@gmail.com",
    password: "123",
    role: "user",
  },
  {
    id: 3,
    name: "Khuat Thi Hoa",
    email: "admin@gmail.com",
    password: "123",
    role: "admin",
  },
  {
    id: 4,
    name: "Hillo",
    email: "hillo@gmail.com",
    password: "222",
    role: "admin",
  },
];

// const Users = [
// { id: "111", name: "John Doe", email: "johnDoe@xyz.com", password: 1232, role: "user" },
// { id: "112", name: "Jane Doe", email: "janeDoe@xyz.com", password: 1234, role: "user" },
// { id: "113", name: "Jenny Doe", email: "jennyDoe@xyz.com", password: 1235, role: "admin" },
// { id: "114", name: "Jude Doe", email: "judeDoe@xyz.com", password: 2222, role: "admin" },
// ];
// export { Users };
