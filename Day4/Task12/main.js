/*
2. Write a program which takes the input as an array of dates in a year and gives the week number and how many birthdays are there in that week.

Test cases:
Input: [new Date(2025, 0, 4), new Date(2025, 2, 8), new Date(2025, 5, 23)]

Expected output: [ {weekNumber: 1, birthdays: 1}, {weekNumber: 10, birthdays: 1}, {weekNumber: 26, birthdays: 1} ]
*/

let day = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
let arr = [new Date(2025, 0, 4), new Date(2025, 2, 8), new Date(2025, 5, 23)];
let month = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

let count = new Date(2025, 0, 1).getDay();
// console.log(count);
let result =[];

for (i in arr) {
  let flag=0;
  let total_day=0;
  let start = arr[i];
  // console.log(start);
  for(i=0;i<start.getMonth();i++){
    total_day += month[i];
  }
  total_day = total_day+start.getDate()+count;
  // console.log(total_day);
  let week = Math.ceil(total_day/7);
  // console.log(week);
  for(let i of result){
    if(i["weeknumber"]==week){
      i["birthday"]+=1;
    }
  }
  let obj ={"weeknumber" : week,"birthday":1};
  result.push(obj);
}

console.log(result);