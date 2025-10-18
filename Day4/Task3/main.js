/*

3. Invert Keys and Values in an Object

Test cases:
Input: { a: 1, b: 2 }
Output: { 1: "a", 2: "b" }

*/

let obj1 = { a: 1, b: 2 };

function keyChange(obj) {
  let objNew = {};
  for (i in obj1) {
    objNew[obj1[i]] = i;
  }
  return objNew;
}

console.log(keyChange(obj1));
