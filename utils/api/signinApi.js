import axios from "axios";

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Sends user data to the server for registration or profile update.
 *
 * @param {Object} data - The user data to be sent to the server.
 * @returns {Object} - The response data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function sendUserData(data) {
  try {
    // Send POST request to the server with user data
    const profileData = await axios.post(`${SERVER_URL}/users`, data);
    return profileData.data; // Return the response data
  } catch (error) {
    console.error("Error sending user data:", error); // Log error to the console
    throw new Error("Failed to send user data"); // Throw error to be handled by caller
  }
}
