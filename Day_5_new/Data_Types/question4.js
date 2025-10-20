//qn4
//Write a function that returns true only if the argument is a valid number (not  NaN , Infinity , or  undefined ).

function valid(var1) {
  if (typeof var1 == "number") {
    return true;
  } else {
    return false;
  }
}

console.log(valid(5));
console.log(valid(""));
