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

let str:string ="This is a sample sentence.";

if (str) {
  let arr:string[] = str.split(" ");
  console.log(arr.length);
}
