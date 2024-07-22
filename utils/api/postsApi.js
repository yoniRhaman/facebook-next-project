import axios from "axios";

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Retrieves all posts for a given user.
 *
 * @param {string} _id - The ID of the user for whom to fetch posts.
 * @param {string} token - The JWT token for authentication.
 * @returns {Array} - An array of posts for the specified user.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getAllPosts(_id, token) {
  try {
    // Send GET request to fetch all posts for a user
    const posts = await axios.get(`${SERVER_URL}/posts/${_id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return posts.data; // Return response data
  } catch (error) {
    console.error("Error fetching all posts:", error); // Log error to the console
    throw new Error("Failed to fetch posts"); // Throw error to be handled by caller
  }
}

/**
 * Creates a new post.
 *
 * @param {Object} body - The data for the new post.
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The created post object.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createNewPosts(body, token) {
  try {
    // Send POST request to create a new post
    const response = await axios.post(`${SERVER_URL}/posts`, body, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return response.data; // Return response data
  } catch (error) {
    console.error("Error creating new post:", error); // Log error to the console
    throw new Error("Failed to create post"); // Throw error to be handled by caller
  }
}

/**
 * Deletes a post by its ID.
 *
 * @param {string} id - The ID of the post to delete.
 * @returns {string} - A confirmation message indicating successful deletion.
 * @throws {Error} - Throws an error if the request fails.
 */
async function deletePosts(id) {
  try {
    // Send DELETE request to remove a post by ID
    await axios.delete(`${SERVER_URL}/posts/${id}`);
    return "DeletedPost"; // Return confirmation message
  } catch (error) {
    console.error(`Error deleting post with ID ${id}:`, error); // Log error to the console
    throw new Error("Failed to delete post"); // Throw error to be handled by caller
  }
}

/**
 * Retrieves all posts created by a specific user.
 *
 * @param {string} id - The ID of the user for whom to fetch posts.
 * @param {string} token - The JWT token for authentication.
 * @returns {Array} - An array of posts created by the specified user.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUserPosts(id, token) {
  try {
    // Send GET request to fetch posts created by a specific user
    const userPosts = await axios.get(`${SERVER_URL}/posts/mypost/${id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return userPosts.data; // Return response data
  } catch (error) {
    console.error("Error fetching user posts:", error); // Log error to the console
    throw new Error("Failed to fetch user posts"); // Throw error to be handled by caller
  }
}
