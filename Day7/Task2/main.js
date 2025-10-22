const text = document.getElementById("text");
const form = document.getElementById("form");
const paragraph=document.getElementById("paragraph");
const button = document.getElementById("btn");

// text.addEventListener("change",function(){
//   paragraph.innerHTML = text.value;
// })

text.addEventListener("keydown",function(event){
  if(event.key=="Enter")
  paragraph.innerHTML = text.value;
  
})

btn.addEventListener("click",function(){
  paragraph.classList.toggle("hide");
})