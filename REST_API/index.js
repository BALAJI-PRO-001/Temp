const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const FILE_PATH = path.join(__dirname, "./data/userRecords.json")
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

app.use(express.json());

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    "status": "success",
    "count": users.length,
    "data": {
      "users": users
    }
  });
});


app.post("/api/v1/users", (req, res) => {
  const id = users[users.length -1].id + 1;
  const newUser = Object.assign({id: id}, req.body);
  users.push(newUser);
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(201).json({
      "status": "success",
      "data": {
        "newUser": newUser
      }
    });
  });
});


app.listen(3000, () => console.log("Server is running ...."));

