// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");

function cutPaste(sourcefile,destfile) {

  fs.stat(sourcefile, (err, stats) => {
    if (!err) {
      if (stats.isFile()) {
        if (fs.existsSync(sourcefile) && !fs.existsSync(destfile)) {
          fs.copyFileSync(sourcefile,destfile);
          if (fs.existsSync(destfile)) {
            fs.unlink(sourcefile,(error) => {
              if (error) {
                console.log(error);
              }
            });
          }
        }
      }
    }
  });
}

//let pathsrc="test.txt";
//let pathdest="../testcut.txt";
//cutPaste(pathsrc,pathdest);


module.exports = cutPaste;
