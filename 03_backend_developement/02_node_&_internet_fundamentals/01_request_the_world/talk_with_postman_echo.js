const request = require("request");

function simpleGet(callback) {
request(
  {
    url: "https://postman-echo.com/get",
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  }
);
}

// function simpleGetWithParams(callback) {
//   request.get({
//     url:'https://postman-echo.com/get',
//     form: {foo:'bar',program:'camp2',people:['Frieda','Francis']}},
//     function(error, response, result) {
//       result = JSON.parse(result);
//       callback(result.args);
//     })
// }

function simpleGetWithParams(callback) {
  request.get(
    'https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis',
    function(error, response, result) {
      result = JSON.parse(result);
      callback(result.args);
    })
}

function dateFormat() {
  let currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = currentDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  currentDate = year + "-" + month + "-" + day;
  return currentDate;
}

function validateTimestamp(callback) {
  currentDate=dateFormat();
  request.get({
    url:'https://postman-echo.com/time/valid',
    form: {timestamp:currentDate}},
    function(error, response, result) {
      callback(result);
    })
}


function toConsole(txt) {
  console.log(txt);
}

//simpleGetWithParams(toConsole);
console.log (dateFormat())
//validateTimestamp(toConsole);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
