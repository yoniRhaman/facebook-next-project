import { getAllGroups } from "@/utils/api/groupsApi";
import ChatBox from "@/utils/components/chatBox/chatBox";
import GroupsList from "@/utils/components/groupsList/groupsList";
import PostGroups from "@/utils/components/postGroups/postGroups";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function GroupsPage() {
  const groupFromServer = await getAllGroups(getCookie("token", { cookies }));

  return (
    <div className="row">
      <GroupsList groupFromServer={groupFromServer} />

      <PostGroups />

      {/* <ChatBox /> */}
    </div>
  );
}

export default GroupsPage;
