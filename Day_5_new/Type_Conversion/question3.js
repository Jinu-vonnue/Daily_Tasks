//qn3
//Create a function  toBoolean(input)  that returns  true  for  'yes' ,  'true' ,  '1'  and false for others

function toBoolean(input) {
  if (input === "yes" || input === "true" || input === "1") {
    return true;
  } else {
    return false;
  }
}
console.log(toBoolean("yes"));
console.log(toBoolean("true"));
console.log(toBoolean("1"));
console.log(toBoolean("no"));
