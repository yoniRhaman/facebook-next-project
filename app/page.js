import MainBox from "@/utils/components/mainBox/mainBox";
import LoginPage from "./Login/page";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default function Home() {
  const token = getCookie("token", { cookies });

  return <div>{token ? <MainBox /> : <LoginPage />}</div>;
}
