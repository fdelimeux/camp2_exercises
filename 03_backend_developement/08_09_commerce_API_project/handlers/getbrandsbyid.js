const PG = require("PG");
const client = new PG.Client();
client.connect();

function getBrandsById (request, result) {
  client.query(
    "SELECT * FROM brands WHERE id = $1::uuid",
    [request.params.brandsId],
    function(error, resultfunc) {
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getBrandsById;
