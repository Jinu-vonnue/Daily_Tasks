/*

7. Write a Function that Converts RGB to Hex Color Code.

Test cases:
Input: [255, 165, 0]
Output: "#FFA500"

*/

let arr = [255, 165, 0];
let hexValues = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};
let hexCode = "#";

for (i of arr) {
  let [res, quotient] = getData(i);
  if (res.length <= 1) {
    hexCode += quotient > 9 && quotient < 16 ? hexValues[quotient] : quotient;
  }
  res.forEach((digit) => {
    if (digit > 9 && digit < 16) {
      hexCode += hexValues[digit];
    } else {
      hexCode += digit;
    }
  });
}

function getData(i) {
  let newArr = [];
  let quotient;
  if (i == 0) {
    return [[0], 0];
  }
  while (Math.floor(i / 16) != 0) {
    quotient = Math.floor(i / 16);
    // console.log("q" + quotient);
    let remainder = i % 16;
    // console.log(remainder);
    newArr.unshift(remainder);
    i = quotient;
  }
  if (Math.floor(i / 16) == 0) {
    // console.log("q" + quotient);
    let remainder = i % 16;
    newArr.unshift(remainder);
    // i = quotient;
  }
  return [newArr, quotient];
}

console.log(hexCode);
