const request = require('request');
const PG = require('PG');


const client = new PG.Client();
client.connect();

let i=0;
let boardLine = 0;

request('https://decath-product-api.herokuapp.com/brands', function (error, response, body) {
    jsonRes = JSON.parse(body);
    boardLine = jsonRes.length;
    console.log("first length : " + boardLine);
    JSON.parse(body).map(insertBrands);

});

function insertBrands(brands) {

  client.query(
    "INSERT INTO brands (id,title) VALUES ($1 , $2)",
    [brands.id,brands.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        i++;
        if(i>=boardLine){
          console.log("reached condition");
          client.end();
        }
      }
    }
  );
}


// let request = "insert into brands (id,title) VALUES ('" + brands.id + "','" + brands.title + "');";
// console.log(request);
// }
