import { setupInputPlaceholders } from "./functions.js";
import { loadToken } from "./functions.js";
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

const feedForm = document.querySelector("#feedStarter");
const addIcon = document.querySelector("#addIcon");
const backIcon = document.querySelector("#backIcon");

addIcon.onclick = function showFeedStarter() {
    feedForm.style.display = "flex";
}
backIcon.onclick = function hideFeedStarter() {
    feedForm.style.display = "none";
}

