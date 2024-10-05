const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/users", (req, res) => {
  const user = req.body;
  console.log("Name: " + user.name);
  console.log("Email: " + user.email);
  console.log("Password: " + user.password);
});

app.listen(3000, () => {
  console.log("Running ....")
});