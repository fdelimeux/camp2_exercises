const request = require('request');
const PG = require('PG');


const client = new PG.Client();
client.connect();

let i=0;
let boardLine = 0;

request('https://decath-product-api.herokuapp.com/products', function (error, response, body) {
  let jsonRes = JSON.parse(body);
  boardLine = jsonRes.length;
  JSON.parse(body).map(insertProducts);
});

// function insertProducts(line) {
// client.query(
//     "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::integer, $3::text, $4::text, $5::text, $6::float, $7::float, $8::float, $9::integer, $10::text, $11::float)",
//     [line.id, line.decathlon_id, line.title, line.description, line.brand_id, line.min_price, line.max_price, line.crossed_price, line.percent_reduction, line.image_path, line.rating],
//     function(error, result) {
//       if (error) {
//         console.warn(error);
//       } else {
//         console.log("boardliune : " + boardLine);
//         i++;
//         if(i>=boardLine){
//           console.log("reached condition");
//           client.end();
//         }
//       }
//     }
//   );
// }


// let request = "insert into brands (id,title) VALUES ('" + brands.id + "','" + brands.title + "');";
// console.log(request);
// }
