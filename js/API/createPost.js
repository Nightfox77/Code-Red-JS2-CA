import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";
import { modal, successModalHTML } from "../Modals/constants.js";



modal.addEventListener("click", async function createPost(event) {
    event.preventDefault();

    if (event.target.matches("#submitPostBtn")) { 
        const formData = {
            title: document.querySelector("#title").value,
            body: document.querySelector("#body").value,
            media: {
                url: document.querySelector("#addPic").value,
            }
        };

        try {
            const response = await fetch(API_Base + API_Social + API_Posts, {
                method: "POST",
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
