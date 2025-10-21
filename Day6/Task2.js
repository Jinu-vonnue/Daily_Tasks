/*

2. Word Frequency Counter

Description:
Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation).

Example:
Input → "Hello hello world, world!"
Output → { hello: 2, world: 2 }

*/

let result = {};
let string = "Hello hello world, world!";
let stringArr = string.split(" ");

for (let word of stringArr) {
  let str = "";

  for (let i of word) {
    if (i.match(/[a-zA-Z]/)) {
      str += i;
    }
  }
  str = str.toLowerCase();
  if (str in result) {
    result[str] += 1;
  } else if(str!=""){
    result[str] = 1;
  }
}

console.log(result);
