import { API_Base, API_Social, API_Posts } from "./constants.js";
import { load } from "../functions.js";

export async function getAllPosts(page = 1) {
    const postsPerPage = 10;
    const API_AllPosts = API_Posts + `?page=${page}&limit=${postsPerPage}`;
    const response = await fetch(API_Base + API_Social + API_AllPosts, {
        method: "GET",
        headers: {
            
            Authorization:  `Bearer ${load("token")}`,
            "X-Noroff-API-Key": `${load("ApiKey")}`                
        }
        
    })
    console.log(API_Base + API_Social + API_AllPosts);
    return await response.json();
   


}

export async function displayPosts(currentPage) {
    try {
        const result = await getAllPosts(currentPage);
        const resultData = result.data;
            console.log(resultData);
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
                
                feedContainer.innerHTML += `<div id="${resultData[i].id}"  class="feedbox d-flex flex-column p-3 my-3 rounded">
                                            ${userImage}
                                                <h3 class="text-white m-0 mt-3">${resultData[i].title}</h3>
                                                <p class="fw-light text-secondary fs-6">Created: ${resultData[i].created.substring(0, 10)}</p>
                                                <p class="text-white fw-light">${userText}</p>
                                                <hr class="m-0 text-secondary"></hr>
                                                <p class="text-danger m-0">#${resultData[i].tags}</p>
                                            <div class="d-flex text-secondary justify-content-end gap-2">
                                               
                                                
                                            </div>
                                            </div>`;
            }
            
           
       
        
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}