//qn2
//Check  Array.isArray()  for  {} ,  [] , and a rest parameter array inside a function
function arrayCheck(obj, arr, ...rest) {
  console.log(Array.isArray(obj));
  console.log(Array.isArray(arr));
  console.log(Array.isArray(rest));
}
arrayCheck({}, [], 1, 2, 3);
