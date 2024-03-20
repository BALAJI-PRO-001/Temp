import "./UserTableHeader.css";

const UserTableHeader = (props) => {
  return (
    <thead className="user-table-header">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Password</th>
        <th>Job</th>
        <th>Salary</th>
      </tr>
    </thead>
  );
}

export default UserTableHeader;