import { Agriculture } from "@mui/icons-material";
import axios from "axios";

const SERVER_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
    ? "http://localhost:3005"
    : "https://facebook-express-project.onrender.com";

export async function getTwentyFreinds(token, id) {
  try {
    const freindData = await axios.get(`${SERVER_URL}/freinds/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return freindData.data;
  } catch (error) {
    if (error instanceof AggregateError) {
      console.error("Multiple errors occurred:", error.errors);
    } else {
      console.error("Error fetching friends data:", error);
    }
    throw new Error("not found freind data");
  }
}

export async function addFreind(token, idis) {
  try {
    const freindData = await axios.post(
      `${SERVER_URL}/freinds/addFreind`,
      idis,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return freindData.data;
  } catch (error) {
    return false;
  }
}

export async function getUserFreinds(token, id) {
  try {
    const freindData = await axios.get(`${SERVER_URL}/freinds/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return freindData.data;
  } catch (error) {
    throw new Error("not found freind data");
  }
}
