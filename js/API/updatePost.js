import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";
import { modal, successModalHTML } from "../Modals/constants.js";
import { boxId } from "../Profile/profile.js";



modal.addEventListener("click", async function updatePost(event) {
    event.preventDefault();

    if (event.target.matches("#updatePostBtn")) {
        console.log("click") 
        const idUrl = API_Base + API_Social + API_Posts + "/" + boxId ; 
            console.log(idUrl)
        const formData = {
            title: document.querySelector("#title").value,
            body: document.querySelector("#body").value,
            media: {
                url: document.querySelector("#addPic").value,
            }
        };

        try {
            
            const response = await fetch (idUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${load("token")}`,
                    "X-Noroff-API-Key": `${load("ApiKey")}`,               
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error creating post:', errorMessage);
                return;
            } else {

            modal.innerHTML = successModalHTML;
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                location.reload();
            }, 1000);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }
});