import axios from "axios"; // Import axios for making HTTP requests

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Fetches a list of up to 20 friends for a user.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} id - The ID of the user whose friends are to be fetched.
 * @returns {Object} - The response data from the server containing friend details.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getTwentyFreinds(token, id) {
  try {
    // Send GET request to fetch up to 20 friends
    const freindData = await axios.get(`${SERVER_URL}/freinds/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in headers
      },
    });
    return freindData.data; // Return response data
  } catch (error) {
    // Handle and log errors
    if (error instanceof AggregateError) {
      console.error("Multiple errors occurred:", error.errors);
    } else {
      console.error("Error fetching friends data:", error);
    }
    throw new Error("Not found friend data"); // Throw error to be handled by caller
  }
}

/**
 * Adds friends to the user's list.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {Object} idis - The object containing IDs of the friends to be added.
 * @returns {Object|boolean} - The response data from the server if successful; otherwise, `false`.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function addFreind(token, idis) {
  try {
    // Send POST request to add friends
    const freindData = await axios.post(
      `${SERVER_URL}/freinds/addFreind`,
      idis,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
      }
    );
    return freindData.data; // Return response data
  } catch (error) {
    console.error("Error adding friends:", error); // Log error to the console
    return false; // Return false if the request fails
  }
}

/**
 * Retrieves the list of friends for a user.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} id - The ID of the user whose friends are to be fetched.
 * @returns {Object} - The response data from the server containing friend details.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getUserFreinds(token, id) {
  try {
    // Send GET request to fetch user's friends
    const freindData = await axios.get(`${SERVER_URL}/freinds/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in headers
      },
    });
    return freindData.data; // Return response data
  } catch (error) {
    console.error("Error fetching friends data:", error); // Log error to the console
    throw new Error("Not found friend data"); // Throw error to be handled by caller
  }
}
