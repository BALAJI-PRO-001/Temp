import "./UserDataRow.css";


const UserDataRow = (props) => {
  return (
    <tr className="user-data-row">
      <td>{props.id}</td>
      <td>{props.name}</td>       
      <td>{props.age}</td>       
      <td>{props.email}</td>       
      <td>{props.password}</td>       
      <td>J{props.job}</td>       
      <td>{props.salary} </td>       
    </tr>
  );
}

export default UserDataRow;