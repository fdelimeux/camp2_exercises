const PG = require("PG");
const client = new PG.Client();
client.connect();

function getCategories(request, result) {
  const query = {
      name: 'selectcat',
      text: 'select * from categories order by label',
      values: []
    }
  return client.query(query)
  };


//getCategories().then(console.log);

module.exports = getCategories;
