import React, { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
