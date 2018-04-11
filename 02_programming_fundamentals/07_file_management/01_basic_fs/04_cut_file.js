// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");

function cutPaste(sourcefile,destfile) {

  fs.stat(sourcefile, (err, stats) => {
  if (err) {
    console.log(err);
  } else if (!stats.isDirectory()) {
    if (fs.existsSync(sourcefile) && !fs.existsSync(destfile)) {
      fs.copyFileSync(sourcefile,destfile);
      if (fs.existsSync(destfile)) {
        console.log("File copied");
        fs.unlinkSync(sourcefile)
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
pathdest="../testcut.txt";
cutPaste(pathsrc,pathdest);


module.exports = cutPaste;
