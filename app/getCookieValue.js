import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

export default function getCookieValue() {
  const token = getCookie("token", { cookies });
  return token;
}
