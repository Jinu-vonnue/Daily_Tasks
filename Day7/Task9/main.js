const addBtn = document.getElementById("add-btn");
const text = document.getElementById("text");
const ul = document.getElementById("ultag");

addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  if (text.value) {
    li.innerHTML = text.value;
    ul.appendChild(li);
    text.value="";
  }
});
