/*

3.Write a program to convert a given matrix into its transpose.

Test cases:
Input: [ [2, 9, 0], 
         [7, 1, 5] ]
Output: [ [2, 7], 
          [9, 1],
          [0, 5] ]

*/

let arr = [
  [2, 9, 0],
  [7, 1, 5],
  [1, 2, 3],
];

let transpose = [];
for(let i=0;i<arr[0].length;i++){
  let temp=[];
  for(let j=0;j<arr.length;j++){
    temp.push(arr[j][i]);
  }
  transpose.push(temp);
}

console.log(transpose);