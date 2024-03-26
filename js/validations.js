
import { validateNameSignup } from "./functions.js";
import { validateMailSignup } from "./functions.js";
import { validatePasswordSignup } from "./functions.js";
import { validateMailLogin } from "./functions.js";
import { validatePasswordLogin } from "./functions.js";
import { updateButtonState } from "./functions.js";
import { updateButtonStateLogin } from "./functions.js";


const nameInputSignup = document.querySelector(" #name");
const emailInputSignup = document.querySelector(" #email-signup");
const passwordInputSignup = document.querySelector("#password-signup");
const emailInputLogin = document.querySelector("#email-login");
const passwordInputLogin = document.querySelector("#password-login");

nameInputSignup.addEventListener("input", validateNameSignup);
emailInputSignup.addEventListener("input", validateMailSignup);
passwordInputSignup.addEventListener("input", validatePasswordSignup);
emailInputLogin.addEventListener("input", validateMailLogin);
passwordInputLogin.addEventListener("input", validatePasswordLogin);
const signupForm = document.querySelector(".signupform");
const loginform = document.querySelector(".loginform");


updateButtonState();
signupForm.addEventListener("input", updateButtonState);

updateButtonStateLogin();
loginform.addEventListener("input", updateButtonStateLogin);