import { showMessageError } from "./functions.js";
import { showMessageSuccess } from "./functions.js";
import { API_Base } from "./constants.js";
import { API_Auth } from "./constants.js";

const API_Register = `/register`;

const registerUrl = API_Base + API_Auth + API_Register;


document.querySelector(".signupform").addEventListener("submit", async function(event) {
    event.preventDefault(); 
  
    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email-signup").value,
        password: document.getElementById("password-signup").value,
    }
    try {
      // Send form data to the API
      const response = await fetch(registerUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
          const signupData = result.data;
          const userName = document.querySelector("#userName");
          const userMail = document.querySelector("#userMail");
         showMessageSuccess();
          userName.innerHTML = `${signupData.name}`;
          userMail.innerHTML = `${signupData.email}`;
         console.log(result.data);
        
          
      } else {
        showMessageError();
       
        console.error("Failed to register:", response.status);
      }
  } catch (error) {
    showMessageError();
    console.log("Error", error);

  }
});

const refreshBtn = document.querySelectorAll(".signupMessage button");

refreshBtn.forEach(button => {
button.addEventListener("click", function refresh() {
  location.reload()
})
})

const passwordInput = document.querySelector("#password-signup");
const showPasswordIcon = document.querySelector("#showPassword");

showPasswordIcon.addEventListener("mouseover", function showPassword() {
  passwordInput.setAttribute("type", "text");
})
showPasswordIcon.addEventListener("mouseout", function hidePassword() {
  passwordInput.setAttribute("type", "password");
})