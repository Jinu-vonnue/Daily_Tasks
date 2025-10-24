/*

4. Create a Promise that resolves with the number 5. 
   Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).

*/

const promise4 = new Promise((resolve, reject) => {
  resolve(5);
});

promise4
  .then((value) => {
    // console.log(value);
    return value * 2;
  })
  .then((value) => {
    // console.log(value);
    return value + 10;
  })
  .then((value) => console.log(value));
