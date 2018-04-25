const PG = require("PG");
const client = new PG.Client();
client.connect();

function getCategoriesById(request, result) {
  client.query(
    "SELECT * FROM categories WHERE id = $1::uuid",
    [request.params.categorieId],
    function(error, resultfunc) {
      let objResult = [];
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getCategoriesById;
