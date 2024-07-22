import { cookies } from "next/headers"; // Import cookies object from next/headers for accessing cookies in Next.js
import { getCookie } from "cookies-next"; // Import getCookie function for retrieving cookies

/**
 * Retrieves the value of the 'token' cookie.
 * 
 * @returns {string | undefined} The value of the 'token' cookie, or undefined if the cookie does not exist.
 */
export default function getCookieValue() {
  // Retrieve the value of the 'token' cookie using the getCookie function.
  // The cookies object from next/headers is passed as an option to access cookies in the Next.js environment.
  const token = getCookie("token", { cookies });
  
  // Return the value of the 'token' cookie. It could be undefined if the cookie does not exist.
  return token;
}
