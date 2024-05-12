const searchIcon = document.querySelector("#searchIcon");

import { searchModal, modal } from "../Modals/constants.js";
import { showModal, hideModal } from "../Modals/functions.js";
import { getSinglePost } from "../API/loadSinglePost.js";
import { searchApi } from "../API/searchAPI.js";
import { displayPosts } from "../API/allPosts.js";
import { filterApi } from "../API/filter.js";
import { body } from "../Modals/constants.js";


searchIcon.addEventListener("click", function showSearchbar() {
    modal.innerHTML = searchModal;
    showModal();
})

modal.addEventListener("click", function hideSearchbar(event) {
    if( event.target.matches("#closeIcon")) {
        hideModal();
    }
    
})


let searchIsTriggered = false;
let currentPage = 1; 


modal.addEventListener("click", function handleSearch(event) {
    event.preventDefault();
    
    if(event.target.matches("#searchBtn") || event.target.closest("#searchBtn")) {
        const input = document.querySelector("#search");
        
        if(!input.value) {
            return;
        }

        if (!isNaN(input.value)) {
            searchIsTriggered = true;
            let postId = input.value;
            getSinglePost(postId);
            hideModal();
        } else {
            searchIsTriggered = true;
            let searchInput = input.value;
            searchApi(searchInput);
            hideModal();
        }
    }
});

let filterIsTriggered = false;

body.addEventListener("click", function performFilterEvent(event) {
    if(event.target.matches("#filterBtn")) {
        const filter = document.querySelector("#filter");
        let filterInput = filter.value;
        if(filterInput.length > 0) {
            filterIsTriggered = true;
            
            filterApi(filterInput);
        }
    }
})
async function loadPosts() {
    await displayPosts(currentPage);
}


async function handleScrollAndLoadMorePosts() {
    if ((!searchIsTriggered && isBottomOfPage()) && (!filterIsTriggered && isBottomOfPage())) {
        currentPage++;
        await displayPosts(currentPage);
    }
}


function isBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}


window.addEventListener('scroll', handleScrollAndLoadMorePosts);



     loadPosts();

    


