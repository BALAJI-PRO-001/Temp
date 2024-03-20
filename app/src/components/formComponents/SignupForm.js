import Input from "./Input";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <form className="signup-form">
      <h1>Create Account</h1>
      <Input imgPath="/images/icons/user-name-icon.png" alt="icon" type="text">UserName</Input>
      <Input imgPath="/images/icons/email-icon.png" alt="icon" type="text">Email</Input>
      <Input imgPath="/images/icons/lock-icon.png" alt="icon" type="text">Create Password</Input>
      <Input imgPath="/images/icons/lock-icon.png" alt="icon" type="text">Confirm Password</Input>
    </form>
  );
};

export default SignupForm;
