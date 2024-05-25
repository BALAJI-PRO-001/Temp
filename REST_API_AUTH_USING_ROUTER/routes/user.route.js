const express = require("express");
const { getUsers, updateUser, deleteUser } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyToken");
const router = express.Router();

router.get("/users", getUsers)
      .patch("/update/:id", verifyToken, updateUser)
      .delete("/delete/:id", verifyToken, deleteUser);

module.exports = router;