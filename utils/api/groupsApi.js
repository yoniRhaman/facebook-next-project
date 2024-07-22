import axios from "axios"; // Import axios for making HTTP requests

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Retrieves a list of all groups.
 *
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The response data from the server containing group details.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getAllGroups(token) {
  try {
    // Send GET request to fetch all groups
    const groups = await axios.get(`${SERVER_URL}/groups`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return groups.data; // Return response data
  } catch (error) {
    console.error("Error fetching groups data:", error); // Log error to the console
    throw new Error("Failed to fetch groups"); // Throw error to be handled by caller
  }
}

/**
 * Creates a new group.
 *
 * @param {Object} body - The data for the new group.
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The response data from the server confirming the group creation.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createNewGroups(body, token) {
  try {
    // Send POST request to create a new group
    const groups = await axios.post(`${SERVER_URL}/groups`, body, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return groups.data; // Return response data
  } catch (error) {
    console.error("Error creating group:", error); // Log error to the console
    throw new Error("Failed to create group"); // Throw error to be handled by caller
  }
}
