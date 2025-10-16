/*

15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

Test cases:
Input: "Hello world"
Expected output: "olleH dlrow"

Input: "Programmers are awesome"
Expected output: "sremmargorP era emosewa"

Input: "Programming is fun"
Expected output: "gnimmargorP si nuf"

*/

let str = prompt("Enter a string (reverse words in a string)");
let arrNew = [];

let arr = str.split(" ");

for (itm of arr) {
  let temp = "";
  for (let i = itm.length - 1; i >= 0; i--) {
    temp += itm[i];
  }
  arrNew.push(temp);
}

console.log(arrNew.join(" "));
