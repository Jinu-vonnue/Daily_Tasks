/*

12. Write a program that finds the maximum product of three numbers in a given list of integers.

Test cases:
Input: [1, 2, 3, 4]
Expected output: 24 (2 _ 3 _ 4)

Input: [-4, -3, -2, -1, 0]
Expected output: 0 (0 _ -1 _ -2)

Input: [-1, -2, -3, -4, -5]
Expected output: -6 (-2 _ -3 _ -1)

*/

let arr = [1, 2, 3, 4];

let sorted = arr.sort(function (a, b) {
  return b - a;
});
// console.log(sorted);

let res = 1;

for (let i = 0; i < 3; i++) {
  res *= sorted[i];
}

console.log(res);
