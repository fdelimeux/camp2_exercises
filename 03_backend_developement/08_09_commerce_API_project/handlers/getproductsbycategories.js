const PG = require("PG");
const client = new PG.Client();
client.connect();

function getProductsByCategories(request, result) {
  client.query(
    "SELECT categorie_id as id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating FROM products_categories INNER JOIN products ON products.id = product_id WHERE categorie_id = $1::uuid",
    [request.params.categorieId],
    function(error, resultfunc) {
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getProductsByCategories;
