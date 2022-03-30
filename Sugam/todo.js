// console.log("testing");
const form = document.getElementById("form");
const field = document.getElementById("field");
const list = document.querySelector(".list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var val = field.value.trim();
  if (val.length) {
    createItem(field.value);
  }
});

function createItem(item) {
  let html = `<li class='list'>${item} <button class="delete" >Delete</button></li>`;
  list.insertAdjacentHTML("beforeend", html);
  field.value = "";
  field.focus();
}

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
