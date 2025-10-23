/*

2. Write a function greet that takes a required name and an optional greeting (default is "Hello").

Test case:
greet("Alice");        // Hello, Alice
greet("Bob", "Hi");    // Hi, Bob

*/

let greetName:string;

function greet(name:string,greetOp :string= "Hello"){
  return greetOp+" "+name;
}

console.log(greet("Alice"));