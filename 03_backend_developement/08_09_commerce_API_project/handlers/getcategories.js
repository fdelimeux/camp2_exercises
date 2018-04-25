const PG = require("PG");
const client = new PG.Client();
client.connect();

function getCategories(request, result) {
  client.query(
    "select * from categories",
    [],
    function(error, resultfunc) {
      let objResult = [];
      if (error) {
        console.log(error);
      } else {
        result.json(resultfunc.rows);
      }
    });
}

module.exports = getCategories;
