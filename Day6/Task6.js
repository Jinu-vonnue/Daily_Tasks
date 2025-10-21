/*

6. Password Strength Checker

Description:
Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:

Weak → less than 6 characters

Medium → at least 6 chars, includes either number or special character

Strong → at least 8 chars, includes upper, lower, number, and special character

*/

function passwordChecker(password) {
  let length = password.length;
  if (
    length >= 8 &&
    password.match(/[A-Z]/) &&
    password.match(/[a-z]/) &&
    password.match(/[0-9]/) &&
    password.match(/[!@#$%^&*()_-]/)
  ) {
    return "strong";
  } else if (length >= 6 && password.match(/[0-9!@#$%^&*()_-]/)) {
    return "medium";
  } else {                  //if length is greater than 6 but it doesnt contains any numbers or special characters are also treated as weak
    return "weak";          //the strings with length less than 4 and the strings which doesnt contains any special characters or numbers are also weak
  }
}

console.log(passwordChecker("Jinu@123treesa"));
