const container = document.querySelector(".container");



window.addEventListener("keydown", function (event) {
  const hide = document.querySelectorAll(".hide");
  console.log(event);
  let key=event.key;
  if (key == "A") {
    hide.forEach(list=>list.classList.toggle("active"));
    
  }
  
});
