/*
1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

Test cases:
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]
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


//using flat method
console.log("Using flat method:");
console.log(arr.flat(Infinity));