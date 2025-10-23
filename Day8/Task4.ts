/*

4. Write a function formatId that takes either a number or a string and returns a string with prefix "ID-".

Test case:
formatId(123);     // "ID-123"
formatId("A7B");   // "ID-A7B"

*/

function formatId(str:string|number){
  return "ID-"+str;
}

console.log(formatId(123));
console.log(formatId("A7B"));