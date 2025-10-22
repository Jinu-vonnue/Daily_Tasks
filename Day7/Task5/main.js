const box = document.querySelector(".box");

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

box.addEventListener("dblclick", function () {
  box.style.borderColor = `rgb(${red},${green},${blue})`;
});
