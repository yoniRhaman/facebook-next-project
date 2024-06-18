"use client";

import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export function useGroupContext() {
  return useContext(GroupContext);
}

export const GroupProvider = ({ children }) => {
  const [listGroup, setlistGroup] = useState([]);

  return (
    <GroupContext.Provider value={{ listGroup, setlistGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
