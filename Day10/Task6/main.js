const input = document.getElementById("input");
const form = document.getElementById("form");
const table = document.getElementById("event-table");

let interval = setInterval(() => {
  if (input.value == "") {
    table.innerHTML = "";
  }
});

input.addEventListener("keypress", function (event) {
  if (input.value.length == 0) {
    const top = `<tr>
        <th>Key Name</th>
        <th>Key code</th>
        <th>Timestamp</th>
      </tr>`;
    table.insertAdjacentHTML("beforeend", top);
  }

  console.log(event.key);
  const html = `<tr class="data">
  <td>${event.key}</td>
  <td>${event.code}</td>
  <td>${event.timeStamp}</td>
  </tr>`;
  if (input.value.length < 10) {
    table.insertAdjacentHTML("beforeend", html);
  } else {
    let tr = document.querySelector(".data");
    tr.remove();
    table.insertAdjacentHTML("beforeend", html);
  }
});
