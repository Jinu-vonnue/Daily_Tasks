//qn5
//Write a function  countVowels(str)  that counts vowels in a given string.

let vowels = ["a", "e", "i", "o", "u"];
let strCheck = "Hello World";

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();
  for (i of str) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(strCheck));
