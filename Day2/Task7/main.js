/*

Write a program that takes a sentence as input and returns the longest word in the sentence.

Test cases:
Input: "Hello world of programming"
Expected output: "programming"

Input: "The quick brown fox jumps over the lazy dog"
Expected output: "quick"

Input: "I love coding"
Expected output: "coding"

*/

let str = "The quick brown fox jumps over the lazy dog";

let arr = str.split(" ");

let length = 0;
let res = [];

for (item of arr) {
  if (length == item.length) {
    res.push(item);
  } else if (length < item.length) {
    length = item.length;
    res = [item];
  }
}

console.log(res);
