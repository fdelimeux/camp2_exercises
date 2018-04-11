
// Create the stream using readline
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Generate random number between 1 and 100
let randomNb = Math.round(Math.random()*101);

//console.clear();
// Request a number from the user
let nbTry=0;
const firstmessage = "Give a number :";

function requestUser(message) {
  let equal=false;
  let nextmessage="";
  reader.question(message, userNb => {
    //console.log(`Mystery : ${randomNb}`);
    if ( Number(userNb) === randomNb) {
      console.log("You won!");
      reader.close();
      equal=true;
    } else if (userNb > 100 || userNb < 0) {
      nextmessage = "The number is between 1 and 100\n";
    } else if ( userNb > randomNb) {
      nextmessage = "Too high\n";
    } else if ( userNb < randomNb) {
      nextmessage = "Too low\n";
    } else {
      nextmessage="This was not a number\n";
    }

    nbTry++;
    //console.log(`Test n° ${nbTry}`);
    //if(equal===true && nbTry === 1) {
    //  console.log("Congrats !!!");
    //}
    if (equal === false) { requestUser(nextmessage);}
  });

}

requestUser(firstmessage);
