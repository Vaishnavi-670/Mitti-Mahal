'use client';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({ children }) => {
  return (
    <div>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <CartProvider>
          <WishlistProvider>

          {children}
          </WishlistProvider>
        </CartProvider>
      </SnackbarProvider>
    </div>
  )
}

export default Template;