//qn5
//Write a function  countdown(targetDate)  that logs remaining days, hours, minutes, and seconds every second (use  setInterval )

let dateToday = new Date();
let count = 1;
let targetDate = new Date("2025-10-22");
function countdown(targetDate) {
  let rem_date = targetDate - dateToday - count * 1000;
  let rem_days = (rem_date / 1000 / 60 / 60 / 24).toFixed(0);
  let rem_hours = (rem_date / 1000 / 60 / 60).toFixed(0);
  let rem_min = (rem_date / 1000 / 60).toFixed(0);
  let rem_sec = (rem_date / 1000).toFixed(0);
  count++;
  // console.log(rem_days,rem_hours,rem_min,rem_sec)
  console.log(
    `Remaining Days : ${rem_days}\nRemaining Hours : ${rem_hours}\nRemaining Minutes : ${rem_min}\nRemaining Seconds : ${rem_sec}`
  );
}

let interval = setInterval(() => {
  countdown(targetDate);
}, 1000);
