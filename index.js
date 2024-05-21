const express = require("express");
const app = express();


function getMethodHandler(req, res) {
  res.status(200).json({
    message: "GET method work"
  });
}


function postMethodHandler(req, res) {
  res.status(200).json({
    message: "POST method work"
  });
}


function patchMethodHandler(req, res) {
  res.status(200).json({
    message: "PATCH method work"
  });
}


function deleteMethodHandler(req, res) {
  res.status(200).json({
    message: "DELETE method work"
  });
}


app.route("/").get(getMethodHandler)
              .post(postMethodHandler)
              .patch(patchMethodHandler)
              .delete(deleteMethodHandler);
              

app.listen(3000, () => console.log("Server is running ...."));
