import Header from "./components/header.component.js";
import UserInterface from "./modules/UserInterface.js";
import Validator from "./modules/Validator.js";
import CommonFunction from "./modules/CommonFunction.js";
import User from "./modules/User.js";

const ui = new UserInterface();
const validator = new Validator();
const commonFunction = new CommonFunction();


// Load the header component in signup page
const bodyContent = document.body.innerHTML;
document.body.innerHTML = Header;
document.body.innerHTML += bodyContent;



const signupForm = document.forms[0];
const imgElements = signupForm.querySelectorAll(".eye-icon");
const inputElements = signupForm.querySelectorAll("input");

/* reset form */
commonFunction.resetForm(signupForm);


imgElements[0].addEventListener("click", () => {
  ui.setIcon(
    imgElements[0], 
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[2], "password", "text");
});
     

imgElements[1].addEventListener("click", () => {
  ui.setIcon(
    imgElements[1],
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[3], "password", "text");
});



for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "name") {
      validator.isvalidName(inputElement);
    }
    else if (inputElement.name == "email") {
      validator.isvalidEmail(inputElement);
    }
    else if (inputElement.name == "password") {
      validator.isvalidPassword(inputElement);
    }
    else if (inputElement.name == "confirmPassword") {
      validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim());
    }
  });
}



// submit event handler
signupForm.querySelector("button").addEventListener("click", (event) => {
  let booleans = [];
  const user = new User();

  for (let inputElement of inputElements) {
    if (inputElement.name == "name") 
      booleans.push(validator.isvalidName(inputElement));
    else if (inputElement.name == "email") {
      booleans.push(validator.isvalidEmail(inputElement));
      
      if (user.getUsersCount() != 0) {
        if (user.isEmailAlreadyExists(inputElement.value.trim())) {
          booleans.push(false);
          const errorElement = commonFunction.getSibling(inputElement, "p");
          ui.setBorder(inputElement, ui.BORDER_1PX_RED);
          ui.setMessage(errorElement, "Email address is already in use. Please try another email . . . .");
        }
      }
    }
    else if (inputElement.name == "password") 
      booleans.push(validator.isvalidPassword(inputElement));
    else if (inputElement.name == "confirmPassword") 
      booleans.push(validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim()));
  }

  // save the new user infromation into browser local storage
  if (commonFunction.isTrue(booleans)) {
    const newUser = {
      name: inputElements[0].value.trim(),
      email: inputElements[1].value.trim(),
      password: inputElements[2].value.trim()
    };
    user.signup(newUser);
  }


  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  event.stopPropagation();

});
