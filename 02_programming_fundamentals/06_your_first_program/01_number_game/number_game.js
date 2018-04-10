
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


function requestUser() {
  let equal=false;

  reader.question("Give a number :", userNb => {
    console.log(`Mystery : ${randomNb}`);
    if ( Number(userNb) === randomNb) {
      console.log("You won!");
      reader.close();
      equal=true;
    } else if (userNb > 100 || userNb < 0) {
      console.log("The number is between 1 and 100");
    } else if ( userNb > randomNb) {
      console.log("Too high");
    } else if ( userNb < randomNb) {
      console.log("Too low");
    } else {
      console.log("This was not a number");
    }

    nbTry++;
    console.log(`Test n° ${nbTry}`);
    if(equal===true && nbTry === 1) {
      console.log("Congrats !!!");
    }
    if (equal === false) { requestUser();}
  });

}

requestUser();
