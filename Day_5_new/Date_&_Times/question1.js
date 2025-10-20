//qn1
//Print the current date and time in both local and UTC formats

let date = new Date();
let utc = date.toUTCString();
let local = date.toLocaleString();
console.log(date);
console.log(utc);
console.log(local);
