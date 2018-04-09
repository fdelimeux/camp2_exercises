// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let nb=3;
for (let i=0;i<=7; i++) {
  if (i % 2) {
    let line="";
    for (let b=0; b<nb;b++) {
      line+=" ";
    }
    nb--;

    for (let a=0;a<i;a++) {
      line+="*";
    }
    console.log(line);
  }
}
