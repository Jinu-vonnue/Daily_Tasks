/*

10. Write a program that checks if a given string is a valid email address.

Test cases:
Input: "test@example.com"
Expected output: True

Input: "invalid.email.com"
Expected output: False

Input: "user@domain"
Expected output: False

*/

let mail = "test@example.com";
if (mail) {
  let regularExprsn = /^[a-zA-Z0-9_$.#%*+-]+@[a-zA-Z0-9_$]+\.[a-zA-Z]{2,}$/;
  let res = regularExprsn.test(mail);
  if (res) console.log("True");
  else console.log("False");
}
