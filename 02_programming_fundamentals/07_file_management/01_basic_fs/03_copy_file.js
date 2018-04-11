// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

function copyPaste(sourcefile, destfile) {
  //console.log(fs.existsSync(sourcefile));
  fs.stat(sourcefile, (err, stats) => {
  if (err) {
    console.log(err);
  } else if (!stats.isDirectory()) {
    if (fs.existsSync(sourcefile) && !fs.existsSync(destfile)) {
      fs.copyFileSync(sourcefile,destfile);
      if (fs.existsSync(destfile)) {
        console.log("File copied");
      } else {
        console.log("Error on copy");
      }

    } else if (!fs.existsSync(sourcefile)){
      console.log("Source file doesn't exist");
    } else if (fs.existsSync(destfile)){
      console.log("Dest file exist");
    };
  }
  else {
    console.log("It's a folder !");
  }
});
}

pathsrc="test.txt";
pathdest="../testcopy.txt";
copyPaste(pathsrc,pathdest);
module.exports = copyPaste;
