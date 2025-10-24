/*

1. Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message.

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded!");
  }, 2000);
});

promise1.then(
  (value) => console.log(value),
  (error) => console.log(error)
);
