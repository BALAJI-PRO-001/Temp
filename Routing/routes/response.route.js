const express = require("express");
const { homePage, aboutPage, contactPage, errorPage } = require("../controllers/response.controller");
const router = express.Router();

router.get("/home", homePage)
      .post("/about", aboutPage)
      .patch("/contact", contactPage)
      .delete("/error", errorPage);

module.exports = router;