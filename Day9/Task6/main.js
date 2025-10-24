/*

6. Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await.

*/

async function promise() {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Login Successfull");
    }, 3000);
  });
  let result = await promise3;
  console.log(result);
}

promise();
