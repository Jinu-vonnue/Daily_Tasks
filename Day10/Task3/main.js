/*

Without using the built-in .map(), .filter(), or .reduce() methods, implement your own versions 
that work just like the originals. 
●  myMap(array, callback): Returns a new array with the results of calling the callback on 
every item. 
●  myFilter(array, callback): Returns a new array with only the items for which the callback 
returns true. 
●  myReduce(array, callback, initialValue): Executes the callback for each item, passing the 
"accumulator" and the current item. The initialValue is the starting value for the 
accumulator. Handle the case where initialValue is not provided (in which case, the first 
item in the array becomes the initial value).

*/

//ARRAY MAP METHOD

let fruits = ["Apple", "Mango", "Orange"];

function callback(i) {
  return i.length;
}

function myMap(arr, callback) {
  let newArr=[];
  for (let item in arr) {
    result = callback(arr[item]);
    newArr[item] = result;
  }
  return newArr;
}

console.log(myMap(fruits, callback));


//ARRAY FILTER METHOD

let num = [20, 22, 32, 36, 25, 26, 35];

function callbackFilter(i) {
  return i > 30;
}

function myFilter(arr, callback) {
  let filtered = [];
  arr.forEach((itm) => {
    if (callback(itm)) filtered.push(itm);
  });
  return filtered;
}

console.log(myFilter(num, callbackFilter));

//ARRAY REDUCE METHOD

let array = [1, 2, 3, 4, 5];
let initialValue = 0;

function callbackReduce(res, i) {
  return res + i;
}

function myReduce(arr, callback, initialValue = arr[0]) {
  let res = initialValue;
  arr.forEach((itm) => (res = callback(res, itm)));
  if (initialValue != 0) return res - arr[0];
  else return res;
}

console.log(myReduce(array, callbackReduce,initialValue));
