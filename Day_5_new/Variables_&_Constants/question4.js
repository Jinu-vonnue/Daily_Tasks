//qn4
// Use a loop with  var  and  let  inside a block and print their scope difference

try {
  for (let i = 0; i < 5; i++) {
    if (true) {
      var strVar = "Hello";
      let strLet = "Hai";
    }

    console.log(strVar);
    console.log(strLet);
  }
} catch (error) {
  console.log(
    "The variable declared using let cannot be accessed outside its block scope"
  );
  console.log(
    "The variable declared using var can be accessed outside the block"
  );
}
