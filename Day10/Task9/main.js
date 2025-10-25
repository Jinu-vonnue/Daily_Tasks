/*

9. Write a program isValidEmail(email) that checks if a string is a valid email address without 
using regular expressions (regex).

*/

let email = "jinu@vonnue.com";

function isValidEmail(email){
let arr = email.split("@");
for(i of arr){
    if(i=="") return false;
  }
if(arr.length<2 || arr.length>2){
  return false;
}
else{
  let arr2 = arr[1].split('.');
  for(i of arr2){
    if(i=="") return false;
  }
  if(arr2.length<2 || arr2.length>2){
    return false;
  }
  if(arr2[1].length<2){
    return false;
  }
  return true;
}
}
console.log(isValidEmail(email));