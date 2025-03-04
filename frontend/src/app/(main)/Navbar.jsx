'use client';
import useCartContext from '@/context/CartContext';
import { IconGardenCart } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const { cart, isLoggedIn } = useCartContext();
  const [menuOpen, setMenuOpen] = useState([]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const showLoggedInOptions = () => {
    if (isLoggedIn) {
      return <button onClick={logout} href="/signup" className="px-4 py-3 bg-red-900 text-white rounded-3xl hover:bg-red-500 text-sm md:text-base">Logout</button>
    } else {
      return <>
        <Link href="/login" className="px-4 py-2 text-black rounded-2xl md:text-base">Login</Link>
        <Link href="/signup" className="px-4 py-3 bg-gray-900 text-white rounded-3xl md:text-base text-sm hover:bg-black">Sign Up</Link>
      </>
    }
  }


  return (
    <nav className="bg-white py-2 flex justify-center items-center px-4 md:px-8 lg:px-16 relative">
      <div className="container h-20 w-[100%] flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <img className='h-[200px] w-[200px]' src="/Logo.jpg"></img>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 text-sm md:text-base">
          ☰
        </button>

        {/* Links Section */}
        <div className={`absolute md:static top-16 left-0 w-full bg-white md:bg-transparent flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-lg text-gray-700 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}>
          <Link href="/aboutus" className="hover:text-gray-900 block py-2 px-4 md:inline">About Us</Link>
          <Link href="/contact" className="hover:text-gray-900 block py-2 px-4 md:inline">Contact</Link>
          <Link href="/faq" className="hover:text-gray-900 block py-2 px-4 md:inline">FAQ</Link>
          <Link href="/features" className="hover:text-gray-900 block py-2 px-4 md:inline">Features</Link>
          <Link href="/user/cart" className="hover:text-gray-900 block py-2 px-4 md:inline">
            <IconGardenCart className='inline-flex' />
             </Link>
        </div>

        {/* Login/Signup Section */}
        <div className="hidden md:flex text-sm space-x-4 md:text-lg">
          {showLoggedInOptions()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
