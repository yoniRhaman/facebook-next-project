import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import LoginPage from "./login/page";

import MainBox from "@/utils/components/mainBox/mainBox";
import LoginPage from "@/app/login/page.js";

export default function Home() {
  const token = getCookie("token", { cookies });

  return <div>{token ? <MainBox /> : <LoginPage />}</div>;
}
