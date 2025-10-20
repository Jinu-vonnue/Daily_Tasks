//qn3
//Format current date using  { dateStyle: 'long', timeStyle: 'short' }

let today = new Date();
let todayFormatted = new Intl.DateTimeFormat("en-US", {
  dateStyle: 'long',
  timeStyle: 'short',
}).format(today);
console.log(todayFormatted);

