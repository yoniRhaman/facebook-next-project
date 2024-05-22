import axios from "axios";

const SERVER_URL = "http://localhost:3005";

async function getAllProducts() {
  try {
    const products = await axios.get(`${SERVER_URL}/products`);
    return products.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

async function createProduct(data) {
  try {
    const product = await axios.post(`${SERVER_URL}/products`, data);
    return product.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
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


