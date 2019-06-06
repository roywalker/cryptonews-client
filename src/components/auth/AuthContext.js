import React, { useEffect, useState, createContext } from 'react';

export const UserContext = createContext([{}, () => {}]);

const AuthContext = ({ children }) => {
  const storedUser = JSON.parse(window.localStorage.getItem('user')) || false;
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
