import { API_Base } from "../constants.js";
import { API_Social } from "../constants.js";
import { API_Posts } from "../constants.js";
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
