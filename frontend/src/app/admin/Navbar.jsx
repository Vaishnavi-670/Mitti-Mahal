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
        <Link href="/aboutus" className="hover:text-gray-900">AboutUs</Link>
        <Link href="/manageuser" className="hover:text-gray-900">ManageUser</Link>
        <Link href="/manageproduct" className="hover:text-gray-900">ManageProduct</Link>
        
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