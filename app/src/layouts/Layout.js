import React, { useState } from "react";
import UserRecordsTable from "../components/userComponents/UserRecordsTable";
import SignupForm from "../components/formComponents/SignupForm";
import "./Layout.css";



const Layout = (props) => {
  let users = props.users;

  return (
    <div className="main-container">
      <SignupForm></SignupForm>
      <UserRecordsTable users={users}>Account Holders</UserRecordsTable>
    </div>
  );
};

export default Layout;
