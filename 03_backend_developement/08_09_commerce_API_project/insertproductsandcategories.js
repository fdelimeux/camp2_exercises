const request = require('request');
const PG = require('PG');


const client = new PG.Client();
client.connect();

let i=1;
let nbInsert = 0;
let numToEnd = 0;

getCategories();

function getCategories(){
  request('https://decath-product-api.herokuapp.com/categories/', function (error, response, body) {
    let jsonRes = JSON.parse(body);
    let nbCat = jsonRes.length;
    while(jsonRes[i]) {
      getProductByCat(jsonRes[i]);
      i++;
    }
      //console.log(jsonRes[i]);
      console.log("end");
      client.end();

    //console.log(jsonRes[0]);
    //jsonRes.map(cat => getProductByCat(cat,nbCat));
  });
}

function getProductByCat(catid){
  request('https://decath-product-api.herokuapp.com/categories/' + catid.id + '/products', function (error, response, body) {
    let jsonRes = JSON.parse(body);
    nbInsert += jsonRes.length;
    jsonRes.map(productId => insertProducts(productId, catid, nbInsert));
  });
}


function insertProducts(line,categorie, nbToInsert) {
client.query(
    "INSERT INTO products_categories (product_id, categorie_id) VALUES ($1::uuid, $2::uuid)",
    [line.id, categorie.id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {

          console.log("reached condition");
          client.end();
        }
        //}
      }

  );
}


// let request = "insert into brands (id,title) VALUES ('" + brands.id + "','" + brands.title + "');";
// console.log(request);
// }
