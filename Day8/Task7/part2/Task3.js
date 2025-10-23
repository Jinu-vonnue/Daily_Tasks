/*
4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Test cases:
Input: "listen", "silent"
Expected output: True

Input: "restful", "fluster"
Expected output: True

Input: "hello", "world"
Expected output: False

*/
var str1 = "listen";
var str2 = "silent";
if (str1.length != str2.length)
    console.log("False");
else
    console.log(anagram());
function anagram() {
    var arr1 = str1.split("").sort();
    var arr2 = str2.split("").sort();
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}
