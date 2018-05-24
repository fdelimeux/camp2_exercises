const express = require("express");
const weatherByCityName = require("./weather.js")
const app = express();

const port = process.env.PORT || 3000;

// app.get("/categories/:categorieId/products", getProductsByCategories);
// app.get("/products/:productId", getProductsById);
app.get("/:city", function(request, result) {

  weatherByCityName.weatherByCityName(request.params
    .city).then(findweather => result.send(`
    <h1>${findweather.name}</h1>
    <h2>${findweather.main.temp}</h2>
    <img src="https://openweathermap.org/img/w/${findweather.weather[0].icon}.png">`));
  });

app.get("/",)
app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
