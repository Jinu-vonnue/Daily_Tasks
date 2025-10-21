/*

1. Rearrange Numbers by Parity

Description:
Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.

Example:
Input → [3, 2, 4, 1, 5, 8]
Output → [2, 4, 8, 3, 1, 5]

*/

let arr = [3, 2, 4, 1, 5, 8];


function parity(arr){
let even = arr.filter(num => num%2 ==0);
let odd = arr.filter(num => num%2 !=0);
odd.forEach(number => {
  even.push(number);
})
return even;
}

console.log(parity(arr));