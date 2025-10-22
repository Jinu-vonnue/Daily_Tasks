const container = document.querySelector(".container");
const hide = document.querySelectorAll(".hide");

let key = "";
console.log("clicked");
window.addEventListener("keydown", function (event) {
  console.log(event);
  key += event.key;
  if (key == "ShiftA") {
    hide.forEach(list=>list.classList.add("show"))
  }
  console.log(key);
  console.log(event);
  
});
