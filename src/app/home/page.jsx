import React from 'react'

const Home = () => {
  return (
    <>
      <div className='h-[100vh] w-[100%] bg-gray-50'>
        <div className='flex flex-col h-screen'>
          <img className='object-cover rounded-e-full' src="https://sothebys-com.brightspotcdn.com/76/45/1de85a4a4a7f915016c4802bcd28/hk1219-marketing-hero.jpg" alt="" />
          {/* <div className='flex flex-col items-center justify-center bottom-0 h-screen'>
          <h1 className='text-4xl font-bold bottom-0 text-black'>Welcome to Sotheby's</h1>
          <p className='text-xl text-gray-400'>Discover the world's finest collection of luxury items</p>
        </div> */}
        </div> 
         {/* <div className='flex justify-center items-center h-screen'>
          <button className='px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700'>Discover Now</button>
        </div> */}
       

      </div>
    </>
  )
}

export default Home