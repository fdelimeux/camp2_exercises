const fetch = require("node-fetch");

function weatherByLatitudeAndLongitude(coordlat,coordlong){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordlat}&lon=${coordlong}&units=metric&APPID=7270be120b04f6c76344f25f501aed5b`)
    .then(result => result.json())
    //.then(console.log)
    .then(result => console.log(result.name + " : " + result.main.temp + "°C"));
  }

weatherByLatitudeAndLongitude(32.661343, 51.680374);
