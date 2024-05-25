const express = require("express");
const { signup, signin, signOut } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", signup)
      .post("/signin", signin)
      .get("/signOut", signOut);

module.exports = router;