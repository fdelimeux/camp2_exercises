// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(first,last) {
  let tab = [];
  if (first < last) {
    const nb=last-first;
    for (let i=0;i<=nb;i++) {
      tab.push(first+i);
    }
    //console.log(tab);
  } else {
    const nb=first-last;
    for (let i=0;i<=nb;i++) {
      tab.push(first-i);
    }
  }
  return tab;

}

const ascArray = range(1, 4);
const descArray = range(4, 1);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
