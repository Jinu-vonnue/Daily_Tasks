//qn1
//Copy a number and an object into new variables. Change both originals and print whether the copies changed

let num = 10;
let obj = { name: "John", age: "30" };

console.log(`Original variables and valuses :`);
console.log("num = " + num);
console.log(obj);

let newNum = num;
let newObj = obj;

console.log(`New variables before changing the values`);
console.log("Newnum = " + newNum);
console.log(newObj);

newNum = 5;
newObj.age = 20;

console.log(`Original variables after changing the values of new variables`);
console.log("num = " + num);
console.log(obj);

console.log(
  "Objects are copied by reference whereas numbers are copied by value"
);
