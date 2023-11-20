var express = require("express");
const app = express();
const admin = require("./admin");

// used to serve static files from public directory
app.use(express.static("public"));

app.get("/open", (req, res) => {
  res.send("Open route!");
});

// verify token at root route
app.get("/auth", function (req, res) {
  const idToken = req.headers.authorization;
  console.log("Header: ", idToken);

  // verify token
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("Decoded token: ", decodedToken);
      res.send("Authentication success!");
    })
    .catch(function (error) {
      console.log("error: ", error);
      res.send("Authentication fail!");
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
