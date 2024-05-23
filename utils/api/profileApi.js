import axios from "axios";

const SERVER_URL = "https://facebook-express-project.onrender.com";

export async function getUserData(id) {
    try {
        const profileData = await axios.get(`${SERVER_URL}/profile/${id}`);
        console.log(profileData.data);
        return profileData.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}


export async function sendUserData(data) {
    try {
        const profileData = await axios.post(`${SERVER_URL}/users`, data);
        console.log(profileData.data);
        return profileData.data;
    } catch (error) {
        
        console.error(error);
        throw new Error(error);
    }
}




