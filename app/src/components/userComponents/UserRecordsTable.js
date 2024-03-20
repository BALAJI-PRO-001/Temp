import UserTableHeader from "./UserTableHeader";
import UserDataRow from "./UserDataRow";

import "./UserRecordsTable.css";


const UserRecordsTable = (props) => {
  const users = props.users;
  return (
    <table className="user-record-table">
      <caption>{props.children}</caption>
      <UserTableHeader />
      <tbody>
        <UserDataRow
          id={users[0].id}
          name={users[0].name}
          age={users[0].age}
          email={users[0].email}
          password={users[0].password}
          job={users[0].job}
          salary={users[0].salary}
        />
        <UserDataRow
          id={users[1].id}
          name={users[1].name}
          age={users[1].age}
          email={users[1].email}
          password={users[1].password}
          job={users[1].job}
          salary={users[1].salary}
        />
        <UserDataRow
          id={users[2].id}
          name={users[2].name}
          age={users[2].age}
          email={users[2].email}
          password={users[2].password}
          job={users[2].job}
          salary={users[2].salary}
        />
        <UserDataRow
          id={users[3].id}
          name={users[3].name}
          age={users[3].age}
          email={users[3].email}
          password={users[3].password}
          job={users[3].job}
          salary={users[3].salary}
        />
      </tbody>
    </table>
  );
}


export default UserRecordsTable;