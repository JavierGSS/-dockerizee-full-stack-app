const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello brothers and sisters!");
});

app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
