import ChatBox from "@/utils/components/chatBox/chatBox";
import Chats from "@/utils/components/chats/chats";
import { useChatContext } from "@/utils/contexts/ChatContext";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default function messagesPage() {
  const token = getCookie("token", { cookies });

  // const chats = awai
  return (
    <div className="row">
      <Chats chats={[]} />
      {/* <ChatBox /> */}
    </div>
  );
}
