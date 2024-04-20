import { searchBar } from "../constants.js";
export function showSearchBar() {
    searchBar.classList.remove("d-none");
    searchBar.classList.add("d-flex");
}
export function hideSearchBar() {
    searchBar.classList.remove("d-flex");
    searchBar.classList.add("d-none");
}