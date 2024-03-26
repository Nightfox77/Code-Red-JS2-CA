import { setupInputPlaceholders } from "./functions.js"


setupInputPlaceholders();
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const loginForm = document.querySelector(".loginform");
const signupForm = document.querySelector(".signupform");

login.addEventListener("click", function() {
    
    login.classList.add("active");
    login.classList.add("text-white");
    login.classList.remove("text-secondary");
    signup.classList.remove("active");
    signup.classList.remove("text-white");
    signup.classList.add("text-secondary");

    
    loginForm.classList.remove("d-none");
    signupForm.classList.add("d-none");
});

signup.addEventListener("click", function() {
   
    signup.classList.add("active");
    signup.classList.add("text-white");
    signup.classList.remove("text-secondary");
    login.classList.remove("active");
    login.classList.remove("text-white");
    login.classList.add("text-secondary");
   
    signupForm.classList.remove("d-none");
    loginForm.classList.add("d-none");
});