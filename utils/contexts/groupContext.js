"use client";
import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export const useGroupContext = () => useContext(GroupContext);

export default function GroupProvider({ children }) {
  const [groups, setGroups] = useState([]);
  return (
    <GroupContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupContext.Provider>
  );
}
