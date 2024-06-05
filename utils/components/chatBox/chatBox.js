"use client";

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./chatBox.css";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Searchicon from "../../icons/searchicon";
import { useChatContext } from "@/utils/contexts/ChatContext";
import { createNewChat } from "@/utils/api/chatApi";
import { getCookie } from "cookies-next";
import { CircularProgress } from "@mui/material";

export default function ChatBox({ chat }) {
  let socket;
  const sender = getCookie("uid");
  const [currentChat, setChat] = useState(chat);
  const { chats, addChat } = useChatContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chat.messages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket = io("http://localhost:3005");

    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [addChat]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const msg = {
        sender,
        chat_id: chat._id,
        content: message,
        type: "text",
        participants: chat.participants,
      };
      socket.emit("chat message", msg);
      addChat(msg);
      setMessage("");
    }
  };

  return (
    <div className="chatBox-container">
      <div className="chatBox-top row center">
        <div className="chatBox-left center">
          <button className="btn-chatBox-img center">
            <img
              src="https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
              alt="Profile"
            />
          </button>
          <p>name of profile</p>
        </div>
        <div className="chatBox-right">
          <CloseIcon className="close-icon" />
        </div>
      </div>
      <div className="chatBox-middle">
        {messages.map((msg) => (
          <div key={msg._id} className="message">
            {msg.type === "text" ? (
              <p>{msg.content}</p>
            ) : (
              <img src={msg.content} />
            )}
          </div>
        ))}
      </div>
      <div className="chatBox-button row">
        <label htmlFor="file-input">
          <AddPhotoAlternateIcon className="addPhoto-icon" />
        </label>
        <input
          className="chatBox-button-input"
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="search-input2 row center">
          <Searchicon />
          <input
            type="text"
            name="search"
            placeholder="what would you like to write"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
        </div>
        {loading ? (
          <CircularProgress />
        ) : (
          <button onClick={sendMessage}>
            <SendIcon className="sendIcon" />
          </button>
        )}
      </div>
    </div>
  );
}
