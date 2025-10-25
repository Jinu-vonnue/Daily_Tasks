/*

4. Given an array of strings, words, write a function groupAnagrams(words) that groups words 
that are anagrams of each other. Return the group sorted by size, from largest group to 
smallest
Test cases: 
Input: ["eat", "tea", "tan", "ate", "nat", "bat"] 
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] 

*/

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"] ;
let arrNew = [];
let final = [];

for (let item of arr) {
  arrNew.push(item.split("").sort().join(""));
}
// console.log(arrNew);

let arrSingle = [];

for (str of arrNew) {
  if (!arrSingle.includes(str)) {
    arrSingle.push(str);
  }
}
// console.log(arrSingle);

for (let i = 0; i < arrSingle.length; i++) {
  let temp = [];
  let val = arrSingle[i];
  for (let j = 0; j < arrNew.length; j++) {
    if (val == arrNew[j]) {
      temp.push(arr[j]);
    }
  }
  final.push(temp);
}



for(let i=0;i<final.length;i++){
  for(let j=i+1;j<final.length;j++){
    if(final[i].length<final[j].length){
      [final[i],final[j]]=[final[j],final[i]];
    }
  }
}
console.log(final);