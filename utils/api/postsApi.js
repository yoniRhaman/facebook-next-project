import axios from "axios";

const SERVER_URL = "https://facebook-express-project.onrender.com";

export async function getAllPosts() {
  try {
    const posts = await axios.get(`${SERVER_URL}/posts`);
    return posts.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createNewPosts(data) {
  try {
    const post = await axios.post(`${SERVER_URL}/posts`, data);
    return post.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
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
