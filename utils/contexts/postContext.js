"use client";

import { createContext, useContext, useState } from "react";

// Create a context for the post state
const PostContext = createContext();

/**
 * Custom hook to use the PostContext
 * @returns {Object} The context value containing sharedPosts and setSharedPosts
 */
export function usePostContext() {
  return useContext(PostContext);
}

/**
 * PostProvider component to provide post state to its children.
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The children components that will have access to the post context.
 * @returns {JSX.Element} The PostContext provider component.
 */
export const PostProvider = ({ children }) => {
  // State to hold the shared posts
  const [sharedPosts, setSharedPosts] = useState([]);

  return (
    // Provide the post state and setter function to the context
    <PostContext.Provider value={{ sharedPosts, setSharedPosts }}>
      {children}
    </PostContext.Provider>
  );
};
