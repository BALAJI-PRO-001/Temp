import UserInterface from "./modules/UserInterface.js";
import User from "./modules/User.js";

const user = new User();
const ui = new UserInterface();

const container = document.getElementById("container");

/* Load user records from localstorage */
if (user.getUsersCount() == 0) {
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "error-message");
  h1.innerText = "Message: No user records exist . . . .";
  container.appendChild(h1);
} else {
  const users = user.getUsers();
  const columnNames = ["Id", "Name", "Email", "Update", "Delete"];
  const options = ["<button>Update</button>", "<button>Delete</button>"];
  const userRecordsTable = ui.createTable(columnNames, users, options);
  container.appendChild(userRecordsTable);
}

