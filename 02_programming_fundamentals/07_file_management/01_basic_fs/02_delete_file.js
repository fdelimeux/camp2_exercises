// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

function deleteFile(filepath) {
  //et result = "na";

  fs.unlink(filepath,(error) => {
    if (error) {
      console.warn(error);
    }
  });

}

module.exports = deleteFile;
