import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";
export async function getAllProducts(token) {
  try {
    const products = await axios.get(`${SERVER_URL}/products`,{
    headers: { Authorization: `Bearer ${token}` },
  });
    return products.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}

export async function createProduct(body, token) {
  console.log(body);
  console.log(token);
  try {
    const product = await axios.post(`${SERVER_URL}/products`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return product.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}

async function deleteProduct(id) {
  try {
    await axios.delete(`${SERVER_URL}/products/${id}`);
    return "Deleted";
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
