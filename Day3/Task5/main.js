/*

5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).

Test cases:
Input: 1, 2, 3, 4
Expected output: 10

Input: 1, 2 
Expected output: 3

*/

function sumOfArguments(...arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}
 

let result = sumOfArguments(1,2,3,4);
console.log("Sum is "+result);