var add = document.getElementById("add");
var text = document.getElementById("text");
var listContainer = document.getElementById("list-container");
var show = document.getElementById("show");
getData();
add.addEventListener("click", function () {
    var list = document.createElement("li");
    list.innerHTML = text.value;
    console.log(list);
    listContainer.appendChild(list);
    saveData();
    text.value = "";
});
function saveData() {
    localStorage.setItem("list-data", listContainer.innerHTML);
}
function getData() {
    listContainer.innerHTML = localStorage.getItem("list-data");
}
listContainer.addEventListener("click", function (event) {
    event.target.style.textDecoration = "line-through";
    event.target.id = "hide";
    saveData();
});
show.addEventListener("click", function () {
    var hide = document.querySelectorAll("#hide");
    hide.forEach(function (itm) { return itm.remove(); });
    saveData();
});
