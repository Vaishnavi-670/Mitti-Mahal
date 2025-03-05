'use client';
import useAdminContext from '@/context/AdminContext'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const { isAdminLoggedIn, adminLogout } = useAdminContext();

  const showLoggedInOptions = () => {
    if (isAdminLoggedIn) {
      return <button onClick={adminLogout} href="/signup" className="px-4 py-3 bg-red-900 text-white rounded-3xl hover:bg-red-500">Logout</button>
    } else {
      return <>
        <Link href="/login" className="px-4 py-2  text-black rounded-2xl">Login</Link>
        <Link href="/signup" className="px-4 py-3 bg-gray-900 text-white rounded-3xl hover:bg-black">Sign Up</Link>
      </>
    }
  }

  return (
    <nav className="bg-white py-2 flex justify-center">
      <div className="container h-20 w-[100%] flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img className='h-[200px] w-[200px]' src="/Logo.jpg"></img>
        </div>

        {/* Links Section */}
        <div className="space-x-8 text-lg text-gray-700">
          <Link href="/aboutus" className="hover:text-gray-900">AboutUs</Link>
          <Link href="/admin/manageuser" className="hover:text-gray-900">ManageUser</Link>
          <Link href="/admin/manageproduct" className="hover:text-gray-900">ManageProduct</Link>
          <Link href="/admin/manageorder" className="hover:text-gray-900">ManageOrder</Link>
          <Link href="/admin/managecontact" className="hover:text-gray-900">ManageContact</Link>

        </div>

        {/* Login/Signup Section */}
        <div className="space-x-4 text-lg">
          {showLoggedInOptions()}
        </div>
      </div>
    </nav>
  )
}

export default Navbar