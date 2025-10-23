/*
3. Write a function that prints all given array of strings in uppercase.
*/

let upperarr :string[];
upperarr=["array","of","strings","in","uppercase"];

function upper(array:string[]){
  array =array.map((item:string)=>item.toUpperCase());
  return array;
}

console.log(upper(upperarr));