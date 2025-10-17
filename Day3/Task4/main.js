/*

4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

Test cases:
Input: [1, 2, 3], [4, 5, 6], 2
Expected output: [1, 2, 4, 5, 6, 3]

*/  

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let position = 2;

let newArray =[];
function update(arr1,arr2,position){
for(let i=0;i<=arr1.length;i++){
  if(i==position){
    for(let item of arr2){
      newArray.push(item);
    }
    
  }
  else if(i<position){
    newArray.push(arr1[i]);
  }
  else{
    newArray.push(arr1[i-1]);
  }
}
console.log(newArray);
}

update(arr1,arr2,position);