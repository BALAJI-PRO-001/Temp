const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const app = express();


const FILE_PATH = path.join(__dirname, "./data/userRecords.json");
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
const JWT_SECRET_KEY = "!@#$";

app.use(express.json());
app.use(cookieParser());


app.get("/api/v1/users", (req, res) => {
  const finalUsers = [];
  for (let user of users) {
    const { password, ...extractData } = user;
    finalUsers.push(extractData);
  }
  res.status(200).json({
    "status": "success",
    "count": finalUsers.length,
    "data": {
      "users": finalUsers
    }
  });
});




app.post("/api/v1/auth/signup", (req, res) => {
  const id = users[users.length -1].id + 1;
  const newUser = Object.assign({id: id}, req.body);
  const hashedPassword = bcryptjs.hashSync(newUser.password, 10);
  newUser.password = hashedPassword;
  users.push(newUser);
  const {password, ...user} = newUser;
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(201).json({
        "status": "success",
        "data": {
        "newUser": user
      }
    });
  });
});





app.post("/api/v1/auth/signin", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);

  if (!user) {
    return res.status(404).json({
      "status": "failed",
      "message": "User not found!"
    });
  }

  if (bcryptjs.compareSync(password, user.password)) {
    const accessToken = jwt.sign({id: user.id}, JWT_SECRET_KEY);
    const { password, ...rest } = user;
    res.status(200).cookie("access_token", accessToken, {httpOnly: true}).json({
      "status": "success",
      "data": {
        "user": rest
      }
    });
  } else {
    res.status(401).json({
      "status": "failed",
      "message": "Unauthorized"
    });
  }
});



function verifyToken(req, res, next) {
  const accessToken = req.cookies.access_token;
  if (!accessToken) {
    res.status(401).json({
      "status": "failed",
      "message": "Unauthorized"
    });
  }

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET_KEY);
    req.verifyedUserId = decoded.id;
    next();
  } catch(err) {
    res.status(403).json({
      "status": "failed",
      "message": "Forbidden"
    });
  }
}


app.delete("/api/v1/users/:id", verifyToken, (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);

  if (!user) {
   return res.status(404).json({
      "status": "failed",
      "message": "User not found!"
    });
  }

  if (req.verifyedUserId != req.params.id) {
    return res.status(401).json({
      "status": "failed",
      "message": "Unauthorized"
    });
  }

  if (bcryptjs.compareSync(password, user.password)) {
    const index = users.indexOf(user);
    users.splice(index, 1);
    fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
      if (err) throw err;
      res.status(204).json({});   
    });
  } else {
    res.status(401).json({
      "status": "failed",
      "message": "Unauthorized"
    });
  }

});


app.listen(3000, () => console.log("Server is running ...."));