const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const feedback1 = document.querySelector(".feedback1");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value;
  const phone = form.phone.value;
  const usernamePattern = /^[-a-zA-Z0-9!@#$&()`.+,/\"]*$/;
  if (usernamePattern.test(username)) {
    feedback.textContent = "This username is valid.";
  } else {
    feedback.textContent = "This username is not valid.";
  }
  console.log(usernamePattern);

  const phonePattern = /^[0-9]{10}$/;
  if (phonePattern.test(phone)) {
    feedback1.textContent = "Valid number";
  } else {
    feedback1.textContent = "InValid number";
  }
});
