'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect, useContext } from 'react';

const ISSERVER = typeof window === "undefined";

// Create the context
export const AppContext = createContext(null);

// Create the context hook
export const useUserContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useUserContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Load login state from localStorage only on client-side
    if (!ISSERVER) {
      const savedLoginState = localStorage.getItem('user');
      return savedLoginState ? true : false;
    }
    return false;
  });

  const logout = () => {
    if (!ISSERVER) {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem('user');
    }
    setIsLoggedIn(false);
    router.replace('/login');
  };
  
  const value = { isLoggedIn, setIsLoggedIn, logout };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Default export for backward compatibility
export default useUserContext;