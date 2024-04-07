import { modal } from "../Modals/constants.js";
import { body } from "../Modals/constants.js";




body.addEventListener("click", function deletePost(event) {
    if(event.target.matches("button#declineBtn")) {
        console.log("click")
        modal.style.display = "none";
    }
    if(event.target.matches("button#successBtn")) {
        
    }
})
