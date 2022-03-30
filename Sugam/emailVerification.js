const form = document.querySelector(".form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(email)) {
    feedback.textContent = "This is valid email.";
  } else {
    feedback.textContent = "This is invalid email.";
  }
});
