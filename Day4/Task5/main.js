/*

5. Write a function to convert text from camelCase to kebab-case.

Test cases:
Input: 'myFunction'
Expected output: 'my-function'

*/

let text = "myFunction";
let newText = "";

for (let i = 0; i < text.length; i++) {
  if (text[i].match(/[A-Z]/)) {
    newText += `-${text[i].toLowerCase()}`;
  } else {
    newText += text[i];
  }
}
console.log(newText);
