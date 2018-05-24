const PG = require("PG");
const client = new PG.Client();
client.connect();

function getProductsByCategories(idcat) {
  return client.query(
    "SELECT categorie_id as id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating FROM products_categories INNER JOIN products ON products.id = product_id WHERE categorie_id = $1::uuid",
    [idcat]);
}

//getProductsByCategories("b2342ec8-17e9-45b5-8286-db9a607ff33b").then(console.log)

module.exports = getProductsByCategories;
