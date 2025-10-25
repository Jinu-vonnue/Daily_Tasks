/*

10. Write a program longestCommonPrefix(strings) that takes a list of strings and returns the 
longest common prefix among them. Your function must be case-sensitive. 
Test cases: 
Input: ["flower", "flow", "flight"] 
Output: "fl" 
Input: ["dog", "racecar", "car"] 
Output: "" (an empty string, as there is no common prefix) 

*/
let arr = ["flower", "flow", "flight"];
let min = arr[0].length;
let prefix = "";
let flag = 0;

for (let item of arr) {
  if (item.length < min) min = item.length;
}

let item = arr[0];

for (let i = 0; i < min; i++) {
  for (let word = 1; word < arr.length; word++) {
    if (item[i] != arr[word][i]) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) break;
  else prefix += item[i];
}

console.log(prefix);
