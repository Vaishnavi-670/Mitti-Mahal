import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
const ISSERVER = typeof window === "undefined";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(
        () => {
            // Load cart data from localStorage
            const savedCart = !ISSERVER ? localStorage.getItem('wishlist') : null;
            return savedCart ? JSON.parse(savedCart) : [];
        }
    );

    // Function to add an item to the wishlist
    const addToWishlist = (newItem) => {
        console.log(wishlist);

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

    const checkItemInWishlist = (itemId) => {
        return wishlist.some(item => item._id === itemId);

    };

    useEffect(() => {
        !ISSERVER && localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, checkItemInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
const useWishlistContext = () => useContext(WishlistContext);

export default useWishlistContext;