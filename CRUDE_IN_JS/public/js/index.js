import UserInterface from "./modules/UserInterface.js";
import CommonFunction from "./modules/CommonFunction.js";
import Validator from "./modules/Validator.js";
import User from "./modules/User.js";

const user = new User();
const ui = new UserInterface();
const commonFunction = new CommonFunction();
const validator = new Validator();

const container = document.getElementById("container");
let userRecordsTable = null;


/* Load user records from localstorage */
if (user.getUsersCount() == 0) {
  const messageContainer = document.getElementById("message-container");
  messageContainer.style.display = "block";
} else {
  const users = user.getUsers();
  const columnNames = ["Id", "Name", "Email", "Update", "Delete"];
  const options = [
    `<button class="update-btn">Update</button>`, 
    `<button class="delete-btn">Delete</button>`
  ];

  userRecordsTable = ui.createTable(columnNames, users, options);
  container.appendChild(userRecordsTable);
}


const popupMenu = document.getElementById("popup-menu");
var previousEvent = null;

// Get all delete buttons from user records table if tabel is exist
if (userRecordsTable != null) {
  const deleteButtons = userRecordsTable.querySelectorAll(".delete-btn");
  for (let button of deleteButtons) {
    button.addEventListener("click", (event) => {
      popupMenu.style.display = "block";
      // clear the password input field
      popupMenu.querySelector("input").value = "";
      previousEvent = event;
    });
  }
}



// Handel delete user records based on email and password
popupMenu.querySelector(".confirm-btn").addEventListener("click",  (event) => {
  const inputElement = commonFunction.getSibling(event.target, "input");
  const errorElement = inputElement.nextElementSibling;
  const id = Number(previousEvent.target.parentElement.parentElement.children[0].innerText);
  const email = previousEvent.target.parentElement.parentElement.children[2].innerText;
  const signinInformation = user.signin(email, inputElement.value.trim());
  
  if (!signinInformation.status) {
    ui.setBorder(inputElement, ui.BORDER_1PX_RED);
    ui.setMessage(errorElement, "Incorrect password. Please try again");
    setTimeout(() => {
      ui.setBorder(inputElement, "1px solid black");
      ui.setMessage(errorElement, "");
    }, 2000);
  } else {
    user.delete(id);
    if (user.getUsersCount() == 0) {
      localStorage.removeItem("users");
      location.reload();
    }

    previousEvent.target.parentElement.parentElement.remove();
    popupMenu.style.display = "none";
  }
});



popupMenu.querySelector(".cancel-btn").addEventListener("click", (event) => {
  event.target.parentElement.parentElement.style.display = "none";
});




/* Get all update buttons if userRecordsTable is exist */
if (userRecordsTable != null) {
  const updateButtons = userRecordsTable.querySelectorAll(".update-btn");
  for (let button of updateButtons) {
    button.addEventListener("click", (event) => {
      previousEvent = event;
      popupEditMenu.style.display = "block";

      // Load username and email into inputFields
      const inputElements = popupEditMenu.querySelectorAll("input");
      const name = button.parentElement.parentElement.children[1].innerText;
      const email = button.parentElement.parentElement.children[2].innerText;

      inputElements[0].value = name;
      inputElements[1].value = email;
      inputElements[2].value = "";
      inputElements[3].value = "";

      // Set default style for input and error message element
      ui.setBorder(inputElements[0], ui.BORDER_1PX_TRANSPARENT);
      ui.setBorder(inputElements[1], ui.BORDER_1PX_TRANSPARENT);
      ui.setBorder(inputElements[2], ui.BORDER_1PX_TRANSPARENT);
      ui.setBorder(inputElements[3], ui.BORDER_1PX_TRANSPARENT);

      ui.setMessage(commonFunction.getSibling(inputElements[0], "p"), "");
      ui.setMessage(commonFunction.getSibling(inputElements[1], "p"), "");
      ui.setMessage(commonFunction.getSibling(inputElements[2], "p"), "");
      ui.setMessage(commonFunction.getSibling(inputElements[3], "p"), "");
    });
  }
}


/* Handle update menu */
const popupEditMenu = document.getElementById("popup-edit-menu");


popupEditMenu.querySelector(".cancel-btn").addEventListener("click", (event) => {
  event.target.parentElement.parentElement.style.display = "none";
});


// Handle update event 
popupEditMenu.querySelector(".update-btn").addEventListener("click", (event) => {
  const inputElements = event.target.parentElement.querySelectorAll("input");
  const id = Number(previousEvent.target.parentElement.parentElement.children[0].innerText);
  let email = previousEvent.target.parentElement.parentElement.children[2].innerText.trim();

  const booleans = [];
  booleans.push(validator.isvalidName(inputElements[0]));
  booleans.push(validator.isvalidEmail(inputElements[1]));
  booleans.push(validator.isvalidPassword(inputElements[2]));
  booleans.push(validator.isvalidPassword(inputElements[3]));
  
  if (commonFunction.isTrue(booleans)) {
    const data = {
      name: inputElements[0].value.trim(),
      email: inputElements[1].value.trim(),
      password: inputElements[3].value.trim()
    };
    
    const password = inputElements[2].value.trim();

    const signinInformation = user.signin(email, password);
    if (!signinInformation.password) {
      const errorElement = commonFunction.getSibling(inputElements[2], "p");
      ui.setBorder(inputElements[2], ui.BORDER_1PX_RED);
      ui.setMessage(errorElement, "Invalid password. Please try again . . . .");
      return;
    }

    if (email != inputElements[1].value.trim()) {
      let isExists = user.isEmailAlreadyExists(inputElements[1].value.trim());
      if (isExists) {
        const errorElement = commonFunction.getSibling(inputElements[1], "p");
        ui.setBorder(inputElements[1], ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Email address is already in use. Please try another email . . . .");  
        return;
      }
    }
 
    if (signinInformation.status) {
      user.update(id, data);
      // show update message for user
      const message = popupEditMenu.querySelector(".update-message");
      message.innerText = "Update successful!";
      setTimeout(() => {
        message.innerText = "";
      }, 2000);

      // update the tableDataRow
      const tableDataRow = previousEvent.target.parentElement.parentElement.children;
      tableDataRow[1].innerText = data.name;
      tableDataRow[2].innerText = data.email;
    }
  }
});