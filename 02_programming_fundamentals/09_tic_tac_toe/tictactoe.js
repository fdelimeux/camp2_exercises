
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const theGrid = {
  a : Array(3).fill(null),
  b : Array(3).fill(null),
  c : Array(3).fill(null)
};

let currentPlayer;
let counter=1;

function renderCells(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
};

function renderRow(letter){
  let row=theGrid[letter];
  return `${letter} ${row.map(renderCells).join(" | ")}`;
};

function renderGrid() {
  let firstline="  1   2   3";
  let grid=Object.keys(theGrid);
  console.log(`${firstline} \n${grid.map(renderRow).join("\n")}`);
}

function whoStart() {
  currentPlayer = ["X","O"][Math.round(Math.random())];
  //console.log(currentPlayer);
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

}

function checkIfWin() {
  if (theGrid["a"][0]!==null && theGrid["a"][0]===theGrid["a"][1] && theGrid["a"][0] === theGrid["a"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["a"][0]!==null && theGrid["a"][0]===theGrid["b"][1] && theGrid["a"][0] === theGrid["c"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["a"][0]!==null && theGrid["a"][0]===theGrid["b"][0] && theGrid["a"][0] === theGrid["c"][0]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["a"][1]!==null && theGrid["a"][1]===theGrid["b"][1] && theGrid["a"][1] === theGrid["c"][1]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["a"][2]!==null && theGrid["a"][2]===theGrid["b"][2] && theGrid["a"][2] === theGrid["c"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["b"][0]!==null && theGrid["b"][0]===theGrid["b"][1] && theGrid["b"][0] === theGrid["b"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["c"][0]!==null && theGrid["c"][0]===theGrid["c"][1] && theGrid["c"][0] === theGrid["c"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }
  if (theGrid["c"][0]!==null && theGrid["c"][0]===theGrid["b"][1] && theGrid["c"][0] === theGrid["a"][2]) {
    quitApp("*** VICTORY ***",`Player ${currentPlayer} WIN`);
    return
  }

  nextPlayer();
  counter += 1;
  newTurn();
}

function answer(choice) {
  if (choice == "quit") {
    quitApp("*** CANCELED ***","Thanks for playing");
    return
  } else {
    let line = choice[0];
    let column = choice[1] - 1;
    if (theGrid[line] && theGrid[line][column] === null) {
      theGrid[line][column] = currentPlayer;
      checkIfWin();

    }
    else {
      console.log(`"${choice}" is not a valid value, please retry`);
      newTurn();
    }


  }
}

function newTurn() {
  if (counter === 10) {
    quitApp("*** FINISHED ***","GAME IS OVER !!");
    return
  }
  console.log(`*** Round ${counter} ***`)
  renderGrid();
  reader.question(`Player ${currentPlayer} choice : `, answer);
}

function start() {
  whoStart();
  newTurn();
}

function quitApp(header,message) {
  console.log(header);
  renderGrid();
  console.log(message);
  reader.close();
}

start();






//
// const readline = require("readline");
//
// function createStream () {
//   // Create the stream using readline
//
//   const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   return reader;
// }
//
// let player1 = {
//   name : "Rémi"
// };
//
//
//
// function requestUsername(player) {
//   const reader=createStream();
//   reader.question('User 1 name : ', (user) => {
//     player.name = user;
//     reader.close();
//     console.log(player1);
//   });
// }
//
// requestUsername();



// let grid1 = ['_','_','_'];
// let grid2 = ['_','_','T'];
// let grid3 = ['_','_','_'];
// let gridfulltab = [grid1,grid2,grid3];
//
//
//
// let player2 = {
//   name : "Fred"
// };
//
//
//
// function whoStart() {
//   let randomNb = Math.round(Math.random()*100);
//   if (randomNb % 2) {
//     return player1;
//   } else {
//     return player2;
//   }
// }
//
// function nextPlayer(player) {
//   if (player === player1) {
//     return player2;
//   }
//   else {
//     return player1;
//   }
// }
//
// console.log(gridfulltab);
//
// console.log(gridfulltab[1][2]);
//
// currentPlayer = whoStart();
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
// console.log(currentPlayer);
// currentPlayer = nextPlayer(currentPlayer);
//
//
// // console.log("_|_|_");
// // console.log("_|_|_");
// // console.log("_|_|_");
