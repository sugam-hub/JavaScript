const form = document.querySelector(".form");
const email = document.querySelector(".email");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  let em = email.value;
  let atindex = em.indexOf("@");
  let dotindex = em.lastIndexOf(".");
  e.preventDefault();
  console.log(dotindex);
  if (atindex < 1 || dotindex >= em.length - 2 || dotindex - atindex < 3) {
    feedback.textContent = "Invalid Email";
  } else {
    feedback.textContent = "Valid Email";
  }
});
