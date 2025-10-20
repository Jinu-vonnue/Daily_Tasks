//qn4
//Generate a random number between 50 and 100

function random() {
  let randomNum = Math.floor(Math.random() * (50 + 1) + 50);
  return randomNum;
}

console.log(random());
