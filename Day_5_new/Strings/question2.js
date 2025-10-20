//qn2
//Write a function  extractUsername(email)  that returns everything before  '@'

let email = "sample@gmail.com";

function extractUsername(email) {
  let userName = "";
  for (i of email) {
    if (i == "@") {
      break;
    } else {
      userName += i;
    }
  }
  return userName;
}

console.log(extractUsername(email));
