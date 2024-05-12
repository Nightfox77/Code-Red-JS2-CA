import { body } from "./constants.js";
import { modal } from "./constants.js";

export function showModal() {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
    
}
export function hideModal() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}