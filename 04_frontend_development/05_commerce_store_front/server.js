const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const getCategories = require("./handlers/getCategories.js");
const getProducts = require("./handlers/getProducts.js");
const getProductByCategories = require("./handlers/getProductByCategories.js");

const port = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/categories/:categorieid",function (request,result) {
  getProductByCategories(request.params.categorieid)
   .then(value => result.render("productsbycategorie", {
      cats : value.rows
    }))
})

app.get("/products/:productid",function (request,result) {
  getProducts(request.params.productid)
   .then(value => result.render("products", {
      cats : value.rows
    }))
})

app.get("/layout", function (request, result) {
  result.render("layout");
})

app.get("/",function (request,result) {
  getCategories()
    .then(value => result.render("categories", {
      cats : value.rows
    }))
})

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
