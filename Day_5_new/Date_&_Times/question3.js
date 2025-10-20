//qn3
// Write a function days Between(date1, date2)  that returns the number of days between two dates

let dateOne = new Date("2025-01-01");
let dateTwo = new Date("2025-01-04");

// console.log(((((dateTwo-dateOne)/1000)/60)/60)/24);

function daysBetween(date1, date2) {
  let difference = date1 - date2;
  if (difference < 0) {
    difference = difference * -1;
  }
  difference = difference / 1000 / 60 / 60 / 24;
  return difference;
}

console.log(daysBetween(dateOne, dateTwo));
