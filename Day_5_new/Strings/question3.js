//qn3
//Write a function  capitalize(sentence)  that capitalizes the first letter of every word
let word = "capitalize each word";
let capitalized = "";

function capitalize(word) {
  let wordArr = word.split(" ");
  for (i of wordArr) {
    capitalized += i[0].toUpperCase() + i.slice(1) + " ";
  }
  return capitalized;
}
console.log(capitalize(word));
