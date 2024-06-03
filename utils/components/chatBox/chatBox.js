"use client";

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./chatBox.css";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Searchicon from "../../icons/searchicon";
import { useChatContext } from "@/utils/contexts/ChatContext";

let socket;

export default function ChatBox({ chat_id }) {
  const [chatId, setChatId] = useState(chat_id);
  const { chatMessages, addMessage } = useChatContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io("http://localhost:3005");

    socket.on("chat message", (msg) => {
      addMessage(msg);
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { message, timestamp: new Date(), senderId: "user1", receiverId: "user2" }; // Example structure
      socket.emit("chat message", msg);
      addMessage(msg);
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
        {chatMessages.map((msg, index) => (
          <div key={index} className="message">
            {msg.message}
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
        </div>
        <button onClick={sendMessage}>
          <SendIcon className="sendIcon" />
        </button>
      </div>
    </div>
  );
}
