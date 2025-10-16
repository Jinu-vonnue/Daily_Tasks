/*
3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

Test cases:
Input: [1, 2, 3, 4, 5, 6]
Expected output: [2, 4, 6]

Input: [7, 8, 9, 10, 11, 12]
Expected output: [8, 10, 12]

Input: [2, 4, 6, 8, 10]
Expected output: [2, 4, 6, 8, 10]
*/

let arr = [1, 2, 3, 4, 5, 6];
let arrNew = [];

for (num of arr) {
  if (num % 2 === 0) {
    arrNew.push(num);
  }
}
console.log(arrNew);

//Method 2 using filter

let arr2 = [7, 8, 9, 10, 11, 12];

console.log(arr2.filter((itm) => itm % 2 === 0));
