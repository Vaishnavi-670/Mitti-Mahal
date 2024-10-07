import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to fetch the wishlist from the backend
  const fetchWishlist = async () => {
    try {
      const response = await axios.get('http://localhost:5000/wishlist');
      setWishlist(response.data);
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
    }
  };

  // Function to add an item to the wishlist
  const addToWishlist = async (item) => {
    try {
      const response = await axios.post('http://localhost:5000/wishlist', item);
      setWishlist((prevWishlist) => [...prevWishlist, response.data]);
    } catch (error) {
      console.error('Failed to add item to wishlist:', error);
    }
  };

  // Fetch the wishlist when the component mounts
  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, fetchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };