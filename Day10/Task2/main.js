const scroll = document.getElementById("scroll");
const sub = document.querySelector(".sub");
const container = document.querySelector(".container");
const span = document.getElementById("span");
const scrollbar = document.getElementById("scrollbar");

// console.log(span.offsetHeight);
// let offset = span.offsetHeight;

// console.log(offset);
sub.addEventListener("scroll", function () {
  let offset = span.offsetHeight;
  // console.log(sub.scrollTop);
  heightScroll = sub.scrollTop + sub.clientHeight;

  console.log(heightScroll);
  console.log(scrollbar.offsetHeight);
  let h = (heightScroll * scrollbar.clientHeight) / offset;

  console.log(h);
  scroll.style.height = h + "px";
});
