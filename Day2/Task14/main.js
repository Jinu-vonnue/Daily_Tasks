/*

14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

Test cases:
Input: "A man, a plan, a canal, Panama!"
Expected output: True

Input: "Racecar"
Expected output: True

Input: "Hello, world!"
Expected output: False

*/

let str = prompt("Enter a string (palindrome)");
let original = "";
let flag = 0;

if (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]+/)) {
      original += str[i].toLowerCase();
    }
  }
  let length = original.length;
  // console.log(length);

  for (let i = 0; i < length / 2; i++) {
    if (original[i] != original[length - i - 1]) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) console.log("True");
  else console.log("False");
}
