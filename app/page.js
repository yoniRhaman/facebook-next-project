import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import LoginPage from "./Login/page";
import MainBox from "@/utils/components/mainBox/mainBox";

export default function Home() {
  const token = getCookie("token", { cookies });

  return <div>{token ? <MainBox /> : <LoginPage />}</div>;
}
