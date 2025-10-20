//qn1
//Given  ' Hello, World! ' , remove whitespace, convert to lowercase, and remove punctuation.

let str1 = " Hello, World! ";
let finalStr = "";

for (i of str1) {
  if (i.match(/[a-zA-Z]/)) {
    finalStr += i;
  }
}
finalStr = finalStr.toLowerCase();
console.log(finalStr);
