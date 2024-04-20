import { load, save } from "../functions.js";
import { API_Base, API_Social, API_Profiles } from "./constants.js";

const profileUrl = API_Base + API_Social + API_Profiles;


async function loadProfile() {
    
        const response = await fetch (profileUrl + "/" + `${load("name")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${load("token")}`,
                "X-Noroff-API-Key": `${load("ApiKey")}`,               
            },
        })
        if (response.ok) {
            const result = await response.json(); 
            const data = result.data
            console.log(data);
            const banner = data.banner;
            save("bannerImage", banner.url);
            const profileCount = data._count;
            save("profilePosts", profileCount.posts);
            save("profileFollowers", profileCount.followers);
            save("profileFollowing", profileCount.following);
            
        } else {
            console.error('Failed to load profile:', response.status);
        }
}
loadProfile();