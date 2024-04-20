import { setupInputPlaceholders } from "../functions.js";
import { displayPosts } from "../API/allPosts.js";
import { searchIcon, closeIcon } from "../constants.js";
import { showSearchBar, hideSearchBar } from "./functions.js";

setupInputPlaceholders();

searchIcon.onclick = showSearchBar;
closeIcon.onclick = hideSearchBar;



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


