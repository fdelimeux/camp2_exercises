const PG = require("PG");
const client = new PG.Client();
client.connect();

function getBrands (request, result) {
  client.query(
    "select * from brands",
    [],
    function(error, resultfunc) {
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getBrands;
