/*

8. Write a function which returns textual representation of a number.

Test cases:
Input: 723
Expected output: 'Seven hundred and twenty three'

*/

let ones = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven", 
  "eight",
  "nine",
];
let middle = [
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
let tens = [
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let hunds = "hundred";
let and = "and";

let num =173;
let numCopy = String(num);

let length = numCopy.length;

if (length == 1) {
  if (Number(numCopy == 0)) console.log("Zero");
  else {
    let temp = "";
    for (i of numCopy) {
      temp += `${ones[Number(i) - 1]} `;
    }
    console.log(temp);
  }
} else if (length == 2) {
  if (Number(numCopy[1]) == 0) {
    console.log(`${tens[Number(numCopy[0]) - 1]}`);
  } else if (num > 10 && num < 20) {
    console.log(`${middle[Number(numCopy[1]) - 1]}`);
  } else {
    console.log(
      `${tens[Number(numCopy[0]) - 1]} ${ones[Number(numCopy[1]) - 1]}`
    );
  }
} else if (length == 3) {
  if (num % 100 == 0) {
    console.log(`${ones[Number(numCopy[0]) - 1]} hundred`);
  } else if (num % 10 == 0) {
    console.log(`${ones[Number(numCopy[0]) - 1]} hundred and ${tens[Number(numCopy[1]) - 1]}`);
  }
  else if(Number(numCopy.slice(1))>10 && Number(numCopy.slice(1))<20){
    console.log(`${ones[Number(numCopy[0]) - 1]} hundred and ${middle[Number(numCopy[2]) - 1]}`);
  }
  else{
    console.log(`${ones[Number(numCopy[0]) - 1]} hundred and ${tens[Number(numCopy[1]) - 1]} ${ones[Number(numCopy[2]) - 1]}`);
  }
}
else if(num===1000){
  console.log("Thousand");
}
