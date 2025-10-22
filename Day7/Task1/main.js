const box = document.querySelector(".box");

box.addEventListener("mouseover",function(event){
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  box.style.background = `rgb(${red},${green},${blue})`
})

box.addEventListener("mouseout",function(){
  box.style.background = "none";
})