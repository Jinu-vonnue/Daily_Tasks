/*

3. Write a function which deep clones a given object.

Test cases:
Input: {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}
Expected output:  {name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}

*/

let obj1 = {
  name: "JavaScript",
  country: "US",
  dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
};
let obj2 = {};

for (i in obj1) {
  obj2[i] = obj1[i]; 
}

console.log(obj2);

if (obj1 === obj2) console.log("True");
else console.log("False");
