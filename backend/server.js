const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});
app.listen(5000, console.log("Server started on PORT 5000 "));
