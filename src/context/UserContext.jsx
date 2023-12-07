import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, [name]);

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
