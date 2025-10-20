//qn4
//Write a function  reverseWords(sentence)  that reverses the order of words

let revWord = "reverse each word in a sentence";

function reverseWords(sentence) {
  let revArr = sentence.split(" ");
  let resArr = [];
  for (i of revArr) {
    resArr.unshift(i);
  }
  return resArr.join(" ");
}

console.log(reverseWords(revWord));
