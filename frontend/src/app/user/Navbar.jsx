'use client'
import { useUserContext } from '@/context/AppContext';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const context = useUserContext();
  const isLoggedIn = context?.isLoggedIn;
  const logout = context?.logout;

  const showLoggedInOptions = () => {
    if (isLoggedIn) {
      return <button onClick={logout} href="/signup" className="px-4 py-3 bg-red-900 text-white rounded-3xl hover:bg-red-500">Logout</button>
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
        <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        <Link href="/giftCard" className="hover:text-gray-900">Gift Card</Link>
        <Link href="/checkout" className="hover:text-gray-900">Checkout</Link>
        <Link href="/faq" className="hover:text-gray-900">FAQ</Link>
        <Link href="/user/manage-orders" className="hover:text-gray-900">MangeOrders</Link>
        <Link href="/features" className="hover:text-gray-900">Features</Link>

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