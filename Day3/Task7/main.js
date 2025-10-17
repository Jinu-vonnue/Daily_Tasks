/*

7. Write a function to convert text from camelCase to snake_case.

Test cases:
Input: 'myFunction'
Expected output: 'my_function'

*/

let text = 'myFunction';
let newText ="";

for(let i=0;i<text.length;i++){
  if(text[i].match(/[A-Z]/)){
    newText+=`_${text[i].toLowerCase()}`;
  }
  else{
    newText +=text[i];
  }
}
console.log(newText);