//qn4
// Write a function  addItem(arr, item)  that returns a new array with the item added (don’t mutate the original)

let arr1 = [1, 2, 3, 4, 5];

function addItem(arr, item) {
  let arr2 = arr.slice(0);
  arr2.push(item);
  return arr2;
}

console.log(addItem(arr1, 6));
console.log(arr1);
