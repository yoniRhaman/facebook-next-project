"use client";
import { useChatContext } from "@/utils/contexts/ChatContext";
import Searchicon from "../../icons/searchicon";
import "./chats.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateChat from "../createChat/createChat";
import { getUserData } from "@/utils/api/loginApi";
import { getCookie } from "cookies-next";
import { CircularProgress } from "@mui/material";

export default function Chats({ chatsFromServer }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const { chats, setChats } = useChatContext(); // Get chats and setChats from context

  // Update chats context when chatsFromServer is provided
  useEffect(() => {
    if (Array.isArray(chatsFromServer)) {
      setChats(chatsFromServer);
    }
  }, [chatsFromServer, setChats]);

  // Open the modal to create a new chat
  const handleCreateChatClick = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="chats-container column">
      <div className="search-top-container">
        <div className="top-container">
          <h1>Chats</h1>
        </div>
        <div className="search-input1 row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search chats" />
        </div>
      </div>
      <div>
        <button
          className="button-create"
          role="button"
          onClick={handleCreateChatClick}
        >
          <FaPlus /> Create New chat
        </button>
      </div>
      {/* Map through chats and render each ChatItem */}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={chat._id} />
      ))}
      {/* Render CreateChat modal if isModalOpen is true */}
      {isModalOpen && <CreateChat onClose={closeModal} />}
    </div>
  );
}

// Subcomponent to render individual chat item
function ChatItem({ chat }) {
  const uid = getCookie("uid"); // Get the current user's ID from cookies
  const token = getCookie("token"); // Get the authentication token from cookies
  const [localUser, setLocalUser] = useState(null); // State to store local user details
  const { setCurrentChat } = useChatContext(); // Set the current chat in context

  // Fetch user data when chat changes
  useEffect(() => {
    async function getUser() {
      try {
        // Determine the other participant in the chat
        const participantId = chat.participants.filter((p) => p !== uid)[0];
        const user = await getUserData(token, participantId);
        setLocalUser(user); // Set local user data
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [chat, uid, token]);

  return localUser ? (
    <button
      className="btn-chats-Messenger row center gap-20"
      onClick={() => setCurrentChat({ ...chat, user: localUser })}
    >
      <button className="btn-chats-img">
        <img
          src={
            localUser.profileImg ??
            "https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
          }
          alt="Profile"
        />
      </button>
      <p>{`${localUser.firstName} ${localUser.lastName}`}</p>
    </button>
  ) : (
    <CircularProgress /> // Show loading spinner if localUser is not yet set
  );
}
