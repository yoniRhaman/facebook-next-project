import "./massagesPage.css"; // Importing CSS for styling the MessagesPage component
import { getUserChat } from "@/utils/api/chatApi"; // Importing function to fetch user chat data
import ChatBox from "@/utils/components/chatBox/chatBox"; // Importing ChatBox component for displaying and sending messages
import Chats from "@/utils/components/chats/chats"; // Importing Chats component to display list of chats
import { Chat } from "@mui/icons-material"; // Importing Chat icon from Material-UI
import { getCookie } from "cookies-next"; // Importing function to get cookies
import { cookies } from "next/headers"; // Importing cookies utility from Next.js

/**
 * MessagesPage component displays the user's chat interface, including a list of chats and a chat box.
 * It fetches chat data from the server and renders two main sections: a chat list and the active chat box.
 *
 * @returns {JSX.Element} The rendered MessagesPage component with chat list and chat box.
 */
async function MessagesPage() {
  // Retrieve the JWT token and user ID from cookies
  const token = getCookie("token", { cookies });
  const id = getCookie("uid", { cookies });

  // Fetch the list of chats for the user from the server
  const chatsFromServer = await getUserChat(token, id);

  return (
    <div className="row">
      {/* Left box for displaying the list of chats */}
      <div className="left-box">
        <Chats chatsFromServer={chatsFromServer} /> {/* Render the Chats component with chat data */}
      </div>
      
      {/* Right box for displaying the chat box to view and send messages */}
      <div className="right-box">
        <ChatBox /> {/* Render the ChatBox component for chat interactions */}
      </div>
    </div>
  );
}

export default MessagesPage; // Export MessagesPage as the default export
