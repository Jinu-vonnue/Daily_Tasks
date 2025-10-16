/*

8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

Test cases:
Input: [1, 2, 3, 5, 6]
Expected output: 4

Input: [10, 11, 13, 14, 15]
Expected output: 12

Input: [2, 3, 4, 5, 6]
Expected output: none

*/

let arr = [1, 2, 3, 5, 6];

let missingNum = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === missingNum) {
    missingNum++;
  } else {
    console.log("Missing number is " + missingNum);
    break;
  }
}
