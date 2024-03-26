/* hiding the placeholder element when input is clicked */
export function setupInputPlaceholders() {
    document.addEventListener("DOMContentLoaded", function() {
        const inputs = document.querySelectorAll(".form-control");

        inputs.forEach(input => {
            input.addEventListener("focus", function() {
                input.setAttribute("data-placeholder", input.getAttribute("placeholder"));
                input.setAttribute("placeholder", "");
            });

            input.addEventListener("blur", function() {
                if (input.value === "") {
                    input.setAttribute("placeholder", input.getAttribute("data-placeholder"));
                }
            });
        });
    });
}
/* handles the active class change */

   


function lengthCheck(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}
function mailValidation(mailValue) {
   
    const regEx = /\S+@\S+\.\S+/;
    const matchingPattern = regEx.test(mailValue);
    
    if (!matchingPattern) {
        return false; 
    }

   
    const validDomains = ['noroff.no', 'stud.noroff.no'];
    const domain = mailValue.split('@')[1];
    return validDomains.some(validDomain => domain.endsWith(validDomain));
}

/* validation functions for forminputs */
export function validateNameSignup(event) {
    event.preventDefault();
    const nameInput = document.querySelector("#name");
    const errorMessageName = document.querySelector(".signupform .errormessage.name");
    const successMessageName = document.querySelector(".signupform .successmessage.name");
    if (lengthCheck(nameInput.value, 4) === true) {
        errorMessageName.style.display = "none";
        successMessageName.style.display = "block";
        
    } else {
        successMessageName.style.display = "none";
        errorMessageName.style.display = "block";
        
    } 
}
export function validatePasswordSignup(event) {
    event.preventDefault();
    const passwordInput = document.querySelector("#password-signup");
    const errorMessagePassword = document.querySelector(".signupform .errormessage.password");
    const successMessagePassword = document.querySelector(".signupform .successmessage.password");

    if (lengthCheck(passwordInput.value, 7) === true) {
        errorMessagePassword.style.display = "none";
        successMessagePassword.style.display = "block";
        
    } else {
        successMessagePassword.style.display = "none";
        errorMessagePassword.style.display = "block";
       
    } 
}
export function validateMailSignup(event) {
    event.preventDefault();
    const emailInput = document.querySelector("#email-signup");
    const errorMessageMail  = document.querySelector(".signupform .errormessage.mail");
    const successMessageMail = document.querySelector(".signupform .successmessage.mail");
    if (mailValidation(emailInput.value)) {
    errorMessageMail.style.display = "none";
    successMessageMail.style.display = "block";
   
} else {
    errorMessageMail.style.display = "block";
    successMessageMail.style.display = "none";
    
}
}
export function validateMailLogin(event) {
    event.preventDefault();
    const emailInput = document.querySelector("#email-login");
    const errorMessageMail  = document.querySelector(".loginform .errormessage.mail");
    const successMessageMail = document.querySelector(".loginform .successmessage.mail");
    if (mailValidation(emailInput.value)) {
    errorMessageMail.style.display = "none";
    successMessageMail.style.display = "block";
   
} else {
    errorMessageMail.style.display = "block";
    successMessageMail.style.display = "none";
    
}
}
export function validatePasswordLogin(event) {
    event.preventDefault();
    const passwordInput = document.querySelector("#password-login");
    const errorMessagePassword = document.querySelector(".loginform .errormessage.password");
    const successMessagePassword = document.querySelector(".loginform .successmessage.password");

    if (lengthCheck(passwordInput.value, 7) === true) {
        errorMessagePassword.style.display = "none";
        successMessagePassword.style.display = "block";
        
    } else {
        successMessagePassword.style.display = "none";
        errorMessagePassword.style.display = "block";
       
    } 
}
function areAllSuccessMessagesVisibleSignup() {
    const successMessages = document.querySelectorAll(".signupform .successmessage");
    for (let i = 0; i < successMessages.length; i++) {
        if (getComputedStyle(successMessages[i]).display !== "block") {
            return false; 
        }
    }
    return true; 
}

function areAllSuccessMessagesVisibleLogin() {
    const successMessages = document.querySelectorAll(".loginform .successmessage");
    for (let i = 0; i < successMessages.length; i++) {
        if (getComputedStyle(successMessages[i]).display !== "block") {
            return false; 
        }
    }
    return true; 
}
/* Button checks- toggles buttons disabled/enabled */
export function updateButtonState() {
    const registerBtn = document.querySelector("#registerBtn");
    registerBtn.disabled = !areAllSuccessMessagesVisibleSignup();
}

export function updateButtonStateLogin() {
    const loginBtn = document.querySelector("#loginBtn");
    loginBtn.disabled = !areAllSuccessMessagesVisibleLogin();
}
export function showMessageError() {
    const signupform = document.querySelector("form");
    const signupMessage = document.querySelector(".signupMessage");
    const errortext = document.querySelector("#errortext");
    const errortextH1 = document.querySelector("#errortext h1");  


    signupform.classList.remove("d-flex");
    signupform.classList.add("d-none");
    signupMessage.classList.remove("d-none");
    signupMessage.classList.add("d-flex");
    errortext.classList.remove("d-none");
    errortext.classList.add("d-flex");
    errortextH1.innerHTML = ` A failure has accured, please try again `;

}
export function showMessageSuccess() {
    const signupform = document.querySelector(".signupform");
    const signupMessage = document.querySelector(".signupMessage");
    const successtext = document.querySelector("#successtext");
    const successtextH1 = document.querySelector("#successtext h1");  
    
    
    signupform.classList.remove("d-flex");
    signupform.classList.add("d-none");
    signupMessage.classList.remove("d-none");
    signupMessage.classList.add("d-flex");
    successtext.classList.remove("d-none");
    successtext.classList.add("d-flex");
    successtextH1.innerHTML = ` Your account was successfully registred. You can now log in`;
    
    


    
    }
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadToken(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    }
    catch {
        return null;
    }
  }

export function removeToken(key) {
    localStorage.removeItem(key)
  }
