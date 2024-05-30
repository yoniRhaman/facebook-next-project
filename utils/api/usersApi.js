import axios from "axios";


const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";



export async function getUserDataForProfile(token, id) {
    try {
      const userData = await axios.get(`${SERVER_URL}/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
      
      return userData.data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }