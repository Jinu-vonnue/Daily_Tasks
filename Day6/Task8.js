/*

8. Create a small Employee Manager CLI app using Node.js.

Accepts input from the terminal (readline or prompt-sync)

Add employee (name, age, role)

List all employees

Delete an employee by name

*/

const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let obj = [];
console.log(
  "Enter 'data' to add the data and enter 'delete' to remove the data"
);

read.on("line", (line) => {
  if (line == "data") {
    read.question("Enter your name : ", (name) => {
      let temp = {};
      temp.name = name;
      read.question("Enter your age : ", (age) => {
        temp.age = age;
        // obj.push(temp);
        // console.log(obj);
        read.question("Enter your role : ", (role) => {
          temp.role = role;
          obj.push(temp);
          console.log(obj);
        });
      });
    });
  } else if (line == "delete") {
    read.question("Enter to name to delete the data : ", (deleteName) => {
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].name == deleteName) {
          obj.splice(i, i + 1);
        }
      }
      console.log(obj);
    });
  } else {
    read.close();
  }
});
