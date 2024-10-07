import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  

  // Function to add an item to the wishlist
  const addToWishlist = (newItem) => {
    setWishlist((prevWishlist) => {
      const itemIndex = prevWishlist.findIndex(item => item._id === newItem._id);
      if (itemIndex !== -1) {
        // Item already exists in the wishlist
        return prevWishlist;
      } else {
        // Item does not exist, add it to the wishlist
        return [...prevWishlist, newItem];
      }
    });
  };

  // Fetch the wishlist when the component mounts
//   useEffect(() => {
//     fetchWishlist();
//   }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlistContext = () => useContext(WishlistContext);

export default useWishlistContext;