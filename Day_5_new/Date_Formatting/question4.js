//qn4
// Write a function  formatTimeZone(date, zone)  that formats a date in a given time zone using  Intl.DateTimeFormat

function formatTimeZone(date, zone) {
  let formatted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: zone,
  }).format(date);
  return formatted;
}

console.log(formatTimeZone(new Date("2025-01-01"), "Asia/Kolkata"));
console.log(formatTimeZone(new Date("2025-01-01"), "America/New_York"));
