import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";
import { modal,  errorModalHTML } from "../Modals/constants.js";
import { hideModal, showModal } from "../Modals/functions.js";



export async function getSinglePost(postId) {
        try {
            
            const idUrl = API_Base + API_Social + API_Posts + "/" + postId ;
            
            const response = await fetch(idUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${load("token")}`,
                    "X-Noroff-API-Key": `${load("ApiKey")}`,
                }
            });
            if (response.ok) {
                const result = await response.json();
                const resultData = result.data;
               
                const feedContainer = document.querySelector("#feedPosts");
                
                    let userImage ="";
                    let userText = "";
    
                    if(resultData.body === null || resultData.body.length === 0) {
                        userText = ""
                    } else {
                        userText = resultData.body
                    }
                    if(resultData.media === null || resultData[i].media.length === 0) {
                        
                        userImage = `<img src="/images/defaultimage.png"  alt="default image">`;
                    } else {
                        const image = resultData.media;
                        
                            userImage += `<img src= ${image.url}  alt="default image" onerror="this.src='/images/defaultimage.png'">`;
                        
                    }
                    const hashtags = userText.match(/#\w+/g) || []; 
                    const originalTags = resultData.tags || [];
                    const allTags = [
                    ...originalTags.map(tag => tag.startsWith('#') ? tag : `#${tag}`),
                    ...hashtags.map(tag => tag.startsWith('#') ? tag : `#${tag}`)];
                    const comments = resultData._count.comments;
                    const reactions = resultData._count.reactions;
                    feedContainer.innerHTML = "";
                    feedContainer.innerHTML = `<div id="${resultData.id}"  class="feedbox d-flex flex-column  p-3 my-3 rounded">
                                                ${userImage}
                                                <div class="d-flex flex-column text-wrap ">
                                                    <h3 class="text-white m-0 mt-3">${resultData.title}</h3>
                                                    <p class="fw-light text-secondary fs-6 mb-0">Created: ${resultData.created.substring(0, 10)}</p>
                                                    <p class="fw-light text-secondary fs-6">Edited: ${resultData.updated.substring(0, 10)}</p>
                                                    <p class="text-white fw-light  ">${userText}</p>
                                                </div>
                                                    <hr class="m-0 text-secondary"></hr>
                                                    <p class="text-danger m-0 mt-2">${allTags.join(', ')}</p>
                                                    <div class="row d-flex justify-content-center">
                                                        <p class=" col-3 text-white d-flex gap-2"><span class="material-symbols-outlined">
                                                        chat_bubble
                                                        </span> ${comments}</p>
                                                        <p class=" col-3 text-white d-flex gap-2 "><span class="material-symbols-outlined text-danger">
                                                        favorite
                                                        </span> ${reactions}</p>
                                                
                                                   
                                                    
                                                </div>
                                                </div>`;
            } else {

                modal.innerHTML = "";
                modal.innerHTML = errorModalHTML;
                showModal();
                setTimeout(() => {
                   hideModal();
                    
                }, 2000);
            }
        } catch (error) {
            console.error("Error occurred ", error);
    
}
}