'use client'
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect, useContext } from 'react';
const ISSERVER = typeof window === undefined;

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Load login state from localStorage
    const savedLoginState = !ISSERVER ? localStorage.getItem('user') :'';
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });
  useEffect(() => { 
    
    // Save login state to localStorage whenever it changes
    !ISSERVER ? localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn)) :'';
  }, [isLoggedIn]);

  const logout = () => { 

    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('user');
    setIsLoggedIn([]);
    router.replace('/login');
  };
  return (
    <AppContext.Provider value={{ isLoggedIn,setIsLoggedIn, logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useUserContext = () => useContext(AppContext);
export default useUserContext;