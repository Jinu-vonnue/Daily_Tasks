let targetDate = new Date("2025-10-28");



setInterval(()=>{
  let today = new Date();
  let difference=targetDate-today;
  let sub = 5*60*60*1000;
  // console.log(sub);
  let seconds =(difference-sub)/1000;
  let minutes = seconds/60;
  let hours = minutes/60;
  let days = hours/24;
  console.log(`Days : ${days.toFixed(0)}\nHours : ${hours.toFixed(0)}\nMinutes : ${minutes.toFixed(0)}\nSeconds : ${seconds.toFixed(0)}`)

},1000)


