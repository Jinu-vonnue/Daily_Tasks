/*

Write a program that takes a string as input and returns the frequency of each character in the string.

Test cases:
Input: "hello"
Expected output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

Input: "programming"
Expected output: {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}

*/

let str = prompt("Enter a string");

let obj = {};

for (let i = 0; i < str.length; i++) {
  if (!(str[i] in obj)) {
    obj[str[i]] = 1;
  } else obj[str[i]] += 1;
}

console.log(obj);
