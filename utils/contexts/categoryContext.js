"use client";
import { createContext, useState } from "react";

// Create a context for managing the shared category
export const CategoryContext = createContext();

/**
 * CategoryProvider component to wrap the children components
 * with CategoryContext.Provider
 * @param {object} props - The properties passed to the component
 * @param {ReactNode} props.children - The child components that will consume the context
 * @returns {JSX.Element} - The CategoryContext provider wrapping the children
 */
export const CategoryProvider = ({ children }) => {
  // State to hold the shared category
  const [sharedCategory, setSharedCategory] = useState("");

  /**
   * Function to update the shared category
   * @param {string} newValue - The new category value to be set
   */
  const updateSharedCategory = (newValue) => {
    setSharedCategory(newValue);
  };

  return (
    <CategoryContext.Provider value={{ sharedCategory, updateSharedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
