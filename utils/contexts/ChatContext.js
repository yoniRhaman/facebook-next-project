"use client";
import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const addMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatContext.Provider value={{ chatMessages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
