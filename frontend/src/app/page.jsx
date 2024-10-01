'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Link from 'next/link';
import { IconHeart, IconUserCircle } from '@tabler/icons-react';

const Home = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true, 
      tablet: {
        smooth: true, 
      },
      smartphone: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
      <nav className="bg-white px-6 mt-2 w-full">
      <div className="  flex items-center justify-between h-20">
        <div className="flex items-center">
         <img className='h-[200px] w-[200px]'  src="./Logo.jpg"></img>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-900 font-semibold hover:text-black px-3 py-2 rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-xl">Home</Link>
          <Link href="/listingitems" className="text-gray-900 hover:text-black px-3 font-semibold py-2 rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-xl">Shop</Link>
          <Link href="/aboutus" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-xl">About Us</Link>
          <Link href="/contact" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-xl">Contact</Link>
          <Link href="/faq" className="text-gray-900 hover:text-black px-3 py-2 font-semibold rounded-full hover:bg-gray-200 transition duration-500 ease-in-out text-xl">FAQ</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href='/login' className="text-gray-600 hover:text-black font-semibold text-xl">Log in</Link>
          <Link href='/signup' className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-black transition duration-300 ease-in-out">Sign Up</Link>
          
          <Link href='/user/cart' className="text-gray-600 hover:text-black ">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-garden-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" /><path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" /></svg></Link>
          <Link href='/user/wishlist' className="text-gray-600 hover:text-black ">
          <IconHeart/>
          </Link>
          <Link href='/user/profile' className="text-gray-600 hover:text-black ">
          <IconUserCircle/>
          </Link>

        </div>
      </div>
    </nav>
      <section  className="pt-20">
        <div className=" mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className=" mb-12 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span className='text1'>Discover</span>{" "}
              <span className=" text2 block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-gray-400 to-red-800 lg:inline">
                the art of clay crafting
              </span>{" "}
              <span className='text1'>with our products</span>
            </h1>
            <p data-scroll data-scroll-delay="0.2" className="px-0 mb-10 text-lg text-gray-600 md:text-xl lg:px-24">
              Unleash your creativity with our premium clay products. Perfect for artists of all levels, our clay is designed to help you bring your visions to life.
            </p>
            <div className=" space-x-0 md:space-x-2 ">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-red-700 rounded-2xl sm:w-auto sm:mb-0"
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
              </Link>
              <Link
                href="/learnmore"
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
              </Link>
            </div>
          </div>
        </div>
        <div className='h-[85vh] w-[100%] bg-gray-50'>
          <div data-scroll data-scroll-speed="2" className='flex flex-col h-screen '>
            <img className='object-cover rounded-e-full' src="https://sothebys-com.brightspotcdn.com/76/45/1de85a4a4a7f915016c4802bcd28/hk1219-marketing-hero.jpg" alt="" />
          </div>
        </div>
        <div className='flex justify-evenly mb-11 w-[100%]'>
          <div data-scroll data-scroll-speed="2" className="h-80 p-6 ml-11 w-80 bg-white shadow-lg rounded-lg">
            <div className="h-32 w-32 mx-auto mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfn0YrIo1UvS8jraZVRBgOU3yskyKLr_J0A&s" alt="Review 1"
                className="h-full w-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Pottery Classes</h3>
            <p className="text-gray-600 text-center">Explore the world of pottery with our expert-led classes and transform  clay into beautiful personalized art pieces </p>
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-delay="0.4" className="h-80 p-6 ml-11 w-80 bg-white shadow-lg rounded-lg">
            <div className="h-32 w-32 mx-auto mb-4">
              <img src="https://thumbs.dreamstime.com/b/human-hands-crafting-clay-bowl-ink-contour-hand-drawn-two-hands-making-ceramic-pot-painted-black-white-vector-illustration-323581298.jpg" alt="Review 1"
                className="h-full w-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Pottery Weel</h3>
            <p className="text-gray-600 text-center">Master the pottery wheel and learn to shape spin and create stunning ceramics with our guided classes for all experience levels</p>
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-delay="0.4" className="h-80 p-6 ml-11 w-80 bg-white shadow-lg rounded-lg ">
            <div className="h-32 w-32 mx-auto mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__IltOZX6Mly4Y-WWLkp_p7yfhYbxPO3w5Q&s" alt="Review 1"
                className="h-full w-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Gift Cards</h3>
            <p className="text-gray-600 text-center">Share the joy of creativity with a <br /> gift card, perfect for inspiring <br /> pottery enthusiasts and art <br /> lovers alike</p>
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-delay="0.4" className="h-80 p-6 ml-11 w-80 bg-white shadow-lg rounded-lg ">
            <div className="h-32 w-32 mx-auto mb-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWGIokcgfvbClpBxy1mlJdhIklXj-5Bm5hg&s" alt="Review 1"
                className="h-full w-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Design Process</h3>
            <p className="text-gray-600 text-center">Discover the design process and bring your creative visions to life with our step-by-step guidance in pottery and ceramic art</p>
          </div>
        </div>
        <div className='mt-0'>
          <div data-scroll data-scroll-speed="1" className='flex justify-center flex-col'>
            <h1 className='text-5xl font-bold text-red-950 text-center'>Our Gallery</h1>
            <p className="text-gray-900 font- text-xl mt-7 text-center"> Explore the Beauty of Handcrafted Art: A Curated Collection of Unique Clay Creations, Each Piece Telling Its Own Story,  <br />Immerse yourself in our gallery, where every handcrafted clay creation tells a unique story</p>
          </div>
          <div data-scroll data-scroll-class="fade-in" data-scroll-speed="2" className=" p-4 mt-2 grid-wrapper">
            <div data-scroll data-scroll-class="fade-in"  >
              <img className='object-cover'
                src="https://i.pinimg.com/236x/01/a1/1a/01a11a014d8c3690c5bd2021e257f713.jpg"
                alt=""
              />
            </div>
            <div>
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
          <div className='flex justify-center mb-10 flex-col'>
            <h1 className='text-5xl font-bold mt-3 text-red-950 text-center'> Latest Product</h1>
            <p className="text-gray-900  text-xl mt-5 text-center"> Introducing Our Latest Masterpiece: Where Innovation Meets Timeless Craftsmanship</p>
          </div>
        </div>
        <div className='flex  mt-3 justify-around p-5'>
          <div className=" flex flex-col cursor-pointer rounded-2xl w-80 h-96 ">
            <img className="w-80 h-96 rounded-2xl" src="https://i.pinimg.com/236x/df/64/3c/df643c5dd49dd291a221a2778bd454a8.jpg" alt="" />
            <h3 className='text-center mt-5 text-xl'>Ceramic Plates</h3>
            <p className=" text-center mt-2 text-[#ff3f40] text-xl">
              R$<span className="text-3xl">8.83</span>
            </p>
          </div>
          <div className=" flex flex-col cursor-pointer rounded-2xl w-80 h-96 ">
            <img className="w-80 h-96 rounded-2xl" src="https://i.pinimg.com/736x/bc/71/ae/bc71aea448160276b39ca2643a7fb3d2.jpg" alt="" />
            <h3 className='text-center mt-5 text-xl'>Ceramic Pot</h3>
            <p className=" text-center mt-2 text-[#ff3f40] text-xl">
              R$<span className="text-3xl">7.90</span>
            </p>
          </div>
          <div className=" flex flex-col cursor-pointer rounded-2xl w-80 h-96 ">
            <img className="w-80 h-96 rounded-2xl" src="https://i.pinimg.com/236x/7b/f2/c7/7bf2c70db01aa709f05fd7a10d97e830.jpg" alt="" />
            <h3 className='text-center mt-5 text-xl'>Ceramic bowl</h3>
            <p className=" text-center mt-2 text-[#ff3f40] text-xl">
              R$<span className="text-3xl">7.93</span>
            </p>
          </div>
          <div className=" flex flex-col cursor-pointer rounded-2xl w-80 h-96 ">
            <img className="w-80 h-96 rounded-2xl" src="https://i.pinimg.com/564x/08/51/87/0851874dd3a7a48dc2667ffc766cbb08.jpg" alt="" />
            <h3 className='text-center mt-5 text-xl'>Ceramic Bottle</h3>
            <p className=" text-center mt-2  text-[#ff3f40] text-xl">
              R$<span className="text-3xl">6.93</span>
            </p>
          </div>
        </div>
        <div>
        </div>
        <div className="bg-white mt-28 h-[120vh]">
          <div className="container mx-auto  h-full">
            <h2 className="text-5xl font-bold text-red-950 mb-8 text-center">Our Services</h2>
            <div className="flex flex-wrap justify-center w-full h-[100vh]">
              <div className="w-full h-[500px] md:w-1/3 p-4">
                <div className="bg-gray-100 h-[350px] w-[90%] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Custom Clay Sculptures</h3>
                  <p className="text-gray-600">Get personalized clay sculptures crafted to your specifications. Perfect for gifts and home decor.</p>
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxANDxEPDw8NDxAQEA0OFRAPEA8PFRIWFhURFRYYHSggGBolGxYVITEhMSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0dHSUtLS0tKy0tListLSstLSsrLSsrLS0tLS0rLS0tLS0tKy0tLSstLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQQFBgcDAv/EAEUQAAEDAgQDBAcGAgYLAQAAAAEAAgMEEQUSEyEGMVFBYXGBByJSkaGxwRQjMkJicqLRU4KSwtLhJDNDRGODo7LD4vEV/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJhEBAAICAgEEAQUBAAAAAAAAAAECAxESITEEE0FRMiIjYXGBFP/aAAwDAQACEQMRAD8A0qSEKpcEkJIGi6SEDui6SEDQkhA0JIQNCSEDQkhA0JBNAIQkgaEkIGhJCBoSQgaLpIQO6d18poHdF0kIGi6SEDuhJCBlJMpIBCEkAhCEAhCEAhCaBIQmgSE0IEhCFAEIQpDSQhAIQhAIQhAISTQCEIQCEIQCaSEDQhCAQhCgNJCFIEk0IEhCEAhJNAIQhA0ISUBoSQpAhCEAhCEAhCEAhCEAhCEAhCEDQhCgCEJIGhCSkNCEIBCEKAFCaSkJNCEAhCECQmhAk0IUAQhK6kNJNoJ5Anw3QWkcwR47IEhFkIBCaECSTK0uC4IAwTTC7nC7WHk1vYSO0/JBnGQvdu1riOoBI96To3DmCPFbGYglzbEZbbkbG4vss4yd8sRkfCYiZZGNZmDyY2yFrZSdrAgZrb2B7VxN9O602gIXhUuLDcbjtC9mOBAI5HcLqJ2i1dGhNZPiHG5XTnD6QHU21ZrXETSAS7usD5nZRa2o2mlJvOmqa6+43HcvpQcIP3Zb7DrC/SwU1KzuNovXjMwF5S1DGFoe5rS8kNzG1yOxeqpeKaUviY5vOOVp/qu9U/Et9ymeocrpUfFWIPhhIjOV5BOYcwArjCaVzYmte7MR8B0VFxNDqOEY5yEMHmbKj34nUQs9uflokIKFoVhCSEH0kmkgEIQgEIQoAkUIUgQEIQBKv8DwMPaJ5h6p3ZH1HtO7u5VGHU2rNHF2PcAf2jd3wBW+k22GwG1ugREyocYddrqSJz4ZJYJXRyxBv3eUtbcbWBu9ttuvRVNXG50UBMsjSxsbpCNMmb1QMr7tNgSbm1ir+vpWvsXXu3drmktc3wI3CpaqiaN/WP7nOda3iVTbe2imtKh7xmshQsTkyuupUL8zQ7qF3SduMlddvtCELtWlYVTiWeKM7hzxcdWj1iPcCt7MsjwnHepv7Eb3fJv1WtlKn4c/Kkmp5WyvlbIXMe1o0X2ysLb3c0gX3vve/IclX1MTtuQa0AWFydhbmr+UKsrAqZq0VsymKM5qJhM1w5nsG48D/n81YYtyKzuHVGWot7YLfqPklfLq0bq0F15VTI2NcWtaHPIMjgAC9wFruPbYADyWooaKONjS4AyOYHlxF7A9g6WuqLG5Y5GAt3zMztcGm2Xb81rX35Xus3qb8tRHhZ6asRO5VeEfheer/kAp6jYY20Le/Mf4ipK10jVYZ8s7vIXpSU4lkZERcSPa1wPLKTv8LrzVrwxFeozf0bHO8z6v1K7Vs/xlK7DXguL3U8rnGOZ1rMPPRcQNrW2vue/e1FgBfNMKyXMGy30WO5Nbawfbqd/Irr2IQskY6ORrXscLOY8BzXDoQdisfi9K1hu0WANwB2WWSuKtL7hq9yb04y8kJpLWykhCEH0kUIQCSaSAQnG8A3cLt7R3dfqvUUj3M1WtOm65a4louOvP4quclYtxl3FJmvKHhdNjSSAOZVZFXvdVvp8obHFFmLjzkcXAXb+kb37bkclpabDPVD3lzSdw1tgR4967rPLuHGWJx9T5VdbI2L8Rv4L5gnbI0PYbtPb8wvPG8AElzrztP/LI/wC1QcGibTM+zucXFz3OEh2BJ5Nt2cgrJiNdM2PJberNdwoy9Tf2I3u8zZv1K1chWb4Qb68zujGj3kn6LQSFcfDR8vCYqnrzsVazFU2IO2KqldVjcef2r3waXNHb2T81A4hk5r64ZluHjuafmpo7yR+leL4MgzZL+tkD7fpJI+nxC+2i5ssziWJhldG+9mlwjd+x23uGx8ldFdsV8nGYh0jgxnrTO6NY33kn6LRSFUfCLbRSu6yAe5v/ALK4e5cysjy8ZSqysKsJSqutPNVytqzWMO2KwdXUlsmYc2m48Qt3iUL5Dpxgue82a0cyVR4vwLOyN0zpoMwBOiM526ZrWv8ADvUQt3EdOl1TrxC3awfJZPE83rk7A8he/wAVpKmWwy9gAHuCzeLP2Kw5fLRgjUImFuvEO5zh/ET9VLVdgr7xu7pHfIK6fQOEQlc5rM1i1rvzX5dvM9F6GOd1hhzTEXnf2i3Wg4VZYSv65WjyuT8wsrSVWcuY4Br2HkDcFvY4Gy1uBnLCP1uc76fRTPUOa9+FnO/ZZnGzsVeTSbLOYw/YqqZX0qiwuu0HuX2o2HvuzwcR9VJV0eFFo1MkhNClAKRTKgY815pKkR31DTzBgHMuyGwHegj1eOsjaJ3RymluM1W3IWNBNg/Lmzll/wAwb38t17Y/irKONkkrZHarg2NjG3LyeVuz+fZdScBp46h1JCA18TmNmy8w6GJrXN8RnMQI6OXv6RIzp5u1rg4HnZwNwfeutRtXa0wi0k5kLGSRvhdI5jSx5YSA5wBILCRtdX/EbrwujacrSA3K249UW2Fjtyt4XWY+2B7qVzObiyd1vyR5bgnxdkHmrusnzt3WDP1k/wAb8HdI/tn8LA+2QtP53OFuoDS4j+FbmZ655BUhmJ0jfafKP+hJ/JbeWZa8P4MXq5/cRq1/NZTGHbFX1bMsrjM+xV9WSzc+jav1oJid3xvYxx62BIPuPwK1j3LmHofqSZK9l9gKZ3mTMPoF0hz1VfqdNmLusS853KjxJ+xVrUPVBiT+wbk8gOZKplorDGcRS80uEpfXI6sPzCmYrw9VS3IY1t/bcAfcLqNgOD1EEoMjLsAcC9hDwNjztuPMKau7/i0VRLlY53dYea59jcUr3XyOsdwSLXB7RfsXSY6Zjm6km7Wk2b2E9T3LHcW4la9rC3LktVOoePlnd3S+AKwS0LX/AJi85x2h+Vtx77q+e5c39GOJjNJD+WWNszR3iwI9zh7lvnTKm/U6bcU8qxJyuVXWuUuWRVVZIqplorDyw+YRzahBIDXC4F7Ej/6PNQ58QZVVbKUuLA4F5Dw5oe1pH3bSRYuPToD0UyOYBlvFZHiabYntXM2nwurhie21rpLErNYpPsV7cPV8lVSNkffOwujdI4H7zLyeOu1gT1BUPE6Vx2bcuOwaAbknkFlvS211JiPLy4aOZsjRzMoA8SAFu8dADQLXDNwLXtYWBHesPgUX2FwfWEMBmjkIb65Y1tr5rfS63GJStewPa4Oa9oc1zTcOaRcEHtBC30ia0jcPMz2rfJPGdsDTDJPc7F4dfcn1juefgtjQ1Q02W5ZR77b/ABWIx2fI8OHZm+RVhguIXgiN+YUXttd6fF018k2yocWl2KlCou1U2KzbFVNUUfOCS31G9CD77/yVms5w/N9+5vtMPvBH+a0ivr4ZM0auEIQpVBCSFIteDsGiidNUszAvvG1hN44wSHvyN/LmdlJHLbayjccgGFyucLcGQMHabuPmf5WWd4wqLxPHcomfDiYVFFFHFhNO9lzLU1DjK87uOmZWNZ3NaA0Ad9+ZJMqnqA5mxB7NiDv0XP468i8ZJs0mwubC++3ndTcOqXiRgjNi97W2HbdwAFlgzVn3ZengiJwxprajA4WzR1bnyOlhJc0NLWsBLSDta52JHNe0eKtfmAO7TYjoqXFcTkErqQMkdK2QxhrGuIc69rg8rd/vX1HgM0Bke6VjnuDC5ga8MHPZrz+Ln0C2Utrqenm3x3vO/MplXVc1lcZqdirqjw2sqr6URyAkashDI7jnY83eQKnt9F1RNYz1UUIPNsTHzOt0u4tA8d1fFohROO30r/Q1L99Xn9FKP4p11EyrM8OcExYZrOinlldPp5tUMAGTNa2UD2ypz68NOUmxVOS27NuKv6dJtTLsvnCYw4ukOU5fV3vdu3MeO/uVVV1wtzWfdxG6nlu13qO2eDuCOw+Sr2u4TMNdVybO3vu4dDsbLKVmJGKTO07tPLqO0HuXhVcU5/UYz1nGwALtyT+1QHROcbEZ5XXNhyb22F+fiuY7W8eMdtZiEwEIy7A3IHibrlnFNTckLeYtPlhay+7WAHxtuvfhLgenqIft9czWEpJgp3FzYxGDbUeARmJN7Dla3O+27cVjcvCrHK/TIcE1+lJTPvYENYfBzcvzIPkuqw11+1Y/jDh+mjjMlLEIHRC+nGSGOaOYyn8J6WUDAuJBJZrj940esPa/UFReeUcobsEcZmlvnuHQpJ9lEMepyKqnYkLc1Fo8eDXlpKz3mYjpupTcrKuidG0nmBz8Oqz8VJ9rqY4CTkc68hGxEbRd2/Ze1vEhX9TibJGGxHJVfBm1RVPP+yYxjT3PJd/cC4x23K6d1pP201e9kbAxjWsYxoa1jRYNaNgAFBwwhxkl9gZWnbZzr7jvA+areI6+zTujAKj/AEMO9uWQnys36K/HG7bYvVbphn+VFxlVHM4l3qkfh6HrdW/B+KGXDKVnNw1IgO5sz2NH9kBXOG8NU8jBU1TBOZPWZFJvGxnYS3k4nnvty2X1WvigFoYoYwzcMaxjWjyAsr8uSJjTD6XDMdyrcT0Imm7WPdb1nvAcSe21+Q7liYcb++MQs1jRdgaAABfcWC1+I4lSzMIdTxXI3AGU37i2xXKMScyKrkbGTkBFsxuWggHLfttdUVr9vXreIjWnVaOtzMBUDEp+apsFxD7sC6+q+ruuddr9PrBai1ZF+oub72kD42W4XLaKry1UDuk8XuzhdSKurGoYPUfkEJIUs7TNwBvevUcOx9t/JXWoEagU9I3LJYpLoO0jsGgZb9rewrCcWYu0MIvzXY6iCKQWkZHIByD2tdb3qtn4Yw6T/WUVI/8AfFG75hRx72ifDg2BYYKtksuppu1WiMkZg5rQ7PsD1LRf9JWqwHhOUSxyiZrtNwdlDHAkjlvfbddZpcJpIgGxU1PG1vJrI42geAAUxoaNgAO4ABRbHFrcpXUzWpXjDJ41WyU9G6V18ocxrib2a0m1z55R5rn2LcUMLT6y7VVQxyxvika18cjSx7HjM1zSLEEdoXKMS9Ccb3udBXyQxucSIpItbID+UO1ASB33Pik0iZdY80R5hG9GmOuDZ3ON4/tLbA8rlgz28spXUH1PS5WOwT0ZOpgxv28uZGbhggDWk3uSfvDe5W/pISxoa9+oR+a2X4XKnUub3rM7hQ1kjyNmu9xWWxSinkuGxyX7CGu2PVdN2RZvco4OYya+HKabAK17fWs39wcFFrOAamTczRtv+l5+q6/lHQJ5R0CcIde/Zwn/APNdR1scMpDvULw+2UPGm7cD9wI8l7U8gfK+QPDBFyPa93MsG/hc967XJSxO/EyN1vaa0/NfBoIP6KL+y3+S5jHqXVs/KNTDgdfihmc2JhGeV7Y235Z3uDR8SF22drYYWQs2ZDG2No6Na0AfJKt4dpn+tHFTxS3uJ2xRl489j8V4T4TUublM0TuzMQ5t/mpy2tbqIZsOKte9sTxFVXDh4r1wn0a4fLFDVskq2mRjZBkkZ6riN2/h7DcW7lPr+BKiW/8ApEDb90hVhw7wvWUrNI1zDEHEtjbE45bm5AJf1ufMrnHFoaL8JiO+ybwPT2tqVB/rM/wqNL6O6UnNnqbjo9o/ura08OUWc7OetgPgvfZWcIce7b7cq4i4fdSMEsAnkaHAPYWl5AP5gWjl18VXcL1Ba2pc5rm5pGgZgW7Bvf4rs2yCQq/ZiJ3C6PVTrUxtwfiSrJ2AJ8ASpPCtYXUj4iCHRTOIBBF2uAIPvze5duNlWY5hbamIxZgw3DmvtmLXDttcd4811FZr4cZckZY4zGoZnDsUa6lisd2MbG4docwZSPhfzWZ4hxQAHdXlRwLU76VVCCeZcx7QfEAlUNb6M8Rk/wB6ovPX+WVcxWZnw7rwrH5bZNtU6RzY4wXPkdlY0cySvniHguse9ktPTvecobILxszFo2f6xG55HwC2/D/o3r6SXXbWUoksW5hE6TK08w3ONr9ea2tHg9SP9dVh/wCyKNi7jpFrx8S4phvC2LMFvscn9uD/ABqZLwrizuVE/wA5KYf+Rd0ipw0buLu82+i9coU6P+i2tOCUHo9xUyxyPhZE1kjHOzSxF1muB2yk9F0tmF1Z/EyMf1gfotfskSEV2yTbyzAwef8A4fv/AMklp8yE055SWojUUTURqIhM1E9RQ9RGogmaiNRQ9RGogmaqWqoeolqIJuqnqqDqJ6qCbqo1VC1UaiCcJUaqhaqeqpE3VS1FD1UtVQJmqlqKJqJaiCZqo1FD1EaiCZqpiVQ9RGogmaqNVRNRGogl6i+dRRdRGogkmRGoouolqIlK1EtRRdRGoiErURnUXUS1ESlF6ReouojVQSM6ai6iEEfVTEqrtZGsgstVGqq/WRrIJ+qjVUDWS1kE/VRqqBrI1kE/VRqqBrI1kE/VRqqv1kayCw1kayr9ZLWQWWslrKv1kayCx1kaqr9ZGsgn6qNVV+sjWQWOqjVVfrI1kFjrJayr9ZGsgsNVGqoGslrIJ+qjVUDWS1kE/VRrKv1kayCfrI1VA1kayCaZUjKoWqjVQTNVChaqEEPURqIQgeqjVQhA9VLVQhAaqNRCEC1EaiaEBqJaqEIDURqIQgNRMSoQgNVGqhCBaqNVCESeojUQhEDUT1EIQGojUSQgNRLUTQgWojVQhEjURqoQgNRPUQhEDUQhCD//2Q==" alt="Custom Clay Sculptures"
                    className="mt-4 mx-auto w-[90%] h-[200px] object-cover rounded-lg shadow-md" />
                </div>
              </div>
              <div className="w-full md:w-1/3 h-[500px] p-4">
                <div className="bg-gray-100 h-[350px] w-[90%] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Workshops & Classes</h3>
                  <p className="text-gray-600">Join our workshops and classes to learn the art of clay crafting from experienced artisans.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIX0Jp3XhqW22kHUbTlNzyFldXKFJ462EXOCmtJaSyNFtz9WVU56J8wOX-nPdooTzSiU&usqp=CAU" alt="Workshops & Classes"
                    className="mt-4 mx-auto w-[90%] h-[200px] rounded-lg shadow-md" />
                </div>
              </div>
              <div className="w-full md:w-1/3 h-[500px] p-4">
                <div className="bg-gray-100  h-[350px]   w-[90%] p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Eco-Friendly Materials</h3>
                  <p className="text-gray-600">We use eco-friendly materials to create our clay products, ensuring minimal environmental impact.</p>
                  <img src="https://mitticool.com/wp-content/uploads/2018/04/240817_MittiCool_02.jpg" alt="Eco-Friendly Materials"
                    className="mt-4 mx-auto w-[90%] h-[200px] rounded-lg shadow-md" />
                </div>
              </div>
              <div className="w-full md:w-1/3 h-[500px] p-4">
                <div className="bg-gray-100 p-6 h-[350px] w-[90%] rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Wide Range of Products</h3>
                  <p className="text-gray-600">Explore our wide range of clay products, including pottery, sculptures, and decorative items.</p>
                  <img src="https://i0.wp.com/moss51.com/wp-content/uploads/2023/09/photo-1631125915902-d8abe9225ff2-lanscape.jpeg?ssl=1" alt="Wide Range of Products"
                    className="mt-4 mx-auto w-[90%] h-[200px] rounded-lg shadow-md" />
                </div>
              </div>
              <div className="w-full md:w-1/3 h-[500px] p-4">
                <div className="bg-gray-100 h-[350px] p-6 w-[90%] rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Gift Wrapping Services</h3>
                  <p className="text-gray-600">Avail our gift wrapping services to make your clay products perfect for any occasion.</p>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQmiaGbk--epXwoFJPSB5uxTJlS5H7LC7ww&s" alt="Gift Wrapping Services"
                    className="mt-4 mx-auto rounded-lg w-[90%] h-[200px] shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[73vh]">
        <div className="relative top-20 z-10 w-3/4 mx-auto p-10 flex justify-between bg-white rounded-b-3xl shadow-2xl" data-scroll="" data-scroll-speed="5">
            <h1 className="text-4xl font-black mt-5 text-gray-900">Subscribe To Our Newsletter</h1>
            <div className="w-2/5 mt-3">
              <input type="email" placeholder="enter your email here" className="mr-7 p-3.5 bg-gray-100 w-2/5 rounded-2xl border-none text-black font-semibold outline-none" />
              <button className="bg-gradient-to-r from-gray-900 to-gray-400 hover:from-gray-900 hover:to-gray-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                Subscribe
              </button>

            </div>
          </div>
          <div className="bg-gray-400 py-28">
            <div className="relative top-12 w-4/5 mx-auto flex justify-between">
              <div className="text-black w-80">
                <h1 className="text-5xl font-bold">Mitti Mahal</h1>
                <p className='text-lg mt-5'>Mitti Mahal offers handcrafted clay products that blend traditional artistry with modern design. Discover our unique collection of home décor, tableware, and gifts, each piece crafted with care by skilled artisans</p>
                <i className="fa fa-twitter text-4xl tracking-wider" aria-hidden="true"></i>
                <i className="fa fa-facebook text-4xl tracking-wider" aria-hidden="true"></i>
                <i className="fa fa-instagram text-4xl tracking-wider" aria-hidden="true"></i>
                <i className="fa fa-linkedin text-4xl tracking-wider" aria-hidden="true"></i>
              </div>
              <ul className="list-none text-black">
                <li className="mt-4">
                  <h3 className="text-3xl font-bold">Service</h3>
                </li>
                <li className="mt-4">
                  <Link href="/shop" className="text-lg">Shop</Link>
                </li>
                <li className="mt-2">
                  <Link href="/aboutus" className="text-lg ">About</Link>
                </li >
                <li className="mt-2">
                  <Link href="/contact" className="text-lg ">Contact</Link>
                </li>
                <li className="mt-2">
                  <Link href="/giftCard" className="text-lg ">Gift Cards</Link>
                </li>
                <li className="mt-2">
                  <Link href="/features" className="text-lg ">Features</Link>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mt-4 ">
                  <h3 className="text-3xl font-bold">Privacy</h3>
                </li>
                <li className="mt-4">
                  <Link href="#" className="text-lg ">Privacy Policy</Link>
                </li>
                <li className="mt-2">
                  <Link href="#" className="text-lg ">Terms &amp; Condition</Link>
                </li>
                <li className="mt-2">
                  <Link href="#" className="text-lg "> Cookies </Link>
                  
                </li>
                <li className="mt-2">
                  <Link href="/customerhelp" className="text-lg "> Help </Link>
                  
                </li>

              </ul>
              <ul className="list-none ">
                <li className="mt-4">
                  <h3 className="text-3xl font-bold">Contact Us</h3>
                </li>
                <p className='text-lg mt-2'>Mitti Mahal,<br />
                  123 Artisan Lane,<br />
                  Clayville, CA 90210</p>
                <p className="pt-4 ">mittimahal@gmail.com</p>
                <p className="pt-2">(+62) 81234567890</p>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home;