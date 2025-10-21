/*
7. Flatten Nested Arrays

Description:
Without using .flat(), write a recursive function to flatten an array of arbitrary depth.

Example:
Input → [1, [2, [3, [4]], 5]]
Output → [1, 2, 3, 4, 5]

*/

let arr = [1, [2, [3, [4]], 5]];
let arrNew = [];

function flatArray(arr) {
  for (item of arr) {
    if (typeof item == "object") {
      flatArray(item);
    } else {
      arrNew.push(item);
    }
  }
}

flatArray(arr);
console.log("Using recursion:");
console.log(arrNew);