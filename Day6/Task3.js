/*

3. Find the Missing Number

Description:
Given an array containing numbers from 1 to n with one missing, find the missing number.
You cannot use .includes() or .indexOf() directly.

Example:
Input → [1, 2, 3, 5, 6]
Output → 4

*/

let arr = [1, 2, 3, 5, 6];
let count = 1;

for(i=0;i<arr.length;i++){
  if (arr[i] != count){
    console.log("Missing number is "+count);
    break;
  }
   count++; 
}