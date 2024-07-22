import axios from "axios"; // Import axios for making HTTP requests

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Creates a new chat by sending a POST request to the server.
 *
 * @param {Object} body - The request body containing chat details.
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The response data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createNewChat(body, token) {
  try {
    // Send POST request to create a new chat
    const chat = await axios.post(`${SERVER_URL}/chats`, body, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return chat.data; // Return response data
  } catch (error) {
    console.error(error); // Log error to the console
    throw Error(error); // Throw error to be handled by caller
  }
}

/**
 * Retrieves user chat information by sending a GET request to the server.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} _id - The ID of the chat to retrieve.
 * @returns {Object} - The response data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUserChat(token, _id) {
  try {
    // Send GET request to retrieve user chat
    const chat = await axios.get(`${SERVER_URL}/chats/${_id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return chat.data; // Return response data
  } catch (error) {
    console.error(error); // Log error to the console
    throw new Error(error); // Throw error to be handled by caller
  }
}

/**
 * Retrieves chat messages by sending a GET request to the server.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} _id - The ID of the chat to retrieve messages for.
 * @returns {Object} - The response data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getChatMessages(token, _id) {
  try {
    // Send GET request to retrieve chat messages
    const messages = await axios.get(`${SERVER_URL}/chats/${_id}/messages`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return messages.data; // Return response data
  } catch (error) {
    console.error(error); // Log error to the console
    throw new Error(error); // Throw error to be handled by caller
  }
}
