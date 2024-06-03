import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";

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
