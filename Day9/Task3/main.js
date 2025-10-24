/*

3. Create a Promise that resolves after 2 seconds with "Success". 
   Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).

*/

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Success");
  },2000);
})

promise3.then(resVal=>{
  console.log(resVal);
})
.catch(error=>{
  console.log(error);
})
.finally(()=>console.log("Promise completed"));