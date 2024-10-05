const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.patch("/users", (req, res) => {
  const user = {id: 1, name: "Ram", email: null};
  const { newEmail } = req.body;
  user.email = newEmail;
  console.log(user);
});

app.listen(3000, () => {
  console.log("Running ....")
});