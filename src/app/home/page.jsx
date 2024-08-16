'use client'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className="pt-24 bg-white">
        <div className=" mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Discover</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-gray-400 to-red-500 lg:inline">
                the art of clay crafting
              </span>{" "}
              <span>with our products</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Unleash your creativity with our premium clay products. Perfect for artists of all levels, our clay is designed to help you bring your visions to life.
            </p>
            <div className=" space-x-0 md:space-x-2 ">
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-red-400 rounded-2xl sm:w-auto sm:mb-0"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-6 py-3  text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='h-[85vh] w-[100%] bg-gray-50'>
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
<div className='mt-0'>
  <div className='flex justify-center'>
    <h1 className='text-3xl font-bold'>Our Gallery</h1>
  </div>
  <div className="p-8 grid-wrapper">
  <div >
    <img
      src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""
    />
  </div>
  <div >
    <img
      src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      alt=""
    />
  </div>
  <div className="tall">
    <img
      src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
  </div>
  <div className="wide">
    <img
      src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""
    />
  </div>
  <div>
    <img
      src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
      alt=""
    />
  </div>
  <div className="tall">
    <img
      src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
      alt=""
    />
  </div>
  <div className="big">
    <img
      src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
      alt=""
    />
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
      alt=""
    />
  </div>
  <div className="wide">
    <img
      src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""
    />
  </div>
  <div className='gallery'>
    <img
      src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""
    />
  </div>
  <div className='gallery'>
    <img
      src="https://images.unsplash.com/photo-1433446787703-42d5bf446876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      alt=""
    />
  </div>
</div>
</div>

      </section>

    </>
  )
}

export default Home