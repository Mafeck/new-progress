import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('@newProgress:user')) || {});
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('@newProgress:token')) || []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
