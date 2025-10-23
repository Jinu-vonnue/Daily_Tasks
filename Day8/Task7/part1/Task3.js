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
var arrA = ["care", "race", "acre", "dog", "god", "cat"];
var arrNewA = [];
var finalA = [];
for (var _i = 0, arrA_1 = arrA; _i < arrA_1.length; _i++) {
    var item = arrA_1[_i];
    arrNewA.push(item.split("").sort().join(""));
}
// arrNew.sort();
for (var i = 0; i < arrNewA.length; i++) {
    var temp = [arrA[i]];
    for (var j = i + 1; j < arrNewA.length; j++) {
        if (arrNewA[i] === arrNewA[j]) {
            temp.push(arrA[j]);
            i++;
        }
        else {
            break;
        }
    }
    finalA.push(temp);
}
console.log(finalA);
