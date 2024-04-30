const express = require("express");
const app = express();

app.get("/:id/:userName", (req, res) => {

  console.log("\nProtocol: ", req.protocol);
  console.log("HostName: ", req.hostname);
  console.log("Ip: ", req.ip);
  console.log("Params: ", req.params);
  console.log("Path: ", req.path);
  console.log("QueryString: ", req.query);
  console.log("Route: ", req.route);
  console.log("Secure: ", req.secure);
  console.log("Subdomains: ", req.subdomains);
  
  res.end("ok");
});

app.listen(3000, () => console.log("Server is running ...."));