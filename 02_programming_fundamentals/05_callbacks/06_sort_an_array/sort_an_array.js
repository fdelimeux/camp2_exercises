// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  // Your code here
  // const tabLength = unsortedArray.Length;
  let newarray = [];
  // if (unsortedArray[0] > unsortedArray[1]) {
  //   unsortedArray[0]=unsortedArray[1];
  //   console.log(unsortedArray);
  // }
  for (let i=0;i < unsortedArray.length;i++) {
    for(let a=0;a < unsortedArray.length;a++) {
      console.log(unsortedArray[i] + " " + unsortedArray[a]);
      
    }
  }
}

sort([24, 7, 9, 72, -8]);
//=== [-8, 7, 9, 24, 72]

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
