/*

1. Write a program that should interpret each array item as a number, and return the sum.

Test cases:
Input: [[1,2,3], [0, 7]]
Expected output: 130 // 123 + 7 = 130

*/
type arrType=number[];

let sumarr:arrType[] = [
  [1, 2, 3],
  [0, 7],
];


let total:number= 0;

function sumArray(arr:arrType[]|number[]) {
  let sum = "";
  for (let item of arr) {
    if (typeof item == "object") {
      total += sumArray(item);
    }
    else{
      sum+=item; 
    }
   
  }
  return Number(arr);
}

sumArray(sumarr);
console.log(total);