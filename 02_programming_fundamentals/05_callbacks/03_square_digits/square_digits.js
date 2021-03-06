// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  // Your code here
  //console.log(number);
  let result = "";
  const text=number.toString();
  for (let i=0;i<text.length;i++) {
    const calcul=Number(text.charAt(i)) * Number(text.charAt(i));
    result+=calcul;
  }
  result=Number(result);
  return result;
}

const squareof = squareDigits(9129);
console.log(squareof);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
