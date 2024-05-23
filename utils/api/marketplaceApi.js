import axios from "axios";

const SERVER_URL = "https://facebook-express-project.onrender.com";

export async function getAllProducts() {
  try {
    const products = await axios.get(`${SERVER_URL}/products`);
    return products.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}

export async function createProduct(data) {
  try {
    const product = await axios.post(`${SERVER_URL}/products`, data);
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


