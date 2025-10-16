/*
Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

Test cases:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Expected output: 18 (3 + 6 + 9)

Input: [10, 20, 30, 40, 50]
Expected output: 30 (30) 

Input: [15, 25, 35, 45, 55]
Expected output: 60 (15 + 45)

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    sum += arr[i];
  }
}
console.log(arr);
console.log(`Sum of the numbers divisible by 3 is ${sum}`);
