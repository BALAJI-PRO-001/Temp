import Header from "./components/header.component.js";
import UserInterface from "./modules/UserInterFace.js";
import CommonFunction from "./modules/CommonFunction.js";
import Validator from "./modules/Validator.js";
import User from "./modules/User.js";

// Load the header component in signin page
const bodyContent = document.body.innerHTML;
document.body.innerHTML = Header;
document.body.innerHTML += bodyContent;


const ui = new UserInterface();
const commonFunction = new CommonFunction();
const validator = new Validator();
const user = new User();

/* Redirect the page if the user count is empty*/
if (user.getUsersCount() == 0) 
  location.href = location.href.replace("signin", "signup");


const signinForm = document.forms[0];
const imgElement = signinForm.querySelector(".eye-icon");
const inputElements = signinForm.querySelectorAll("input");
const rememberMeCheckBox = signinForm.querySelector("#checkbox");

/* reset form */
commonFunction.resetForm(signinForm);

/* set user login information */
const userLoginInformation = JSON.parse(localStorage.getItem("userLoginInformation"));
if (userLoginInformation) {
  inputElements[0].value = userLoginInformation.email;
  inputElements[1].value = userLoginInformation.password;
  /* disable the eye icon for security reason */
  const imgElement = inputElements[1].parentElement.querySelector(".eye-icon");
  imgElement.style.display = "none";
}


imgElement.addEventListener("click", () => {
  ui.setIcon(
    imgElement,
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[1], "password", "text");
});


for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "email") {
      validator.isvalidEmail(inputElement);
    }

    if (inputElement.name == "password") {
      validator.isvalidPassword(inputElement);
    }
  });
}





signinForm.querySelector("button").addEventListener("click", (event) => {
  let booleans = [];
  const usersCount = user.getUsersCount();
  let status = false;

  for (let inputElement of inputElements) {
    if (inputElement.name == "email") 
      booleans.push(validator.isvalidEmail(inputElement));

    if (inputElement.name == "password") 
      booleans.push(validator.isvalidPassword(inputElement));
  }


  // Handle signin auth
  if (commonFunction.isTrue(booleans) && usersCount != 0) {
    const email = inputElements[0].value.trim();
    const password = inputElements[1].value.trim();
    const signinInformation = user.signin(email, password);

    if (!signinInformation.email) {
      booleans.push(false);
      const errorElement = commonFunction.getSibling(inputElements[0], "p");
      ui.setBorder(inputElements[0], ui.BORDER_1PX_RED);
      ui.setMessage(errorElement, "Email address does not exist. Please try another email . . . ");
    }

    if (!signinInformation.password) {
      booleans.push(false);
      const errorElement = commonFunction.getSibling(inputElements[1], "p");
      ui.setBorder(inputElements[1], ui.BORDER_1PX_RED);
      ui.setMessage(errorElement, "Incorrect password. Please try again . . . .");
    }
    status = signinInformation.status;
  }


  if (rememberMeCheckBox.checked && commonFunction.isTrue(booleans) && status) {
    const userLoginInformation = {
      email: inputElements[0].value,
      password: inputElements[1].value
    };
    localStorage.setItem("userLoginInformation", JSON.stringify(userLoginInformation));
  }

  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  else event.stopPropagation();
});


