//qn3
//Write a function  getValue(a)  that returns  'No Value'  if  a  is  undefined ,  'Empty'
//if  a  is  null , else returns the value.

let a;
let b = 5;

function getValue(val) {
  if (val === undefined || val === null || val === "") {
    return "No Value";
  } else {
    return val;
  }
}

console.log(getValue(a));
console.log(getValue(b));
