import axios from "axios";

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Fetches user data for a specific profile.
 *
 * @param {string} token - The authentication token for authorization.
 * @param {string} id - The ID of the user whose data is to be fetched.
 * @returns {Object} - The user data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUserDataForProfile(token, id) {
  try {
    // Send GET request to fetch user data for a specific profile
    const userData = await axios.get(`${SERVER_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token for authorization
      },
    });

    return userData.data; // Return the user data
  } catch (error) {
    console.error("Error fetching user data:", error); // Log error to the console
    throw new Error("Failed to fetch user data"); // Throw error to be handled by caller
  }
}

/**
 * Fetches pictures of users based on provided IDs.
 *
 * @param {string} token - The authentication token for authorization.
 * @param {Object} idis - The IDs of the users whose pictures are to be fetched.
 * @returns {Object} - The pictures data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUsersPictures(token, idis) {
  try {
    // Send POST request to fetch user pictures based on provided IDs
    const userData = await axios.post(`${SERVER_URL}/users/pictures`, idis, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token for authorization
      },
    });

    return userData.data; // Return the pictures data
  } catch (error) {
    console.error("Error fetching user pictures:", error); // Log error to the console
    throw new Error("Failed to fetch user pictures"); // Throw error to be handled by caller
  }
}

/**
 * Fetches pictures of common friends based on provided IDs.
 *
 * @param {string} token - The authentication token for authorization.
 * @param {Object} idis - The IDs of the common friends whose pictures are to be fetched.
 * @returns {Object} - The common friends' pictures data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getCommonFriendsPictures(token, idis) {
  try {
    // Send POST request to fetch common friends' pictures based on provided IDs
    const result = await axios.post(`${SERVER_URL}/users/commonFriendsPictures`, idis, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token for authorization
      },
    });

    return result.data; // Return the common friends' pictures data
  } catch (error) {
    console.error("Error fetching common friends' pictures:", error); // Log error to the console
    throw new Error("Failed to fetch common friends' pictures"); // Throw error to be handled by caller
  }
}

/**
 * Fetches a list of all users.
 *
 * @param {string} token - The authentication token for authorization.
 * @returns {Array} - The list of all users from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getAllusers(token) {
  try {
    // Send GET request to fetch a list of all users
    const users = await axios.get(`${SERVER_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` }, // Include token for authorization
    });

    return users.data; // Return the list of users
  } catch (error) {
    console.error("Error fetching all users:", error); // Log error to the console
    throw new Error("Failed to fetch all users"); // Throw error to be handled by caller
  }
}
