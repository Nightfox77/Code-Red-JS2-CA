import { API_Base, API_Social, API_Posts, API_Search } from "./constants.js";
import { load } from "../functions.js";
import { errorModalHTML, modal } from "../Modals/constants.js";
import { showModal, hideModal } from "../Modals/functions.js";

export async function searchApi(searchInput) {
    try {
        const url = API_Base + API_Social + API_Posts + API_Search + "?q=" + searchInput;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${load("token")}`,
                "X-Noroff-API-Key": `${load("ApiKey")}`,
            }
        });
        const result = await response.json();
        const finalData = result.data;
        if(response.ok) {
           
        const feedContainer = document.querySelector("#feedPosts");
        feedContainer.innerHTML = "";
        for(let i = 0; i < finalData.length; i++) {
                    let userImage ="";
                    let userText = "";
    
                    if(finalData[i].body === null ||finalData[i].body.length === 0) {
                        userText = ""
                    } else {
                        userText = finalData[i].body
                    }
                    if(finalData[i].media === null ||finalData[i].media.length === 0) {
                        
                        userImage = `<img src="/images/defaultimage.png"  alt="default image">`;
                    } else {
                        const image = finalData[i].media;
                        
                            userImage += `<img src= ${image.url}  alt="default image" onerror="this.src='/images/defaultimage.png'">`;
                        
                    }
                    const hashtags = userText.match(/#\w+/g) || []; //hashtag recognition from body text
                    const originalTags = finalData[i].tags || []; //the tags from the API
                    const allTags = [
                        ...originalTags.map(tag => tag.startsWith('#') ? tag : `#${tag}`),
                        ...hashtags.map(tag => tag.startsWith('#') ? tag : `#${tag}`)
                      ];
                    const comments = finalData[i]._count.comments;
                    const reactions =finalData[i]._count.reactions;
                    
                    feedContainer.innerHTML += `<div id="${finalData[i].id}"  class="feedbox d-flex flex-column  p-3 my-3 rounded">
                                                ${userImage}
                                                <div class="d-flex flex-column text-wrap ">
                                                    <h3 class="text-white m-0 mt-3">${finalData[i].title}</h3>
                                                    <p class="fw-light text-secondary fs-6 mb-0">Created: ${finalData[i].created.substring(0, 10)}</p>
                                                    <p class="fw-light text-secondary fs-6">Edited: ${finalData[i].updated.substring(0, 10)}</p>
                                                    <p class="text-white fw-light  ">${userText}</p>
                                                </div>
                                                    <hr class="m-0 text-secondary"></hr>
                                                    <p class="text-danger m-0">${allTags.join(', ')}</p>
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
                
        } else {
            modal.innerHTML = "";
            modal.innerHTML = errorModalHTML;
            showModal();
            setTimeout(() => {
               hideModal();
                
            }, 2000);
                
        }
    } catch (error) {
       
}
}