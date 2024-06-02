"use client";

import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export function usePostContext() {
  return useContext(PostContext);
}

export const PostProvider = ({ children }) => {
  const [sharedPosts, setSharedPosts] = useState([]);

  return (
    <PostContext.Provider value={{ sharedPosts, setSharedPosts }}>
      {children}
    </PostContext.Provider>
  );
};
