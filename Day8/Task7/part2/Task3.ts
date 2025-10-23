/*
4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Test cases:
Input: "listen", "silent"
Expected output: True

Input: "restful", "fluster"
Expected output: True

Input: "hello", "world"
Expected output: False 

*/

let str1:string ="listen" ;
let str2:string = "silent";

if (str1.length != str2.length) console.log("False");
else console.log(anagram());

function anagram() {
  let arr1:string[] = str1.split("").sort();
  let arr2:string[] = str2.split("").sort();


  for (let i:number = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}
