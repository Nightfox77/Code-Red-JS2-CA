import { setupInputPlaceholders } from "../functions.js";
import { getAllPosts } from "../API/allPosts.js";
import { load } from "../functions.js";
setupInputPlaceholders();

const searchIcon = document.querySelector("#searchIcon");
const searchBar = document.querySelector("#searchBar");
const closeIcon = document.querySelector("#closeIcon");

searchIcon.onclick = function showSearchBar() {
    searchBar.classList.remove("d-none");
    searchBar.classList.add("d-flex");
}
closeIcon.onclick = function hideSearchBar() {
    searchBar.classList.remove("d-flex");
    searchBar.classList.add("d-none");
}
const feedstarter = document.querySelector("#feedstarter");
const userImageContainer = document.querySelector("#userPic");
const userNameContainer = document.querySelector("#userName");

userImageContainer.src = load("userImage");
userNameContainer.innerHTML = `${load("name")}`;

let currentPage = 1;
async function displayPosts(currentPage) {
    try {
        const result = await getAllPosts(currentPage);
        const resultData = result.data;
            console.log(resultData);
            const feedContainer = document.querySelector(".feedcontainer");
            for(let i = 0; i < Math.min(resultData.length, 10); i++) {
                let userImage ="";
                if(resultData[i].media === null || resultData[i].media.length === 0) {
                    
                    userImage = `<img src="/images/background.JPG"  alt="default image">`;
                } else {
                    const image = resultData[i].media;
                    
                        userImage += `<img src= ${image.url}  alt="default image">`;
                    
                }
                
                feedContainer.innerHTML += `<div id="feedbox" class="d-flex flex-column p-3 my-3 rounded">
                                            ${userImage}
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                                <h3 class="text-white m-0">${resultData[i].title}</h3>
                                                <p class="text-danger m-0">#${resultData[i].tags}</p>
                                            </div>
                                                <p class="fw-light text-white fs-6">Created: ${resultData[i].created.substring(0, 10)}</p>
                                                <p class="text-white lead">${resultData[i].body}</p>
                                            <div class="d-flex text-secondary justify-content-end gap-2">
                                                <span class="material-symbols-outlined">edit</span>
                                                <span class="material-symbols-outlined">delete</span>
                                                
                                            </div>
                                            </div>`;
            }
            
           
       
        
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
function isBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}


async function loadMorePosts() {
    if (isBottomOfPage()) {
        currentPage++; 
        await displayPosts(currentPage); 
    }
}


window.addEventListener('scroll', loadMorePosts);



displayPosts();