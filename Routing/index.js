const express = require("express");
const router = require("./routes/response.route");
const app = express();

app.use("/app", router);

app.listen(3000, () => console.log("Server is running ...."));

