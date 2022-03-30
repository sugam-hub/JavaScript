const display = document.querySelector(".display");
const btn = document.querySelectorAll("#btn");

function add() {}

function sub() {}

function mul() {}

function div() {}

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    let data = e.target.innerText;
    console.log(data);
  });
});
