'use client';
import { CartProvider } from '@/context/CartContext';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({ children }) => {
  return (
    <div>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <CartProvider>
          {children}
        </CartProvider>
      </SnackbarProvider>
    </div>
  )
}

export default Template;