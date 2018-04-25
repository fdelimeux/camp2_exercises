const PG = require("PG");
const client = new PG.Client();
client.connect();

function getProductsById(request, result) {
  client.query(
    "SELECT * FROM products WHERE id = $1::uuid",
    [request.params.productId],
    function(error, resultfunc) {
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getProductsById;
