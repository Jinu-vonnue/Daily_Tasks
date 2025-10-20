//qn3
// Deep clone  { user: { name: 'John', age: 25 } }  using JSON.parse(JSON.stringify())  and verify independence

let objDeep = { user: { name: "John", age: 25 } };
let deepClone = JSON.parse(JSON.stringify(objDeep));
console.log(deepClone);

if (objDeep === deepClone) {
  console.log(
    "Original object and deep cloned object are same (reference is same)"
  );
} else {
  console.log(
    "Original object and deep cloned object are different (reference is not same)"
  );
}
