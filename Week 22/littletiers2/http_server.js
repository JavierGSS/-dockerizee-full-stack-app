const express = require("express");
const app = express();
var low = require("lowdb");
var fs = require("lowdb/adapters/FileSync");
var adapter = new fs("db.json");
var db = low(adapter);
var colors = require("colors");

console.log("hello".green); // outputs green text

// data parser - used to parse post data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init the data store
db.defaults({ users: [] }).write();

// serve static files from public directory with Express
app.use(express.static("public"));

// post route
app.post("/test", function (req, res) {
  console.log(colors.yellow(req.body.username), colors.red(req.body.password));
  res.send(req.body.username + " " + req.body.password);
});

// add user
app.post("/add", function (req, res) {
  var fon = parseInt(req.body.phone);

  var user = {
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    phone: fon,
    streetaddress: req.body.streetaddress,
    citystatezip: req.body.citystatezip,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    avatar: req.body.avatar,
  };
  db.get("users").push(user).write();
  console.log(colors.yellow(user));
  res.send(db.get("users").value());
});

// send username & phone number
app.post("/phone", function (req, res) {
  let phoneArray = [];
  for (let i = 0; i < db.get("users").value().length; i++) {
    if (db.get("users").value()[i].username === req.body.username) {
      phoneArray.push({
        username: db.get("users").value()[i].username,
        phone: db.get("users").value()[i].phone,
      });
    }
  }
  res.send(phoneArray);
  console.log(phoneArray);
});

// A middleware function with no mount path.
// The function is executed every time the app receives a request
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// A middleware function mounted on the /data path.
// The function is executed for any type
// of HTTP request on the /data path.
app.use("/data", (req, res, next) => {
  console.log("Request Hostname:", req.hostname);
  next();
});

app.use("/data", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

// returns all users
app.get("/data", function (req, res) {
  res.send(db.get("users").value());
  console.log(colors.blue(db.get("users").value()));
});

// starts server
app.listen(3000, function () {
  console.log("Running on port 3000!".rainbow);
});
