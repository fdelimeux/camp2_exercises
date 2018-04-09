// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

let line = "";
for (let i=4;i>=0;i--){
  line="";
  for (let b=i; b<4;b++){
    line+=" ";
  }
  for (let a=0;a<=i;a++) {
    line+="*";
  }
  console.log(line);
}
