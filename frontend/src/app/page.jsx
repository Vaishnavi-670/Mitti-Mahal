'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef}>
      <section className="pt-24 bg-white">
        <div className=" mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className=" mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span className='text1'>Discover</span>{" "}
              <span className=" text2 block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-gray-400 to-red-500 lg:inline">
                the art of clay crafting
              </span>{" "}
              <span className='text1'>with our products</span>
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
          </div>
        </div>
        <div className='mt-0'>
          <div className='flex justify-center flex-col'>
            <h1 className='text-5xl font-bold text-red-950 text-center'>Our Gallery</h1>
            <p className="text-gray-900 font- text-xl mt-5 text-center"> Explore the Beauty of Handcrafted Art: A Curated Collection of Unique Clay Creations, Each Piece Telling Its Own Story,  <br />Immerse yourself in our gallery, where every handcrafted clay creation tells a unique story</p>
          </div>
          <div className="p-8 mt-5 grid-wrapper">
            <div >
              <img className='object-cover'
                src="https://i.pinimg.com/236x/01/a1/1a/01a11a014d8c3690c5bd2021e257f713.jpg"
                alt=""
              />
            </div>
            <div >
              <img
                src="https://i.pinimg.com/236x/01/19/6f/01196fd141c5be39e9ac1a375a267007.jpg"
                alt=""
              />
            </div>
            <div className="tall">
              <img
                src="https://i.pinimg.com/236x/9a/fb/75/9afb7581ea0b50307d7ec9e7876bc026.jpg"
                alt=""
              />
            </div>
            <div className="wide object-cover">
              <img
                src="https://i.pinimg.com/564x/5c/59/50/5c5950be2c19d678e1939e7fe30675c5.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src=" https://i.pinimg.com/236x/cd/2e/83/cd2e83a5ef5996dcbfd83e721700b0a1.jpg"
                alt=""
              />
            </div>
            <div className="tall">
              <img
                src="https://i.pinimg.com/236x/56/b9/eb/56b9ebe0630d263c852b772e7c3c2f38.jpg"
                alt=""
              />
            </div>
            <div className="big">
              <img
                src="https://i.pinimg.com/564x/96/a9/81/96a981454ffcc57b07875f81c96ed91c.jpg"
                alt=""
              />
            </div>
            <div>
              <img className='object-contain'
                src="https://i.pinimg.com/236x/af/77/48/af77480560cc4048cf5b477826a91607.jpg"
                alt=""
              />
            </div>
            <div className="wide object-cover">
              <img
                src="https://i.pinimg.com/564x/5d/19/04/5d1904b44e7e78f088c1da10a315ce81.jpg"
                alt=""
              />
            </div>
            <div className='gallery'>
              <img
                src="https://i.pinimg.com/236x/5d/5c/1c/5d5c1cdf80da3880d2fe69bea00c7c36.jpg"
                alt=""
              />
            </div>
            <div className='gallery'>
              <img
                src="https://i.pinimg.com/236x/0c/68/3b/0c683bbeb73333d513b05e982854dc47.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center flex-col'>
          <div className='flex justify-center flex-col'>
            <h1 className='text-5xl font-bold mt-6 text-red-950 text-center'> Latest Product</h1>
            <p className="text-gray-900  text-xl mt-5 text-center"> Introducing Our Latest Masterpiece: Where Innovation Meets Timeless Craftsmanship</p>
          </div>
        </div>
        <div className='flex mt-7 justify-around p-8'>
          <div className=" group cursor-pointer group overflow-hidden relative text-gray-50 h-96 w-80  rounded-2xl hover:duration-700 duration-700">
            <div className="w-80 h-96 text-gray-800">
              <img className="w-80 h-96" src="https://i.pinimg.com/236x/39/d0/8e/39d08ea5e44e107003d6fa7ae3a738a6.jpg" alt="" />
            </div>
            <div className="absolute bg-transparent -bottom-16 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-black font-bold text-3xl">Caramic Bottle</span>
              {/* <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span> */}
              <p className="text-neutral-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" group cursor-pointer group overflow-hidden relative text-gray-50 w-80 h-96  rounded-2xl hover:duration-700 duration-700">
            <div className="w-80 h-96  text-gray-800">
              <img className="w-80 h-96" src="https://i.pinimg.com/236x/6c/e5/73/6ce573c2e30bef90a91ee2a0413e48ea.jpg" alt="" />
            </div>
            <div className="absolute bg-transparent -bottom-16 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-black font-bold text-3xl">Caramic Plate </span>
              {/* <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span> */}
              <p className="text-neutral-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" group cursor-pointer group overflow-hidden relative text-gray-50 w-80 h-96  rounded-2xl hover:duration-700 duration-700">
            <div className="w-80 h-96  text-gray-800">
              <img className="w-80 h-96" src="https://i.pinimg.com/236x/7e/16/78/7e1678cce31fb1f9ddd9a216573162af.jpg" alt="" />
            </div>
            <div className="absolute bg-transparent -bottom-16 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-black font-bold text-3xl">Caramic Bowl
              </span>
              {/* <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span> */}
              <p className="text-neutral-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" group cursor-pointer group overflow-hidden relative text-gray-50 w-80 h-96  rounded-2xl hover:duration-700 duration-700">
            <div className="w-80 h-96  text-gray-800">
              <img className="w-80 h-96" src="https://i.pinimg.com/236x/62/fd/e2/62fde2e169f2394c6f0b2d8c9636c5af.jpg" alt="" />
            </div>
            <div className="absolute bg-transparent -bottom-16 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span className="text-black font-bold text-3xl">Caramic Pot</span>
              {/* <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span> */}
              <p className="text-neutral-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>User reviews</h1>
            <div className='h-80 w-80'>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home