const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/users", (req, res) => {
  res.json([
    {id: 1, name: "Ram", email: "ram@gmail.com"},
    {id: 2, name: "Sam", email: "sam@gmail.com"}
  ]);
});

app.listen(3000, () => {
  console.log("Running ....")
});