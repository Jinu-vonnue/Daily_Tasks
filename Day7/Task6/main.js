const width = document.getElementById("width");
const height = document.getElementById("height");

let interval = setInterval(()=>{
  width.innerHTML=`Width : ${window.innerWidth}`;
  height.innerHTML=`Height : ${window.innerHeight}`
})