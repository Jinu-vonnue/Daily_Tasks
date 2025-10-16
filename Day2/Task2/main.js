/*
2. Write a program that takes a sentence as input and returns the word count.

Test cases:
Input: "Hello world"
Expected output: 2

Input: "This is a sample sentence."
Expected output: 5

Input: "Programming is fun!"
Expected output: 3
*/

let str = prompt("Enter some text to find the word count");

if (str) {
  let arr = str.split(" ");
  console.log(arr.length);
}
