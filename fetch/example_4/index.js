const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.delete("/users", (req, res) => {
  const user = { id: 1, name: "Ram", email: "ram@gmail.com"};
  delete user.email;
  console.log(user);
});

app.listen(3000, () => {
  console.log("Running ....")
});