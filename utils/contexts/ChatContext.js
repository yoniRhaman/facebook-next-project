"use client";
import { createContext, useContext, useState } from "react";

export const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export default function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (messages) => {
    setMessages((prevMessages) => [...prevMessages, messages]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
