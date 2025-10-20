//qn2
//Clone an object using both spread  ...  and  Object.assign()  and print whether nested properties update when the original changes.
let obj1 = { name: "John", age: "30", address: { place: "kottayam" } };

let objSpread = { ...obj1 };
console.log("Object created using spread operator");
console.log(objSpread);

let objAssign = {};
Object.assign(objAssign, obj1);
console.log("Object created using Object.assign method");
console.log(objAssign);

obj1.address = { place: "pala" };
//Original object after changing th enested object
console.log("Original object after changing the nested object");
console.log(obj1);

console.log(
  "The nested objects of objects created using spread and assign method are not changed"
);
console.log(objSpread);
console.log(objAssign);
