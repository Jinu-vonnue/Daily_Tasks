/*

1. Write a program which prints like a square matrix of given size. The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order.

Input: 3
Output:

1 2 3
8 9 4
7 6 5

*/

let limit = 3;
count =1;
let arr=[];
for(i=0;i<limit;i++){
  let temp=[];
  for(j=0;j<limit;j++){
    temp.push(count++);
   
  }
   temp=temp.join(" ");
  arr.push(temp);
  
}
console.log(`${arr.join("\n")}`);