// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");
const path = require("path");

function deleteFile(filepath) {
  let result = "na";
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
  result = fs.existsSync(filepath);
  return result;
}

console.log(deleteFile("test.txt"));
//module.exports = deleteFile();
