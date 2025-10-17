/*

2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).

Test cases:
Input: 153
Expected output: true // 153 = 1^3 + 5^3 + 3^3 =  1 + 125 + 27  = 153

*/

let num = 154;

let temp = String(num);
let result = 0;

for(i of temp){
  result+= (+i)**3;
  
}
if(result === num) console.log(true);
else console.log(false);


