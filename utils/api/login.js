import axios from "axios";

const SERVER_URL = "http://localhost:3005";


export default function getUserByPassword(nameAndPassword) {
    try {
        const userData = axios.post(`${SERVER_URL}/users/login`, nameAndPassword);
        return userData;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}