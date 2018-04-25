const request = require('request');

function weatherByCityName(city){
  request({

    url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7270be120b04f6c76344f25f501aed5b&units=metric`,
    method : 'GET'
  },

    function(error,response,result) {
      result = (JSON.parse(result)).main.temp;
      console.log(result + "°C");
      //console.log(response);
    });
}

//weatherByCityName("bogota");

//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
module.exports = weatherByCityName;
