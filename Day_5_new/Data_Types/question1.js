//qn1
//Create an array with values of every JS type. Print the result of  typeof  for each

let arr = ["Hello", 5, true, { name: "John" }];
arr.forEach((item) => {
  console.log(`item : ${typeof item}`);
});
