import React from 'react'

const Home = () => {
  return (
    <>
      <section className="pt-24 bg-white">
        <div className=" mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Start</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                building a buzz
              </span>{" "}
              <span>around your product ?</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Start gaining the traction you've always wanted with our next-level
              templates and designs. Crafted to help you tell your story.
            </p>
            <div className=" space-x-0 md:space-x-2 ">
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
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
      </section>

    </>
  )
}

export default Home