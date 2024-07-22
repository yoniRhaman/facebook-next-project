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
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utils/services/firebaseConfig";

export default function ChatBox() {
  const sender = getCookie("uid"); // Get the current user's ID from cookies
  const token = getCookie("token"); // Get the authentication token from cookies
  const messagesEndRef = useRef(null); // Ref to scroll to the bottom of the messages
  const socketRef = useRef(null); // Ref to store the socket connection
  const { currentChat } = useChatContext(); // Get the current chat from context
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file to upload
  const [message, setMessage] = useState(""); // State for the message input
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [loading, setLoading] = useState(false); // State to show loading indicator

  // Effect to handle socket connection and message fetching
  useEffect(() => {
    // Initialize socket connection
    const socket = io("http://localhost:3005", { query: { id: sender } });
    socketRef.current = socket;

    // Handle incoming chat messages
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Function to fetch all messages for the current chat
    async function getAllChatMessages() {
      try {
        const mes = await getChatMessages(token, currentChat._id);
        setMessages(mes);
      } catch (error) {
        console.error(error);
      }
    }

    // Fetch messages if a currentChat is selected
    if (currentChat) {
      getAllChatMessages();
    }

    // Cleanup socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [currentChat, sender, token]);

  // Effect to scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handler for file input change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to upload a file to Firebase Storage and return the download URL
  const handleUpload = async (image) => {
    const storageRef = ref(storage, `chatImages/${image.name}`);
    const result = await uploadBytes(storageRef, image);
    return await getDownloadURL(result.ref);
  };

  // Function to scroll to the bottom of the chat messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to send a message
  const sendMessage = async () => {
    if (message.trim() || selectedFile) {
      setLoading(true);
      const msgContent = selectedFile
        ? await handleUpload(selectedFile) // Upload file if selected
        : message; // Use text message if no file
      const msgType = selectedFile ? "image" : "text"; // Set message type

      const msg = {
        sender,
        chat_id: currentChat._id,
        content: msgContent,
        type: msgType,
        participants: currentChat.participants,
      };

      // Emit the message through the socket
      socketRef.current.emit("chat message", msg);
      setMessage(""); // Clear message input
      setSelectedFile(null); // Clear selected file

      setLoading(false);

      setTimeout(scrollToBottom, 100); // Scroll to bottom after a short delay
    }
  };

  return currentChat ? (
    <div className="chatBox-container">
      <div className="tow-first">
        <div className="chatBox-top row center">
          <div className="chatBox-left center">
            <button className="btn-chatBox-img center">
              <img
                src={
                  currentChat.user?.profileImg ??
                  "https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
                }
                alt="Profile"
              />
            </button>
            <p>{`${currentChat.user?.firstName} ${currentChat.user?.lastName}`}</p>
          </div>
          <div className="chatBox-right">
            <CloseIcon className="close-icon" />
          </div>
        </div>

        <div className="chatBox-middle">
          {messages?.map((msg) => (
            <div
              key={msg._id}
              className={`message ${
                msg.sender === sender ? "message-right" : "message-left"
              }`}
            >
              {msg.type === "text" ? (
                <p>{msg.content}</p>
              ) : (
                <img src={msg.content} alt="sent" className="chat-image" />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="chatBox-button row center">
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
            placeholder="write..."
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
          <button className="sendIcon-container" onClick={sendMessage}>
            <SendIcon className="sendIcon" />
          </button>
        )}
      </div>
    </div>
  ) : (
    <h1 className="chatBox-container">No Chat Selected</h1>
  );
}
