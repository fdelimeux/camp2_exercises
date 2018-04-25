const request = require('request');
const PG = require('PG');


const client = new PG.Client();
client.connect();

let i=0;
let boardLine = 0;

request('https://decath-product-api.herokuapp.com/categories', function (error, response, body) {
  let jsonRes = JSON.parse(body);
  let boardLine = jsonRes.length;
  JSON.parse(body).map(insertCategories);

});

function insertCategories(categorie) {
  client.query(
    "INSERT INTO categories (id,decathlon_id,label) VALUES ($1 , $2, $3)",
    [categorie.id,categorie.decathlon_id,categorie.label],
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
