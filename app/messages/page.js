import ChatBox from "@/utils/components/chatBox/chatBox";
import Chats from "@/utils/components/chats/chats";

export default function messagesPage() {
  return (
    <div className="row">
      <Chats />
      <ChatBox />
    </div>
  );
}


