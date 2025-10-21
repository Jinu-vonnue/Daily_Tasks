/*

Description:
Write a program that prints this pattern for n = 5

A
B B
C C C
D D D D
E E E E E

(You must derive characters using ASCII values, not hardcoded letters.)

*/


// String.fromCharCode(val)

let alphabet ="A";
let code=alphabet.charCodeAt(0);
let n = 5;

for(let i=1;i<=n;i++){
  let str="";
  for(let j=0;j<i;j++){
    str += String.fromCharCode(code)+" ";
    
  }
  console.log(str);
  code++;
}