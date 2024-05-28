import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";
export async function getAllPosts() {
  try {
    const posts = await axios.get(`${SERVER_URL}/posts`);
    return posts.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createNewPosts(body, token) {
  console.log(body);
  console.log(token);
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
