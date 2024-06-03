import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";

export async function login(body) {
  try {
    const response = await axios.post(`${SERVER_URL}/users/login`, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function register(data) {
  try {
    const profileData = await axios.post(`${SERVER_URL}/users/register`, data);
    // console.log(profileData.data);
    return profileData.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getUserData(token, _id) {
  try {
    const profileData = await axios.get(`${SERVER_URL}/users/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(profileData.data);
    return profileData.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
