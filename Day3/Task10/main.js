/*

10. Create an image gallery.
 i) User should able to upload a image from device and should be shown in UI
 ii) User should able to delete images, should also support deleting multiple images
 iii) Show message "Upload images to see" when no images are available.

*/

const file = document.getElementById("file");
const imgContainer = document.getElementById("img-container");
const heading = document.querySelector(".heading");

setInterval(function () {
  let empty = document.querySelector(".img-div");
  if (!empty) {
    heading.classList.add("active");
  } else {
    heading.classList.remove("active");
  }
}, 1000);

file.addEventListener("input", function () {
  let image = file.files[0];
  let html = `<div class="img-div">
  <img src=${URL.createObjectURL(image)}>
  <i class="fa-solid fa-xmark"></i>
  </div>`;
  imgContainer.insertAdjacentHTML("beforeend", html);
  const icons = document.querySelectorAll(".fa-solid");

  icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      icon.parentNode.remove();
      file.value = "";
    });
  });
});
