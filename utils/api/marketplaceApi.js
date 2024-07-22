import axios from "axios"; // Import axios for making HTTP requests

// Define the server URL based on the environment
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005" // Development server URL
    : "https://facebook-express-project.onrender.com"; // Production server URL

/**
 * Retrieves all products from the server.
 *
 * @param {string} token - The JWT token for authentication.
 * @returns {Array} - An array of product objects from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getAllProducts(token) {
  try {
    // Send GET request to fetch all products
    const products = await axios.get(`${SERVER_URL}/products`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return products.data; // Return response data
  } catch (error) {
    console.error("Error fetching all products:", error); // Log error to the console
    throw new Error("Failed to fetch products"); // Throw error to be handled by caller
  }
}

/**
 * Retrieves a single product by its ID.
 *
 * @param {string} token - The JWT token for authentication.
 * @param {string} _id - The ID of the product to fetch.
 * @returns {Object} - The product object from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function getProductById(token, _id) {
  try {
    // Send GET request to fetch product by ID
    const products = await axios.get(`${SERVER_URL}/products/${_id}`, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return products.data; // Return response data
  } catch (error) {
    console.error(`Error fetching product with ID ${_id}:`, error); // Log error to the console
    throw new Error("Failed to fetch product"); // Throw error to be handled by caller
  }
}

/**
 * Creates a new product.
 *
 * @param {Object} body - The product data to be created.
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The created product object from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createProduct(body, token) {
  try {
    // Send POST request to create a new product
    const product = await axios.post(`${SERVER_URL}/products`, body, {
      headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
    });
    return product.data; // Return response data
  } catch (error) {
    console.error("Error creating product:", error); // Log error to the console
    throw new Error("Failed to create product"); // Throw error to be handled by caller
  }
}

/**
 * Deletes a product by its ID.
 *
 * @param {string} _id - The ID of the product to delete.
 * @param {string} user_id - The ID of the user performing the deletion.
 * @param {string} token - The JWT token for authentication.
 * @returns {Object} - The response data from the server.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function deleteProductById(_id, user_id, token) {
  try {
    // Send DELETE request to delete product by ID
    const response = await axios.delete(
      `${SERVER_URL}/products/${_id}/${user_id}`, // URL with product and user IDs
      {
        headers: { Authorization: `Bearer ${token}` }, // Include JWT token in headers
      }
    );
    return response.data; // Return response data
  } catch (error) {
    console.error(`Error deleting product with ID ${_id}:`, error); // Log error to the console
    throw new Error("Failed to delete product"); // Throw error to be handled by caller
  }
}
