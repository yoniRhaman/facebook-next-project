import axios from "axios";

// const SERVER_URL = "https://facebook-express-project.onrender.com";
const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";

export async function createNewChat(body, token) {
  try {
    const chat = await axios.post(`${SERVER_URL}/chats`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return chat.data;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
}
