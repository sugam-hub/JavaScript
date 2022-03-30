const result1 = document.querySelector("h1");
const result2 = document.querySelector("h2");
const result3 = document.querySelector("h3");
const result4 = document.querySelector("h4");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let text1 = document.querySelector('input[type="text"]');
  result1.innerText = text1.value;
});

btn.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll("#lang");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      result2.innerText += " " + checkbox.value;
    }
  });
});

btn.addEventListener("click", () => {
  let radio = document.querySelectorAll("#gender");
  radio.forEach((radbtn) => {
    if (radbtn.checked) {
      result3.innerText += " " + radbtn.value;
    }
  });
});
btn.addEventListener("click", () => {
  let select = document.getElementById("country").selectedIndex;
  //   var option = document.select.option;
  result4.innerText = document.getElementsByTagName("option")[select].value;
});
