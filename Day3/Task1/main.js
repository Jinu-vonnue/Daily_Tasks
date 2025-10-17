/*

1. Write a program that should interpret each array item as a number, and return the sum.

Test cases:
Input: [[1,2,3], [0, 7]]
Expected output: 130 // 123 + 7 = 130

*/

let arr = [
  [1, 2, 3],
  [0, 7],
];


let total= 0;

function sumArray(arr) {
  let sum = "";
  for (item of arr) {
    if (typeof item == "object") {
      total += sumArray(item);
    }
    else{
      sum+=item; 
    }
   
  }
  return Number(sum);
}

sumArray(arr);
console.log(total);