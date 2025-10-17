/*

9. Write a function to remove duplicate characters from the given string.

Test cases:
Input: 'apple'
Expected output: 'aple'

*/
 
let text = "apple";
let textNew="";
let obj = {};

for (i of text) {
  if (!(i in obj)) {
    obj[i] = 1;
    textNew+=i;
  } 
}
console.log(textNew);