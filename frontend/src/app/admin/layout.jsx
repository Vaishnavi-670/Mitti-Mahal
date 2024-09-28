import React from 'react'
import Navbar from './Navbar'
import { AdminProvider } from '@/context/AdminContext'

const Layout = ({ children }) => {
    return (
        <AdminProvider>
            <Navbar />
            {children}
        </AdminProvider>
    )
}

export default Layout