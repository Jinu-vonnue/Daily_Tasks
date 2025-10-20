//qn2
//Use  Intl.DateTimeFormat  to display the weekday, date, and time for  'Asia/Kolkata' and  'America/New_York'

let date = new Date();
let formatted1 = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Asia/Kolkata",
}).format(date);
console.log(formatted1);

let formatted2 = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "America/New_York",
}).format(date);
console.log(formatted2);
