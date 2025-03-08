import React, { createContext, useState, useEffect, useContext } from 'react';
const ISSERVER = typeof window === "undefined";

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        // Load cart data from localStorage
        const savedCart = !ISSERVER ? localStorage.getItem('cart') : null;
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart data to localStorage whenever it changes
        !ISSERVER && localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (newItem) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(item => item._id === newItem._id);
            if (itemIndex !== -1) {
                // Item already exists, increment the quantity
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].qty += 1;
                return updatedCart;
            } else {
                // Item does not exist, add it to the cart with quantity 1
                return [...prevCart, {...newItem, qty: 1}];
            }
        });
    };

    const checkItemInCart = (item) => {
        if (!item) return false;
        return cart.some(cartItem => cartItem._id === item._id);
    };

    const incrementQty = (itemId) => {
        setCart(prevCart => 
          prevCart.map(item => 
            item._id === itemId ? {...item, qty: item.qty + 1} : item
          )
        );
    };
    
    const decrementQty = (itemId) => {
        setCart(prevCart => 
          prevCart.map(item => 
            item._id === itemId && item.qty > 1 ? {...item, qty: item.qty - 1} : item
          )
        );
    };
    
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.qty), 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            checkItemInCart,
            incrementQty,
            decrementQty,
            calculateTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => useContext(CartContext);
export default useCartContext;