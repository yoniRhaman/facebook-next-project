import { getAllGroups } from "@/utils/api/groupsApi";
import { getAllPosts } from "@/utils/api/postsApi";
import GroupsList from "@/utils/components/groupsList/groupsList";
import MainPosts from "@/utils/components/mainBox/posts/mainPosts";
import PostGroups from "@/utils/components/postGroups/postGroups";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function GroupsPage() {
  const groupFromServer = await getAllGroups(getCookie("token", { cookies }));
  // const postsFromServer = await getAllPosts(getCookie("token", { cookies }));

  return (
    <div className="row">
      <GroupsList groupFromServer={groupFromServer} />
      {/* <MainPosts postsFromServer={postsFromServer} /> */}

      {/* <PostGroups /> */}
    </div>
  );
}

export default GroupsPage;
