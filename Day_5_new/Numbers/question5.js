//qn5
//Write a function sumOfDigits(n) that returns the sum of digits of a given number.

let num = 568;

function sumOfDigits() {
  let sum = 0;
  num = String(num);
  for (i of num) {
    sum += +i;
  }
  return sum;
}

console.log(sumOfDigits(num));
