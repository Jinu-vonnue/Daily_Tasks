//qn2
//Create a  Date  for  '2025-01-01T00:00:00Z'  and print both ISO and locale strings

let date1 = new Date("2025-01-01T00:00:00Z");
console.log(date1);
let isodate = date1.toISOString();
console.log(isodate);
let localDate1 = date1.toLocaleString();
console.log(localDate1);
