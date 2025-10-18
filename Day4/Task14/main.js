let ones = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

let tens = {
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
};
let hunds = {
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
};

let thousand = {
  1000: "M",
  2000: "MM",
};

let num = 2000;
let strNum = String(num);
let result = "";

function one(num) {
  return ones[num];
}

function two(num, strNum) {
  if (num % 10 == 0) {
    return tens[strNum];
  } else {
    return tens[Number(strNum[0]) * 10] + one(Number(strNum[1]));
  }
}

function three(num, strNum) {
  if (num % 100 == 0) {
    return hunds[strNum];
  } else if (strNum[1] == 0) {
    return hunds[Number(strNum[0]) * 100] + one(num % 100);
  } else {
    let newNum = Number(strNum.slice(1));
    let newStr = String(newNum);
    return hunds[Number(strNum[0]) * 100] + two(newNum, newStr);
  }
}

function four(num, strNum) {
  if (num % 1000 == 0) {
    return thousand[strNum];
  } else {
    let newNum = Number(strNum.slice(1));
    let newStr = String(newNum);
    if (newStr.length == 1) {
      return thousand[Number(strNum[0]) * 1000] + one(newNum, newStr);
    } else if (newStr.length == 2) {
      return thousand[Number(strNum[0]) * 1000] + two(newNum, newStr);
    } else {
      return thousand[Number(strNum[0]) * 1000] + three(newNum, newStr);
    }
  }
}

if (strNum.length == 1) {
  result = one(num);
} else if (strNum.length == 2) {
  result = two(num, strNum);
} else if (strNum.length == 3) {
  result = three(num, strNum);
} else if (strNum.length == 4) {
  result = four(num, strNum);
}

console.log(result);
