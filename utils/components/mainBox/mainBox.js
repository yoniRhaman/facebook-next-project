import { getAllPosts } from "@/utils/api/postsApi";
import "./mainBox.css";
import MainPosts from "./posts/mainPosts";
import SideFreindsMenue from "./sideFreindsMenue/sideFreindsMenue";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

// Async function to fetch and render the main box
async function MainBox() {
  // Retrieve the user ID and token from cookies
  const uid = getCookie("uid", { cookies });
  const token = getCookie("token", { cookies });

  // Fetch posts from the server using the user ID and token
  const postsFromServer = await getAllPosts(uid, token);

  return (
    <div>
      <div className="main-box">
        {/* Left side of the main box showing posts */}
        <div className="main-box-left">
          <MainPosts postsFromServer={postsFromServer} />
        </div>

        {/* Right side of the main box showing friends menu */}
        <div className="main-box-right">
          <SideFreindsMenue />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
