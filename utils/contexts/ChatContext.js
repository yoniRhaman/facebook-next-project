"use client";
import { createContext, useContext, useState } from "react";

// Create a context for managing chat data
const ChatContext = createContext();

/**
 * Custom hook to use the ChatContext
 * @returns {object} - The context value (chats, setChats, addChat, currentChat, setCurrentChat)
 */
export const useChatContext = () => useContext(ChatContext);

/**
 * ChatProvider component to wrap the children components
 * with ChatContext.Provider
 * @param {object} props - The properties passed to the component
 * @param {ReactNode} props.children - The child components that will consume the context
 * @returns {JSX.Element} - The ChatContext provider wrapping the children
 */
const ChatProvider = ({ children }) => {
  // State to hold the list of chats
  const [chats, setChats] = useState([]);
  // State to hold the current chat
  const [currentChat, setCurrentChat] = useState(null);

  /**
   * Function to add a new chat to the list of chats
   * @param {object} chat - The chat object to be added
   */
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
