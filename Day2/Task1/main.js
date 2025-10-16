/*
1. Write a program that checks if a given number is prime.

Test cases:
Input: 7
Expected output: True

Input: 10
Expected output: False

Input: 29
Expected output: True
*/

let num=prompt("Enter a number :");
let flag=0;

if(num<=1){
  console.log("False");
} 
else{
  for(let i=2;i<=num/2;i++){
    if(num%i == 0){
      flag=1;
      break;
    }
  }
  if(flag == 0){
    console.log("True");
  }
  else{
    console.log("False");
  }
}