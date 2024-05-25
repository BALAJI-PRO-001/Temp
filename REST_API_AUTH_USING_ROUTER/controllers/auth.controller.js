const bcryptjs = require("bcryptjs");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "!@#$";

const FILE_PATH = path.join(__dirname, "../data/userRecords.json");
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

function signup(req, res) {
  const id = users[users.length -1].id + 1;
  const newUser = Object.assign({id: id}, req.body);
  
  for (let user of users) {
    if (user.email == newUser.email) {
      return res.status(409).json({
        status: "failed",
        message: "Duplicate Key"
      });
    }
  }

  const hashedPassword = bcryptjs.hashSync(newUser.password, 10);
  newUser.password = hashedPassword;
  users.push(newUser);
  const { password, ...user } = newUser;
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(201).json({
      status: "success",
      data: {
        user: user
      }
    });
  });
}



function signin(req, res) {
  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);
  
  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User not found"
    });
  }

  if (bcryptjs.compareSync(password, user.password)) {
    const accessToken = jwt.sign({id: user.id}, JWT_SECRET_KEY);
    const { password, ...rest } = user;
    res.cookie("access_token", accessToken, {httpOnly: true}).json({
      status: "success",
      data: {
        user: rest
      }
    });
  } else {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });
  }
}


function signOut(req, res) {
  try {
    res.status(200).clearCookie("access_token").json({
      status: "success",
      message: "User has been logged out"
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
}


module.exports = {
  signup, signin, signOut
};