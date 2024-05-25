const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");


const FILE_PATH = path.join(__dirname, "../data/userRecords.json");
const users = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

function getUsers(req, res) {
  const extractedUsers = [];
  for (let user of users) {
    const { password, ...extractedUser } = user;
    extractedUsers.push(extractedUser);
  }
  res.status(200).json({
    status: "success",
    count: extractedUsers.length,
    data: {
      users: extractedUsers
    }
  });
}



function updateUser(req, res) {

  if (req.verifyUserId != req.params.id) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized" 
    });
  }

  const id = Number(req.params.id);
  const { email } = req.body;
  const userToUpdate = users.find((user) => user.id == id);

  if (email) {
    for (let user of users) {
      if (userToUpdate.email == email) 
        continue;
      if (user.email == email) {
        return res.status(409).json({
          status: "failed",
          message: "Duplicate Key"
        });
      }
    }
  }

  let hashedPassword = null;
  if (req.body.password) {
    hashedPassword = bcryptjs.hashSync(req.body.password, 10);
  }

  const index = users.indexOf(userToUpdate);
  const updatedUser = Object.assign(userToUpdate, req.body);
  updatedUser.password = (hashedPassword) ? hashedPassword : updatedUser.password;
  users[index] = updatedUser;
  const { password, ...user } = updatedUser;

  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(200).json({
      status: "success",
      data: {
        user: user
      }
    });
  });

}



function deleteUser(req, res) {

  if (req.verifyUserId != req.params.id) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });  
  }

  const { email, password } = req.body;
  const user = users.find((user) => user.email == email);

  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "User not found"
    });
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    return res.status(401).json({
      status: "failed",
      message: "Unauthorized"
    });  
  }

  const index = users.indexOf(user);
  users.splice(index, 1);
  fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
    if (err) throw err;
    res.status(204).json({});
  });

}



module.exports = {
  getUsers,
  updateUser,
  deleteUser
};