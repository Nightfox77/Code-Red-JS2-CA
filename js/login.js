import * as storage from "../js/functions.js";
import { showMessageError } from "../js/functions.js";
const API_Base = `https://v2.api.noroff.dev`;
const API_Auth = `/auth`;
const API_Login = `/login`;

const loginUrl = API_Base + API_Auth + API_Login;
document.querySelector(".loginform").addEventListener("submit", async function(event) {
  event.preventDefault(); 

  // Get form data
  const formData = {
      email: document.getElementById("email-login").value,
      password: document.getElementById("password-login").value,
  }

  // Send form data to the API
  const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  });

  // Parse response JSON
  const result = await response.json();

  // Check if login was successful
  if (response.ok) {
      const resultData = result.data;

      // Save data to localStorage
      storage.save("token", resultData.accessToken);
      storage.save("email", resultData.email);
    console.log(resultData)
      // Redirect to feed page
    window.location.href = "../feed/index.html";
  } else {
      // Handle login error
      showMessageError(".loginform", ".loginMessage", "Login failed. Please try again.");
  }
});




const passwordInput = document.querySelector("#password-login");
const showPasswordIcon = document.querySelector("#showPassword");

showPasswordIcon.addEventListener("mouseover", function showPassword() {
  passwordInput.setAttribute("type", "text");
})
showPasswordIcon.addEventListener("mouseout", function hidePassword() {
  passwordInput.setAttribute("type", "password");
}) 