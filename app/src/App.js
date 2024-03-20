import Layout from "./layouts/Layout";
import "./App.css";

let users = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "password": "jd@pass123",
    "job": "Software Engineer",
    "salary": 90000
  },
  {
    "id": 2,
    "name": "Alice Smith",
    "age": 28,
    "email": "alice.smith@email.com",
    "password": "ASm!th2021",
    "job": "Data Analyst",
    "salary": 75000
  },
  {
    "id": 3,
    "name": "Michael Johnson",
    "age": 35,
    "email": "m.johnson@gmail.com",
    "password": "johnson88$$",
    "job": "Marketing Manager",
    "salary": 85000
  },
  {
    "id": 4,
    "name": "Sarah Lee",
    "age": 42,
    "email": "sarahlee@companyxyz.com",
    "password": "P@ssw0rd!321",
    "job": "HR Director",
    "salary": 100000
  },
  {
    "id": 5,
    "name": "David Brown",
    "age": 27,
    "email": "david.brown@startup.co",
    "password": "Browny#1234",
    "job": "Product Manager",
    "salary": 85000
  }
];

const App = () => {
  return (
    <Layout users={users}></Layout>
  );
}

export default App;
