/*
Given an array of words:
["care", "race", "acre", "dog", "god", "cat"]
Group words that are anagrams together.
 Output:
[
  ["care", "race", "acre"],
  ["dog", "god"],
  ["cat"]
]
*/



// let arr = ["car","rac","racc","silent","tilesn","dog","odg"];
type finalArr=string[];
let arrA:string[] = ["care", "race", "acre", "dog", "god", "cat"];
let arrNewA:string[] = [];
let finalA:finalArr[] = [];

for (let item of arrA) {
  arrNewA.push(item.split("").sort().join(""));
}
// arrNew.sort();

for (let i:number = 0; i < arrNewA.length; i++) {
  let temp:string[]=[arrA[i]];
  for(let j=i+1; j<arrNewA.length ;j++){
    if(arrNewA[i] === arrNewA[j]){
      temp.push(arrA[j]);
      i++;
    }
    else{
      break;
    }
  }
  finalA.push(temp);
}
console.log(finalA);