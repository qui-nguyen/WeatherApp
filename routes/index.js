var express = require("express");
var router = express.Router();
var request = require("sync-request");

var cityModel = require("../models/cities");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Express" });
});

let message = "Please choose a country";

// Router for weather page
router.get("/weather", async function (req, res, next) {
  var cityList = await cityModel.find();
  if (req.session.email === undefined) {
    res.redirect("/");
  }
  res.render("weather", { cityList, message });
});

// Router for add city
router.post("/add-city", async function (req, res, next) {
  var data = request(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${req.body.newcity}&units=metric&lang=fr&appid=0c815b9455235455a301668a56c67b18`
  );
  var dataAPI = JSON.parse(data.body);

  var alreadyExist = false;

  var cityList = await cityModel.find();

  if (dataAPI.cod === "404") {
    message = dataAPI.message;
  } else {
  for (let i = 0; i < cityList.length; i++) {
    if (req.body.newcity.toUpperCase() === cityList[i].name.toUpperCase()) {
      alreadyExist = true;
    }
  }}

  if (alreadyExist === false && dataAPI.name) {
    var newCity = new cityModel({
      lon: dataAPI.coord.lon,
      lat: dataAPI.coord.lat,
      name: dataAPI.name,
      desc: dataAPI.weather[0].description,
      img:
        "http://openweathermap.org/img/wn/" + dataAPI.weather[0].icon + ".png",
      temp_min: dataAPI.main.temp_min,
      temp_max: dataAPI.main.temp_max,
    });

    await newCity.save();
  }

  cityList = await cityModel.find();

  res.render("weather", { cityList, message });
});

// Router for delete city
router.get("/delete-city", async function (req, res, next) {
  await cityModel.deleteOne({
    _id: req.query.id,
  });
  message = '';
  var cityList = await cityModel.find();

  res.render("weather", { cityList, message });
});

router.get("/update-cities", async function (req, res, next) {
  var cityList = await cityModel.find();

  for (var i = 0; i < cityList.length; i++) {
    var data = request(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${cityList[i].name}&units=metric&lang=fr&appid=0c815b9455235455a301668a56c67b18`
    );
    var dataAPI = JSON.parse(data.body);

    console.log(dataAPI);
    console.log(dataAPI.weather[0].description);
    await cityModel.updateOne(
      {
        _id: cityList[i]._id
      },
      {
        desc: dataAPI.weather[0].description,
        img:
          "http://openweathermap.org/img/wn/" +
          dataAPI.weather[0].icon +
          ".png",
        temp_min: dataAPI.main.temp_min,
        temp_max: dataAPI.main.temp_max,
      }
    );
  }
  var cityList = await cityModel.find();

  res.render("weather", { cityList, message });
});


module.exports = router;
