/*

Write a program that takes a string as input and returns the frequency of each character in the string.

Test cases:
Input: "hello"
Expected output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

Input: "programming"
Expected output: {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}

*/

let word: string = "hello";
type objType = { [key: string]: number };

let obj: objType = {};

for (let i: number = 0; i < word.length; i++) {
  if (!(word[i] in obj)) {
    obj[word[i]] = 1;
  } else obj[word[i]] += 1;
}

console.log(obj);
