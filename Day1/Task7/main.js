const title = document.getElementById("title");
const body = document.getElementById("body");
const name = document.getElementById("name");
const email = document.getElementById("email");




async function fetchData(){
  const config = {
    headers:{
      'Accept':'application/json'
    }
  }

  let response = await fetch('https://jsonplaceholder.typicode.com/users',config);
  const data = await response.json();
  console.log(data);
}

fetchData();

