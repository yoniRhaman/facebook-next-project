"use client";

import { createContext, useContext, useState } from "react";

// Create a context for managing group data
const GroupContext = createContext();

/**
 * Custom hook to use the GroupContext
 * @returns {object} - The context value (listGroup and setlistGroup)
 */
export function useGroupContext() {
  return useContext(GroupContext);
}

/**
 * GroupProvider component to wrap the children components
 * with GroupContext.Provider
 * @param {object} props - The properties passed to the component
 * @param {ReactNode} props.children - The child components that will consume the context
 * @returns {JSX.Element} - The GroupContext provider wrapping the children
 */
export const GroupProvider = ({ children }) => {
  // State to hold the list of groups
  const [listGroup, setlistGroup] = useState([]);

  return (
    <GroupContext.Provider value={{ listGroup, setlistGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
