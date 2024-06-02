"use client";

import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export function useGroupContext() {
  return useContext(GroupContext);
}

export const GroupProvider = ({ children }) => {
  const [sharedGroup, setSharedGroup] = useState([]);

  return (
    <GroupContext.Provider value={{ sharedGroup, setSharedGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
