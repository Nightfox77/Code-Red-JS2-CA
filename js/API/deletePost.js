import { modal, successModalHTML, errorModalHTML } from "../Modals/constants.js";
import { boxId } from "../Profile/profile.js";
import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";

modal.addEventListener("click", async function deletePost(event) {
    if (event.target.matches("#declineBtn")) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    if (event.target.matches("#successBtn")) {
        try {
            const idUrl = API_Base + API_Social + API_Posts + "/" + boxId ;
            console.log(idUrl);
            const response = await fetch(idUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${load("token")}`,
                    "X-Noroff-API-Key": `${load("ApiKey")}`,
                }
            });
            if (response.ok) {
                modal.innerHTML = "";
                modal.innerHTML = successModalHTML;
                setTimeout(() => {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                    location.reload();
                }, 1000);
            } else {
    
                modal.innerHTML = "";
                modal.innerHTML = errorModalHTML;
                setTimeout(() => {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.error("Error occurred while deleting post:", error);
            
        }
    }
});
