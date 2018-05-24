const PG = require("PG");
const client = new PG.Client();
client.connect();

function getProducts(productid) {
  return client.query(
    "select * from products where decathlon_id=$1",
    [productid],
    );
}

//getProducts("8289272").then(console.log)

module.exports = getProducts;
