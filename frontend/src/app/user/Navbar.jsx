import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    

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
        <Link href="/manage-orders" className="hover:text-gray-900">MangeOrders</Link>
        <Link href="/features" className="hover:text-gray-900">Features</Link>

      </div>

      {/* Login/Signup Section */}
      <div className="space-x-4 text-lg">
        <Link href="/login" className="px-4 py-2  text-black rounded-2xl">Login</Link>
        <Link href="/signup" className="px-4 py-3 bg-gray-900 text-white rounded-3xl hover:bg-black">Sign Up</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar