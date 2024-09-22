import React, { createContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    // Load admin login state from localStorage
    const savedAdminLoginState = localStorage.getItem('isAdminLoggedIn');
    return savedAdminLoginState ? JSON.parse(savedAdminLoginState) : false;
  });

  useEffect(() => {
    // Save admin login state to localStorage whenever it changes
    localStorage.setItem('isAdminLoggedIn', JSON.stringify(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  const adminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn,setIsAdminLoggedIn, adminLogin, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext };