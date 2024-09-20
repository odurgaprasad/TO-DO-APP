let searchBox = document.querySelector(".task-name");
let listContainer = document.getElementById("list-container");
let todoBtn = document.querySelector(".btn-name");

todoBtn.addEventListener("click", function () {
  if (searchBox.value === "") {
    alert("You Write Something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = searchBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  searchBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
