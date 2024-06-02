import { getAllPosts } from "@/utils/api/postsApi";
import "./mainBox.css";
import MainPosts from "./posts/mainPosts";
import SideFreindsMenue from "./sideFreindsMenue/sideFreindsMenue";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";


async function MainBox() {
  const postsFromServer = await getAllPosts(getCookie("token", { cookies }));

  return (
    <div>
      <div className="main-box">
        <div className="main-box-left">
          <MainPosts postsFromServer={postsFromServer} />
        </div>
        <div className="main-box-right">
          <SideFreindsMenue />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
