// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let i=0;
let line="";
let number=numberOfLine;
for (let a=0;a<numberOfLine;a++) {
  while (i<number) {
    line+=numberOfLine-i;
    i++;
  }
  if (a<numberOfLine-1) {
    line+="\n";
  }
  i=0;
  number-=1;

}
console.log(line);
