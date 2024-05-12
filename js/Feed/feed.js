
import {  setupInputPlaceholders } from "../functions.js";
import { modal, postformModalHTML, body } from "../Modals/constants.js";
import { showModal, hideModal } from "../Modals/functions.js";

setupInputPlaceholders();

const dummyInput = document.querySelector("#dummyinput");

dummyInput.addEventListener("click", function() {
    
        
        modal.innerHTML = postformModalHTML;
        showModal();
    
})

modal.addEventListener("click", function(event) {
        if(event.target.matches("#closePostform")) {
                hideModal();
        }
        
})



body.addEventListener("click", function(event) {
    if (event.target.matches("#filterIcon")) {
        
        const filterBar = document.querySelector("#filterbar");
        if (filterBar.style.display === "none" || filterBar.style.display === "") {
            filterBar.style.display = "flex"; // Show filter bar
        } else {
            filterBar.style.display = "none"; // Hide filter bar
        }
       
    }
    if(event.target.matches("#logout") || (event.target.closest("#logout"))) {

    
        localStorage.clear();
        }
});



