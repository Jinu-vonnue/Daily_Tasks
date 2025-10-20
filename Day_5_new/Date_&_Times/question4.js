//qn4
//Write a function  addDays(date, n)  that returns a new Date with  n  days added (don’t mutate original)
let dateAdd = new Date("2025-01-01");
let n = 3;

function addDays(dates, n) {
  let newDate = new Date(
    dates.getFullYear(),
    dates.getMonth(),
    dates.getDate() + n
  );
  return newDate;
}

console.log(addDays(dateAdd, n));
