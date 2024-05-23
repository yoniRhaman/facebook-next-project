import ChatBox from "@/utils/components/chatBox/chatBox";
import GroupsList from "@/utils/components/groupsList/groupsList";

export default function GroupsPage() {
  return (
    <div className="row">
      <GroupsList />
      <ChatBox />
    </div>
  );
}
