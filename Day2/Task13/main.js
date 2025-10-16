/*

13. Write a program that takes a list of strings as input and returns the longest word among them.

Test cases:
Input: ["cat", "dog", "elephant", "tiger"]
Expected output: "elephant"

Input: ["apple", "banana", "orange"]
Expected output: "banana"

Input: ["programming", "is", "fun"]
Expected output: "programming"

*/

let arr = ["cat", "dog", "elephant", "tiger"];

let maxLength = 0;
let maxItem = "";

for (item of arr) {
  if (maxLength < item.length) {
    maxLength = item.length;
    maxItem = item;
  }
}
console.log(maxItem);
