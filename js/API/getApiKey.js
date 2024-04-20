import { load } from "../functions.js";
import { save } from "../functions.js";
import { API_Base, API_Auth } from "./constants.js";



async function createAPIKey() {
    try {
        
        const API_Key = `/create-api-key`;    
        const createAPIKeyURL = API_Base + API_Auth + API_Key;
        
        const response = await fetch( createAPIKeyURL, {
            method: "POST",
            headers: {
                
                Authorization:  `Bearer ${load("token")}`
            },
            
        });

        
        const responseData = await response.json(); 
        if (response.ok) {
            const data = responseData.data;
            save("ApiKey",data.key)
            console.log("API Key created successfully:", responseData);
        } else {
            console.log("Failed to create API key. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
createAPIKey();