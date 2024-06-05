"use client";
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const addChat = (chat) => {
    setChats((prevChat) => [...prevChat, chat]);
  };

  return (
    <ChatContext.Provider
      value={{ chats, setChats, addChat, currentChat, setCurrentChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
