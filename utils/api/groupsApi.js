import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";
export async function getAllGroups(token) {
  try {
    const groups = await axios.get(`${SERVER_URL}/groups`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return groups.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}

export async function createNewGroups(body, token) {
  try {
    const groups = await axios.post(`${SERVER_URL}/groups`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return groups.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}
