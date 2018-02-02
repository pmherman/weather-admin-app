var fs = require("fs");
var WeatherAdmin = require("./WeatherAdmin");

var loginType = process.argv[2];

var userName = process.argv[3];

var userLocation = process.argv[4];
// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor: not a variable
var MyAdmin = new WeatherAdmin();

if (loginType == "admin") {
    MyAdmin.getData();
} else {
    MyAdmin.newUserSearch(userName, userLocation);
}