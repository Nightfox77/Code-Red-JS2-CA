import { API_Base } from "../constants.js";
import { API_Social } from "../constants.js";
import { API_Posts } from "../constants.js";
import { load } from "../functions.js";



document.querySelector("#feedStarter").addEventListener("submit", async function createPost(event) {
    event.preventDefault(); 
    const formData = {
        title: document.querySelector("#title").value,
        body: document.querySelector("#body").value,
        media: {
            url: document.querySelector("#addPic").value,
            
        }

    }
    
    
    const response = await fetch ( API_Base + API_Social + API_Posts, {
        method: "POST",
        headers: {
            
            Authorization:  `Bearer ${load("token")}`,
            "X-Noroff-API-Key": `${load("ApiKey")}`,               
        },
        body: JSON.stringify(formData)
    });
    console.log(formData)
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error creating post:', errorMessage);
        return;
    }

    const result = await response.json();
    console.log(result);
})
  