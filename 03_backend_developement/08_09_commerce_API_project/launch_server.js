const express = require("express");
const PG = require("PG");
const getBrands = require("./handlers/getbrands.js");
const getBrandsById = require("./handlers/getbrandsbyid.js");
const getCategories = require("./handlers/getcategories.js");
const getCategoriesById = require("./handlers/getcategoriesbyid.js");
const getProducts = require("./handlers/getproducts.js");
const getProductsById = require("./handlers/getproductsbyid.js");
const getProductsByCategories = require("./handlers/getproductsbycategories.js");

const client = new PG.Client();
client.connect();

const app = express();

const port = process.env.PORT || 3000;

app.get("/categories/:categorieId/products", getProductsByCategories);
app.get("/products/:productId", getProductsById);
app.get("/categories/:categorieId", getCategoriesById);
app.get("/brands/:brandsId", getBrandsById);
app.get("/products", getProducts);
app.get("/categories", getCategories);
app.get("/brands", getBrands);

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
