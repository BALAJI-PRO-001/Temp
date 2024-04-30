const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {

  // res.json({
  //   "name": "User",
  //   "age": 10,
  //   "email": "user@gmail.com",
  //   "password": "user1234"
  // });

  // res.redirect("http://caddcae.com/");

  // res.send("<h1> Welocme To Express </h1>");

  // res.sendFile(path.join(__dirname, "./Files/content.txt"));
  
  // res.statusCode = 200; use with some data 

  // res.set({
  //   "Content-Type": "text/html"
  // }); use with some data

  // res.end("<h1> Welocme To Express </h1>");

  setTimeout(() => {
    res.download(path.join(__dirname, "./Files/content.txt"));
  }, 2000);
  
});

app.listen(3000, () => console.log("Server is running ...."));