import { getCookie } from "cookies-next"; // Importing getCookie function from cookies-next library
import { cookies } from "next/headers"; // Importing cookies object from next/headers for handling cookies
import LoginPage from "./Login/page"; // Importing LoginPage component from the Login directory
import MainBox from "@/utils/components/mainBox/mainBox"; // Importing MainBox component from the utils/components/mainBox directory

/**
 * Home component determines which page to display based on the presence of a JWT token.
 *
 * @returns {JSX.Element} The rendered component, either MainBox or LoginPage.
 */
export default function Home() {
  // Retrieve the JWT token from cookies
  const token = getCookie("token", { cookies });

  // Conditionally render the MainBox component if the token is present; otherwise, render the LoginPage component
  return <div>{token ? <MainBox /> : <LoginPage />}</div>;
}
