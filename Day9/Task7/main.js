const title = document.getElementById("title");
const body = document.getElementById("body");
const name = document.getElementById("name");
const email = document.getElementById("email");
const mainContainer = document.querySelector(".main-container");

async function fetchData() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  let response1 = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    config
  );
  const data1 = await response1.json();
  console.log(data1);

  let response2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    config
  );
  const data2 = await response2.json();
  console.log(data2);

  for (let i = 0; i < data1.length; i++) {
    let heading=`<h1>AUTHOR ${i+1} POSTS</h1><div id="box-container${i+1}" class="box-container"></div>`;
    mainContainer.insertAdjacentHTML("beforeend", heading);
    const box = document.getElementById(`box-container${i+1}`);
    for (let j = 0; j < data2.length; j++) {
      if (data1[i].id == data2[j].userId) {
        let html = `
        
        <div class="sub-container">
        <div class="post">
          <h2 id="title">${data2[j].title}</h2>
          <p id="body">
            ${data2[j].body}
          </p>
        </div>
        <div class="author">
          <h3 id="name">${data1[i].name}</h3>
          <p id="email">${data1[i].email}</p>
        </div>
      </div>`;

        box.insertAdjacentHTML("beforeend", html);
      }
    }
  }
}

fetchData();
