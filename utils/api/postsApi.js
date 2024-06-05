import axios from "axios";
import { userPosts } from "../data/displayedUserInformation";


// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";
export async function getAllPosts(token) {
  try {
    const posts = await axios.get(`${SERVER_URL}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return posts.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createNewPosts(body, token) {
  try {
    const response = await axios.post(`${SERVER_URL}/posts`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deletePosts(id) {
  try {
    await axios.delete(`${SERVER_URL}/posts/${id}`);
    return "DeletedPost";
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getUserPosts(id, token) {
  try {
    const userPosts = await axios.get(`${SERVER_URL}/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return userPosts.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
