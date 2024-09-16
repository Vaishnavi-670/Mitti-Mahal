import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        // Load cart data from localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart data to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
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
                return [...prevCart, { ...newItem, qty: 1 }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item._id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQty = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => {
                if (item._id === itemId) {
                    return { ...item, qty: item.qty + 1 };
                }
                return item;
            });
            return updatedCart;
        });
    };

    const decrementQty = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => {
                if (item._id === itemId) {
                    return { ...item, qty: item.qty - 1 };
                }
                return item;
            }).filter(item => item.qty > 0);
            return updatedCart;
        });
    };

    const checkItemInCart = (item) => {
        const itemIndex = cart.findIndex(i => i._id === item._id);
        if (itemIndex === -1) {
            return false;
        }
        return true;
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
          return total + item.price * item.qty;
        }, 0);
      };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, incrementQty, decrementQty, checkItemInCart,calculateTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => useContext(CartContext);

export default useCartContext;