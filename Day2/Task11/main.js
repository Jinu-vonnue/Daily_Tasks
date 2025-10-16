/*

11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

Test cases:
Input: 16
Expected output: True

Input: 10
Expected output: False

Input: 25
Expected output: True

*/

let num = +prompt("Enter a number (perfect square)");
let flag = 0;

if (num) {
  for (let i = 1; i <= num / 2; i++) {
    if (i * i === num) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) console.log("True");
  else console.log("False");
}
