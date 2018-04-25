const PG = require("PG");
const client = new PG.Client();
client.connect();

function getProducts(request, result) {
  client.query(
    "select * from products",
    [],
    function(error, resultfunc) {
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getProducts;
