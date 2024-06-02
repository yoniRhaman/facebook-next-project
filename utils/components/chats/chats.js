"use client";
import { useChatContext } from "@/utils/contexts/ChatContext";
import Searchicon from "../../icons/searchicon";
import "./chats.css";

export default function Chats() {
  const { messages } = useChatContext();

  return (
    <div className="chats-container column">
      <div className="search-top-container">
        <div className="top-container">
          <h1>Chats</h1>
        </div>
        <div className="search-input1 row center">
          <Searchicon />
          <input type="text" name="search" placeholder="Search Messenger" />
        </div>
      </div>
      {messages.map((message, index) => (
        <button key={index} className="btn-chats-Messenger row center gap-20">
          <button className="btn-chats-img">
            <img
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="משהו"
            />
          </button>
          <p>{message.message}</p> {/* Ensure you're accessing the message property */}
        </button>
      ))}
    </div>
  );
}
