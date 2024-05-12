import { showModal, hideModal } from "../Modals/functions.js";
import { postformModalHTML, deleteModalHTML, editformModalHTML } from "../Modals/constants.js";
import { modal,body } from "../Modals/constants.js";
import { load, save } from "../functions.js";
import { displayProfilePosts } from "../API/allPostByProfile.js";
import { userImageContainer} from "../constants.js";
import { loadProfile } from "../API/loadProfile.js";



const dummyInput = document.querySelector("#dummyinput");

dummyInput.addEventListener("click", function() {
    
        
        modal.innerHTML = postformModalHTML;
        showModal();
    
})

body.addEventListener("click", function(event) {
        if(event.target.matches("#closePostform")) {
                hideModal();
        }
        
})
document.addEventListener('DOMContentLoaded', async function() {
        await loadProfile();
        userImageContainer.src = load("userImage");
        const bannerImageContainer = document.querySelector("#profileBanner");
        if(bannerImageContainer) {
                bannerImageContainer.style.backgroundImage = `url(${load("bannerImage")})`;
        }


        const bannerProfileImage = document.querySelector("#profileBanner .imageContainer img");
        if(bannerProfileImage) {
                bannerProfileImage.src = load("userImage");
        }

        const userName = document.querySelector("#userName");
        if(userName) {
                userName.innerHTML = load("name");
        }
        const profileInfo = document.querySelector("#profileStats");
        if(profileInfo) {
                
        profileInfo.innerHTML = `<div class="statBox w-25 d-flex flex-column text-white text-center">
                                        <p class="lead">Posts</p>
                                        <p>${load("profilePosts")}
                                </div>
                                <div class="statBox w-25 d-flex flex-column text-white text-center">
                                        <p class="lead">Followers</p>
                                        <p>${load("profileFollowers")}
                                </div>
                                <div class="statBox w-25 d-flex flex-column text-white text-center">
                                        <p class="lead">Following</p>
                                        <p>${load("profileFollowing")}
                                </div>`;
        }

});

export let boxId
body.addEventListener("click", function(event) {
    if (event.target.matches(".delete")) {
        // Traverse up the DOM tree to find the closest feedbox
        const feedbox = event.target.closest('.feedbox');
        
        if (feedbox) {
            // Get the ID from the feedbox
            boxId = feedbox.getAttribute("id");
            console.log(boxId);
            
            // Update the modal content and show the modal
            modal.innerHTML = deleteModalHTML;
            showModal();
        }
    }
});



body.addEventListener("click", function(event) {
        if (event.target.matches(".edit")) {
            // Traverse up the DOM tree to find the closest feedbox
            const feedbox = event.target.closest('.feedbox');
    
            if (feedbox) {


                boxId = feedbox.getAttribute("id");
                const postTitle = feedbox.querySelector(".posttitle");
                const postText = feedbox.querySelector(".postbody");
                const postImage = feedbox.querySelector("img")
                
                    const originalTitle = postTitle.innerText;
                    const originalBody = postText.innerText;
                    const originalImage = postImage.getAttribute("src");
                    save("originaltitle", originalTitle);
                    save("originalbody", originalBody);
                    save("originalimage", originalImage);
                    // Update the modal content and show the modal
                    modal.innerHTML = editformModalHTML;
                    showModal();
                }
            
        }
    });

        displayProfilePosts()
