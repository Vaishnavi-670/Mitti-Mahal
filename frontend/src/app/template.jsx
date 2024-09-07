'use client';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({children}) => {
  return (
    <div>
        <SnackbarProvider anchorOrigin={{horizontal: 'center', vertical : 'top'}}>
          {children}
        </SnackbarProvider>
    </div>
  )
}

export default Template;