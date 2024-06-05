import axios from "axios";

const SERVER_URL =
  // process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
  //   ? "http://localhost:3005"
  //   :
     "https://new-facebook-express-render.onrender.com";

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

export async function getUserChat(token, _id) {
  try {
    const chat = await axios.get(`${SERVER_URL}/chats/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(chat.data);
    return chat.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getChatMessages(token, _id) {
  try {
    const messages = await axios.get(`${SERVER_URL}/chats/${_id}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return messages.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
