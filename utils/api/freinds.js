
import axios from "axios";

const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";
    

export async function  getTwentyFreinds(id){
    try {
       const freindData = await axios.get(`${SERVER_URL}/users/freinds/${id}`);
       return freindData.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}