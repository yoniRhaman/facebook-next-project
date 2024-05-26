import axios from "axios";

const SERVER_URL = "http://localhost:3005";

export async function getUserData(id) {
    try {
        const profileData = await axios.get(`${SERVER_URL}/users/${id}`);
        console.log(profileData.data);
        return profileData.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}


export async function sendUserData(data) {
    try {
        const profileData = await axios.post(`${SERVER_URL}/users/register`, data);
        console.log(profileData.data);
        return profileData.data;
    } catch (error) {
        
        console.error(error);
        throw new Error(error);
    }
}




