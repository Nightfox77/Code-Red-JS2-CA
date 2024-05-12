import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";
import { createAPIKey } from "./getApiKey.js";


async function getAllPosts(page = 1) {
    const postsPerPage = 10;
    const API_AllPosts = API_Posts + `?page=${page}&limit=${postsPerPage}`;

    
    await createAPIKey();
   
    try {
        const response = await fetch(API_Base + API_Social + API_AllPosts, {
            method: "GET",
            headers: {
                Authorization:  `Bearer ${load("token")}`,
                "X-Noroff-API-Key": `${load("ApiKey")}`                
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        return await response.json();
    } catch (error) {
        console.log('Error fetching posts:', error);
       
    }
}


export async function displayPosts(currentPage) {
    try {
        
        const result = await getAllPosts(currentPage);
        const resultData = result.data;
            
            const feedContainer = document.querySelector("#feedPosts");
            for(let i = 0; i < Math.min(resultData.length, 10); i++) {
                let userImage ="";
                let userText = "";

                if(resultData[i].body === null || resultData[i].body.length ===0) {
                    userText = ""
                } else {
                    userText = resultData[i].body
                }
                if(resultData[i].media === null || resultData[i].media.length === 0) {
                    
                    userImage = `<img src="/images/defaultimage.png"  alt="default image">`;
                } else {
                    const image = resultData[i].media;
                    
                        userImage += `<img src= ${image.url}  alt="default image" onerror="this.src='/images/defaultimage.png'">`;
                    
                }
                const hashtags = userText.match(/#\w+/g) || []; //hashtag recognition from body text
                const originalTags = resultData[i].tags || []; //the tags from the API
                const allTags = [
                    ...originalTags.map(tag => tag.startsWith('#') ? tag : `#${tag}`),
                    ...hashtags.map(tag => tag.startsWith('#') ? tag : `#${tag}`)
                  ];
                const comments = resultData[i]._count.comments;
                const reactions = resultData[i]._count.reactions;
                feedContainer.innerHTML += `<div id="${resultData[i].id}"  class="feedbox d-flex flex-column  p-3 my-3 rounded">
                                            ${userImage}
                                            <div class="d-flex flex-column text-wrap ">
                                                <h3 class="text-white m-0 mt-3">${resultData[i].title}</h3>
                                                <p class="fw-light text-secondary fs-6">Created: ${resultData[i].created.substring(0, 10)}</p>
                                                <p class="text-white fw-light  ">${userText}</p>
                                            </div>
                                                <hr class="m-0 text-secondary"></hr>
                                                <p class="text-danger m-0 mt-2">${allTags.join(', ')}</p>
                                                <div class="row d-flex justify-content-center mt-3">
                                                    <p class=" col-3 text-white d-flex gap-2"><span class="material-symbols-outlined">
                                                    chat_bubble
                                                    </span> ${comments}</p>
                                                    <p class=" col-3 text-white d-flex gap-2 "><span class="material-symbols-outlined text-danger">
                                                    favorite
                                                    </span> ${reactions}</p>
                                                </div>
                                            </div>`;
            }
            
           
       
        
    } catch (error) {
        
    }
}