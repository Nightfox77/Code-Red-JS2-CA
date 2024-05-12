import { API_Base, API_Social, API_Profiles, API_Posts } from "./constants.js";
import { load } from "../functions.js";
import { createAPIKey } from "./getApiKey.js";


export async function displayProfilePosts() {
    await createAPIKey();
    try {
        const response = await fetch(API_Base + API_Social + API_Profiles + "/" + `${load("name")}` + API_Posts, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${load("token")}`,
                "X-Noroff-API-Key": `${load("ApiKey")}`                
            }
        });
        
        if (response.ok) {
          
        

        const resultData = await response.json();
        const finalData = resultData.data;
        
       
        const feedContainer = document.querySelector("#profilePosts");
        for (let i = 0; i < finalData.length; i++) {
            let userImage = "";
            let userText = "";

            if (finalData[i].body === null || finalData[i].body.length === 0) {
                userText = "";
            } else {
                userText = finalData[i].body;
            }

            if (finalData[i].media === null || finalData[i].media.length === 0) {
                userImage = `<img src="/images/background.JPG"  alt="default image">`;
            } else {
                const image = finalData[i].media;
                userImage += `<img src="${image.url}"  alt="default image" onerror="this.src='/images/background.JPG'">`;
            }
            const hashtags = userText.match(/#\w+/g) || []; 
            const originalTags = finalData[i].tags || [];
            const allTags = [
                ...originalTags.map(tag => tag.startsWith('#') ? tag : `#${tag}`),
                ...hashtags.map(tag => tag.startsWith('#') ? tag : `#${tag}`)
              ];
              
            const comments = finalData[i]._count.comments;
            const reactions = finalData[i]._count.reactions;
            feedContainer.innerHTML += `<div id="${finalData[i].id}" class="feedbox d-flex flex-column p-3 my-3 rounded">
                                            ${userImage}
                                            <h3 class="posttitle text-white m-0 mt-3">${finalData[i].title}</h3>
                                            <p class="fw-light text-secondary fs-6">Created: ${finalData[i].created.substring(0, 10)}</p>
                                            <p class="postbody text-white fw-light">${userText}</p>
                                            <hr class="m-0 text-secondary"></hr>
                                            <p class="text-danger m-0 mt-2">${allTags.join(', ')}</p>
                                            <div class="d-flex text-secondary justify-content-end gap-2">
                                                <span  class="edit material-symbols-outlined">edit</span>
                                                <span  class="delete material-symbols-outlined">delete</span>
                                            </div>
                                            <div class="row d-flex justify-content-center">
                                                    <p class=" col-3 text-white d-flex gap-2"><span class="material-symbols-outlined">
                                                    chat_bubble
                                                    </span> ${comments}</p>
                                                    <p class=" col-3 text-white d-flex gap-2 "><span class="material-symbols-outlined text-danger">
                                                    favorite
                                                    </span> ${reactions}</p>
                                                
                                                   
                                                    
                                                </div>
                                        </div>`;
        }
    }
    } catch (error) {
       
    }
}
