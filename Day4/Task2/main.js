/*
2. Get All Permutations of a String. A permutation of a string is a rearrangement of its characters in all possible ways, where every character is used exactly once in each arrangement.

Test cases:
Input: "abc"
Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
*/

let string = "abc";
// let arr=string.split('');
let fact = 1;
let res = [];

for (i = 1; i <= string.length; i++) {
  fact = fact * i;
}

while (res.length < fact) {
  let str = "";
  let randArray = [];
  for (i = 0; i < string.length; i++) {
    let random = Math.floor(Math.random() * string.length);
    while (randArray.includes(random)) {
      random = Math.floor(Math.random() * string.length);
    }
    randArray.push(random);
    str += string[random];
  }
  if (!res.includes(str)) res.push(str);
}

console.log(res);
