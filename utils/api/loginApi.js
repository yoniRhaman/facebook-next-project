import axios from "axios"; // Import axios for making HTTP requests

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Logs in a user with the provided credentials.
 *
 * @param {Object} body - The login credentials (e.g., email and password).
 * @returns {Object} - The response data from the server, typically containing user details and a JWT token.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function login(body) {
  try {
    // Send POST request to login user
    const response = await axios.post(`${SERVER_URL}/users/login`, body);
    return response.data; // Return response data
  } catch (error) {
    console.error("Error during login:", error); // Log error to the console
    throw new Error("Login failed"); // Throw error to be handled by caller
  }
}

/**
 * Registers a new user with the provided data.
 *
 * @param {Object} data - The user registration data (e.g., email, password).
 * @returns {Object} - The response data from the server, typically confirming user registration.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function register(data) {
  try {
    // Send POST request to register new user
    const profileData = await axios.post(`${SERVER_URL}/users/register`, data);
    return profileData.data; // Return response data
  } catch (error) {
    console.error("Error during registration:", error); // Log error to the console
    throw new Error("Registration failed"); // Throw error to be handled by caller
  }
}

/**
 * Retrieves user data by user ID.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} _id - The user ID to fetch data for.
 * @returns {Object} - The response data from the server, typically containing user profile information.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUserData(token, _id) {
  try {
    // Send GET request to fetch user data by ID
    const profileData = await axios.get(`${SERVER_URL}/users/${_id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return profileData.data; // Return response data
  } catch (error) {
    console.error("Error fetching user data:", error); // Log error to the console
    throw new Error("Failed to fetch user data"); // Throw error to be handled by caller
  }
}
