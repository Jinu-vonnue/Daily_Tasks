/*

5. Custom Filter Function

Description:
Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
Then test it with a condition like "keep only numbers > 10".

*/

let num = [10, 12, 2, 8, 20, 25, 5];

function callbackFilter(i) {
  return i > 10;
}

function myFilter(arr, callback) {
  let filtered = [];
  arr.forEach((itm) => {
    if (callback(itm)) filtered.push(itm);
  });
  return filtered;
}

console.log(myFilter(num, callbackFilter));