const request = require('request');

function weatherByLatitudeAndLongitude(coordlong,coordlat){
  request({

    url : `http://api.openweathermap.org/data/2.5/find?lat=${coordlat}&lon=${coordlong}&APPID=7270be120b04f6c76344f25f501aed5b`,
    method : 'GET'
  },

    function(error,response,result) {
      result = (JSON.parse(result)).main.temp;
      console.log(result + "°C");
      //console.log(response);
    });
}

function weatherByZipcode(zipCode,country){
  request({

    url : `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&APPID=7270be120b04f6c76344f25f501aed5b`,
    method : 'GET'
  },

    function(error,response,result) {
      result = (JSON.parse(result)).main.temp;
      console.log(result + "°C");
      //console.log(response);
    });
}

module.exports = {
  weatherByLatitudeAndLongitude : weatherByLatitudeAndLongitude,
  weatherByZipcode : weatherByZipcode
};

// weatherByLatitudeAndLongitude(32.661343, 51.680374);
// > 13°C
// weatherByZipcode("59000", "fr");
// > 11.29°C
