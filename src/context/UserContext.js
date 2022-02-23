import { createContext, useContext, useMemo, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(process.env.AUTH_EMAIL);
  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, setUser, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('must be used within userprovider');
  }
  return context;
};

export { UserProvider, useUser };
