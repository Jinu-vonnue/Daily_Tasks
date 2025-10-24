/*

2. Create a Promise that rejects after 1 second with the error "Network error". 
   Handle it with .catch() to log the error message.

*/

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Network Error");
  }, 1000);
});

promise2
  .then((resvalue) => {
    console.log(resvalue);
  })
  .catch((error) => {
    console.log(error);
  });
