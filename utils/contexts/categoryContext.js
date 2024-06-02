"use client";
import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [sharedCategory, setSharedCategory] = useState("");

  const updateSharedCategory = (newValue) => {
    setSharedCategory(newValue);
  };

  return (
    <CategoryContext.Provider value={{ sharedCategory, updateSharedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
