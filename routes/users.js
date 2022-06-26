
var express = require('express');
var router = express.Router();
var request = require("sync-request");
var userModel = require("../models/users");



/* GET users listing. */
// Router login page


// Router sign up
router.post("/sign-up", async function (req, res, next) {
  // Charge user data
  var userList = await userModel.find();

  // Condition in existing of user
  let alreadyExist = await userModel.findOne({ name: req.body.name });
  if (alreadyExist == null && req.body.name) {
    // Create the session object by body objet (method POST)
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.password = req.body.password;
    // Create a new user
    var newUser = new userModel({
      name: req.session.name,
      email: req.session.email,
      password: req.session.password,
    });
    await newUser.save();
    // Redirection to weather page after sign-up if user not exist
    res.redirect("/weather");
  }
  // Result of the router /sign-up
  res.render("login", {});
});

// Router sign in
router.post("/sign-in", async function (req, res, next) {
  // Charge user data
  var userList = await userModel.find();

  // Condition in existing of user
  let alreadyExist = await userModel.findOne({
    password: req.body.password,
    email: req.body.email,
  });
  console.log(alreadyExist);
  if (alreadyExist) {
    // Create the session mail by body objet (methode POST)
    req.session.email = req.body.email;
    // Redirection to weather page after sign-in IF EXIST
    res.redirect("/weather");
  }
  // Result of the router /sign-up
  res.render("login", {});
});

// Router for logout
router.get("/logout", async function (req, res, next) {
  // Reset sesssion saved (by email)
  req.session.email = undefined;
  res.render("login", {});
});


module.exports = router;
