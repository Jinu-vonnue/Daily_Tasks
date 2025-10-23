/*

2. Write a function greet that takes a required name and an optional greeting (default is "Hello").

Test case:
greet("Alice");        // Hello, Alice
greet("Bob", "Hi");    // Hi, Bob

*/
var greetName;
function greet(name, greetOp) {
    if (greetOp === void 0) { greetOp = "Hello"; }
    return greetOp + " " + name;
}
console.log(greet("Alice"));
