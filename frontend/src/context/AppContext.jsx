
import React, { createContext, useState, useEffect } from 'react';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Load login state from localStorage
    const savedLoginState = localStorage.getItem('isLoggedIn');
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });

  useEffect(() => {
    // Save login state to localStorage whenever it changes
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);


  const logout = () => { 
    setIsLoggedIn([]);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn,setIsLoggedIn, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };