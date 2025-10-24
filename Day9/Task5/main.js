/*

5. Create three function which returns a Promise. All functions need to be called in parallel.

*/

function f1() {
  const promisef1 = new Promise((resolve, reject) => {
    resolve("Promise from function 1");
  });
  return promisef1;
}

function f2() {
  const promisef2 = new Promise((resolve, reject) => {
    resolve("Promise from function 2");
  });
  return promisef2;
}

function f3() {
  const promisef3 = new Promise((resolve, reject) => {
    resolve("Promise from function 3");
  });
  return promisef3;
}



Promise.all([f1(),f2(),f3()]).then((value)=>{
  value.forEach(val=>{
    console.log(val);
  })
})
