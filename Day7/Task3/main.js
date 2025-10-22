const box = document.querySelector(".box");

box.addEventListener("dblclick", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  box.style.borderColor = `rgb(${red},${green},${blue})`;
});
