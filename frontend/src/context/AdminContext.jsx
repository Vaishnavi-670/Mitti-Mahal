'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect, useContext } from 'react';
const ISSERVER = typeof window === undefined;


const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  const router = useRouter();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    // Load admin login state from localStorage
    const savedAdminLoginState = !ISSERVER ? localStorage.getItem('admin') : '';
    return savedAdminLoginState ? JSON.parse(savedAdminLoginState) : false;
  });

  // useEffect(() => {
  //   // Save admin login state to localStorage whenever it changes
  //   localStorage.setItem('admin', JSON.stringify(isAdminLoggedIn));
  // }, [isAdminLoggedIn]);


  const adminLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    !ISSERVER ? localStorage.removeItem('admin') :'';
    setIsAdminLoggedIn(false);
    router.replace('/login');
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn,setIsAdminLoggedIn, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
};

const useAdminContext = () => useContext(AdminContext);
export default useAdminContext;