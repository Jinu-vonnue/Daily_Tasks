//qn3 
//Write a function  isValidNumber(value)  that checks if input is a finite, valid number

function isValidNumber(number){
  if(number>=-(2**53-1) && number <= (2**53-1)){
    return "Valid Number";
  }
  else{
    return "Invalid Number";
  }
}

console.log(isValidNumber(123));