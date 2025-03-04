import React, { createContext, useContext, useState } from 'react';

// Buat context
const UserContext = createContext(null);

// Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook untuk menggunakan context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext harus digunakan dalam UserProvider');
  }
  return context;
};
