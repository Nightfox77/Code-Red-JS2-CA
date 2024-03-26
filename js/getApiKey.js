import { loadToken } from "./functions.js";



// Retrieve token from localStorage





async function createAPIKey() {
    try {
        const API_Base = `https://v2.api.noroff.dev`;
        const API_Auth = `/auth`;
        const API_Key = `/create-api-key`;
        
        // Construct the URL for creating an API key
        const createAPIKeyURL = API_Base + API_Auth + API_Key;

        // Retrieve token from localStorage
        const token = loadToken("token");
        console.log(typeof token);
        const response = await fetch( createAPIKeyURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${token}`
            },
            
        });

        console.log(token);
        const responseData = await response.json(); 
        if (response.ok) {
            
            console.log("API Key created successfully:", responseData);
        } else {
            console.log("Failed to create API key. Status:", response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
createAPIKey();