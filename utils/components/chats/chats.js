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
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize the state
  const { chats, setChats } = useChatContext();

  useEffect(() => {
    if (Array.isArray(chatsFromServer)) {
      setChats(chatsFromServer);
    }
  }, [setChats]);

  const handleCreateChatClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // CClose the modal
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
        <button
          className="button-create"
          role="button"
          onClick={handleCreateChatClick}
        >
          <FaPlus /> Create New chat
        </button>
        {/* <input type="text" name="search" placeholder="Search Messenger" /> */}
      </div>
      {chats?.map((chat) => (
        <ChatItem chat={chat} />
      ))}
      {isModalOpen && <CreateChat onClose={closeModal} />}
    </div>
  );
}

function ChatItem({ chat }) {
  const uid = getCookie("uid");
  const token = getCookie("token");
  const [user, setUser] = useState(null);
  const { setCurrentChat } = useChatContext();

  useEffect(() => {
    async function getUser() {
      try {
        if (chat.participants.length > 2) {
        } else {
          const u = await getUserData(
            token,
            chat.participants.filter((p) => p !== uid)[0]
          );
          setUser(u);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return user ? (
    <button
      key={chat._id}
      className="btn-chats-Messenger row center gap-20"
      onClick={() => setCurrentChat(chat)}
    >
      <button className="btn-chats-img">
        <img
          src={
            user.profileImg ??
            "https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
          }
          alt="Profile"
        />
      </button>
      <p>{`${user.firstName} ${user.lastName}`}</p>
      {/* Correctly render the message property */}
    </button>
  ) : (
    <CircularProgress key={chat._id} />
  );
}
