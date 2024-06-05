"use client";

import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./chatBox.css";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Searchicon from "../../icons/searchicon";
import { useChatContext } from "@/utils/contexts/ChatContext";
import { getChatMessages } from "@/utils/api/chatApi";
import { getCookie } from "cookies-next";
import { CircularProgress } from "@mui/material";

export default function ChatBox() {
  const sender = getCookie("uid");
  const token = getCookie("token");
  const socketRef = useRef(null);
  const { currentChat } = useChatContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const socket = io("http://localhost:3005", { query: { id: sender } });
    socketRef.current = socket;
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    async function getAllChatMessages() {
      try {
        const mes = await getChatMessages(token, currentChat._id);
        setMessages(mes);
      } catch (error) {
        console.error(error);
      }
    }
    currentChat && getAllChatMessages();

    return () => {
      socket.disconnect();
    };
  }, [setMessages, currentChat]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const msg = {
        sender,
        chat_id: currentChat._id,
        content: message,
        type: "text",
        participants: currentChat.participants,
      };
      socketRef.current.emit("chat message", msg);
      setMessage("");
    }
  };

  return currentChat ? (
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
        {messages?.map((msg) => (
          <div
            key={msg._id}
            className={`row message ${msg.sender === sender && "right"}`}
          >
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
  ) : (
    <h1 className="chatBox-container">No Chat Selected</h1>
  );
}
