"use client";
import { useChatContext } from "@/utils/contexts/ChatContext";
import Searchicon from "../../icons/searchicon";
import "./chats.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Chats() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize the state

  const { chatMessages } = useChatContext();
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
          <button
            className="button-create"
            role="button"
            onClick={handleCreateChatClick}
          >
            <FaPlus /> Create New chat
          </button>
          <input type="text" name="search" placeholder="Search Messenger" />
        </div>
      </div>
      {chatMessages.map((message, index) => (
        <button key={index} className="btn-chats-Messenger row center gap-20">
          <button className="btn-chats-img">
            <img
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="Profile"
            />
          </button>
          <p>{message.message}</p> {/* Correctly render the message property */}
        </button>
      ))}
      {isModalOpen && <CreatC onClose={closeModal} />}
    </div>
  );
}
