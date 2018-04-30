const fetch = require('node-fetch');

function weatherByCityName(city){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7270be120b04f6c76344f25f501aed5b&units=metric`)
    .then(result => result.json())
    .then(result => console.log(city + " : " + result.main.temp + "°C"));
  }

weatherByCityName("Milan");
