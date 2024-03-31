import * as storage from "./functions.js";
import { showMessageError } from "./functions.js";
import { API_Base } from "./constants.js";
import { API_Auth } from "./constants.js";

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
      storage.save("name", resultData.name);
      const userImage = resultData.avatar;
      storage.save("userImage", userImage.url);
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