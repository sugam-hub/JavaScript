let counterDisplayElem = document.querySelector("#count");
let count = 0;

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.currentTarget.attributes.id.value;
    id === "btn" ? increase() : id === "btn1" ? decrease() : reset();
  });
});
