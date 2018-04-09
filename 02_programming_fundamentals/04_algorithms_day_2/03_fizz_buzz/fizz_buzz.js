/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list) {
  let listsize=list.length;
  let newlist=[];
  //console.log(listsize);
  for (let i=0; i<listsize; i++) {
    if ((list[i]%3 === 0) && (list[i]%5 === 0)) {
      newlist.push("FizzBuzz");
    } else if (list[i]%3 === 0) {
      newlist.push("Fizz");
    }
    else if (list[i]%5 === 0) {
      newlist.push("Buzz");
    }
    else {
      newlist.push(list[i]);
    }
  }
  return newlist;
}

const testlist= [1,2,3,4,5];
let newarray=fizzBuzz(testlist);
console.log(newarray);
module.exports = fizzBuzz;
