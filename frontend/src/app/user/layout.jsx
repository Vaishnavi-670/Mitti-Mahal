import React from 'react'
import Navbar from './Navbar'
import { AppProvider } from '@/context/AppContext'

const Layout = ({ children }) => {
    return (
        <AppProvider>    
        <Navbar/>   
            {children}
        </AppProvider>
    )
}

export default Layout