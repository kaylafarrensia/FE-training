import { users } from "./main.js";

const registerForm = document.querySelector(".regisForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve Input
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const retype = document.querySelector("#retype").value.trim();
  const terms = document.querySelector("#termsnconditions");

  // Validate Input
  if (!name || !email || !password || !retype || !terms.checked) return; // not empty
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) return; // correct password format
  if (password !== retype) return; // password and retype password are the same

  // Check if email already registered
  if (users.find((u) => u.email === email)) return;

  // Push data to array
  users.push({ email, password });

  // Back to login page
  window.location.href = "login.html";
});

// import { users } from "./main.js";

// const registerForm = document.querySelector("#registerForm");

// function errorMessage(isValid, ID, errorMsg) {
//   let input = document.querySelector("#" + ID);
//   let errorSpan = document.querySelector("#" + ID + "Error");

//   if (isValid) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//     errorSpan.text("");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//     errorSpan.text(errorMsg);
//   }
// }

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.querySelector("#name").value.trim();
//   const email = document.querySelector("#email").value.trim();
//   const password = document.querySelector("#password").value.trim();
//   const retype = document.querySelector("#retype").value.trim();
//   const terms = document.querySelector("#termsnconditions");

//   let valid = true;

//   if (!name) {
//     errorMessage(false, "name", "Field cannot be empty.");
//     valid = false;
//   } else {
//     errorMessage(true, "name", "");
//   }

//   if (!email.includes("@")) {
//     errorMessage(false, "email", "Invalid email format.");
//     valid = false;
//   } else {
//     errorMessage(true, "email", "");
//   }

//   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
//   if (!passwordRegex.test(password)) {
//     errorMessage(
//       false,
//       "password",
//       "Password needs to have a minimal of 8 characters, 1 uppercase and 1 symbol.",
//     );
//     valid = false;
//   } else {
//     errorMessage(true, "password", "");
//   }

//   if (password !== retype) {
//     errorMessage(false, "retype", "Passwords do not match.");
//     valid = false;
//   } else {
//     errorMessage(true, "retype", "");
//   }

//   if (!terms.checked) {
//     errorMessage(false, "termsnconditions", "You must agree to the terms.");
//     valid = false;
//   } else {
//     errorMessage(true, "termsnconditions", "");
//   }

//   if (!valid) return;

//   if (users.find((u) => u.email === email)) {
//     errorMessage(false, "email", "Email already registered!");
//     return;
//   }

//   users.push({ email, password });
//   localStorage.setItem("users", JSON.stringify(users));

//   window.location.href = "login.html";
// });
