import "./massagesPage.css"
import { getUserChat } from "@/utils/api/chatApi";
import ChatBox from "@/utils/components/chatBox/chatBox";
import Chats from "@/utils/components/chats/chats";
import { Chat } from "@mui/icons-material";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function MessagesPage() {
  const token = getCookie("token", { cookies });
  const id = getCookie("uid", { cookies });

  const chatsFromServer = await getUserChat(token, id);
  return (
    <div className="row">
      <div className="left-box">
        <Chats chatsFromServer={chatsFromServer} />
      </div>
      <div className="right-box">
        <ChatBox />
      </div>
    </div>
  );
}

export default MessagesPage;
