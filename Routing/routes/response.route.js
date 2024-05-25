const express = require("express");
const { 
    getMethodHandler, 
    postMethodHandler,
    patchMethodHandler,
    deleteMethodHandler
} = require("../controllers/response.controller");

const router = express.Router();

router.get("/get", getMethodHandler)
      .post("/post", postMethodHandler)
      .patch("/patch", patchMethodHandler)
      .delete("/delete", deleteMethodHandler);

module.exports = router;