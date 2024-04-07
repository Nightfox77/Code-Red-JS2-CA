import { setupInputPlaceholders } from "../functions.js";
import { load } from "../functions.js";
import { displayPosts } from "../API/allPosts.js";
import { showModal } from "../Modals/functions.js"
import { deleteModalHTML } from "../Modals/deleteModal.js";
import { body } from "../Modals/constants.js";
import { modal } from "../Modals/constants.js";

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

const userImageContainer = document.querySelector("#userPic");
const userNameContainer = document.querySelector("#userName");

userImageContainer.src = load("userImage");
userNameContainer.innerHTML = `${load("name")}`;

let currentPage = 1;
document.addEventListener("DOMContentLoaded", function() {
    displayPosts();
})

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



body.addEventListener("click", function(event) {
    
    if (event.target.matches(".delete")) {
        modal.innerHTML = deleteModalHTML;
        showModal();
        
    }
});