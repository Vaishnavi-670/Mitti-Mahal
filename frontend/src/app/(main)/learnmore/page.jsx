'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LearnMore = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Import Locomotive Scroll dynamically to avoid SSR issues
    const importLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
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

      return scroll;
    };

    let scroll;
    // Initialize Locomotive Scroll
    importLocomotiveScroll().then((locoScroll) => {
      scroll = locoScroll;
    });

    // Cleanup function
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  
  return (
    <div ref={scrollRef}>
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Learn More About Our Clay Products
          </h1>
          <p className="text-lg">
            Discover the art, craftsmanship, and eco-friendly practices behind our
            unique clay creations.
          </p>
        </div>
      </section>
      {/* Our Products Section */}
      <section className="py-20">
        <div className="container h-[80vh] mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Products
          </h2>
          <div className="flex flex-wrap justify-around">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white h-[500px] w-[450px] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Custom Clay Sculptures</h3>
                <p className="text-black">
                  We create personalized clay sculptures that are perfect for gifts,
                  home decor, and more.
                </p>
                <div className='h-[350px] w-full'>
                  <img
                    src="https://i.pinimg.com/236x/76/31/3a/76313a8b6211a15f3633e5ebcb176ff3.jpg"
                    alt="Custom Clay Sculptures"
                    className="mt-4 mx-auto h-full rounded-lg object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white h-[500px] w-[450px] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Decorative Clay Bowls</h3>
                <p className="text-black">
                  Our decorative clay bowls are crafted with care and are ideal for
                  enhancing your home decor.
                </p>
                <div className="h-[350px] w-full">
                  <img
                    src="https://i.pinimg.com/236x/44/2d/80/442d8042bf386380ecd807575593b061.jpg"
                    alt="Decorative Clay Bowls"
                    className="mt-4 mx-auto h-full rounded-lg object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white  h-[500px] w-[450px] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Wide Range of Products</h3>
                <p className="text-gray-800">
                  Explore our diverse range of clay products, including pottery,
                  decorative items, and more.
                </p>
                <div className='h-[350px] w-full'>
                  <img
                    src="https://i.pinimg.com/564x/6d/ce/2c/6dce2c03cb196ad49da424f63a3d04d6.jpg"
                    alt="Wide Range of Products"
                    className="mt-4 mx-auto rounded-lg h-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section className="bg-gray-100  h-[100vh] py-7">
        <div className="container mx-auto ">
          <h2 className="text-5xl font-bold text-black mb-4 text-center">
            Our Process
          </h2>
          <p className="text-center text-xl text-gray-800 mb-5">
            From selecting the finest materials to the final touches, learn how our
            clay products are crafted with care and precision.
          </p>
          <div className="flex flex-wrap h-[90vh] justify-center">
            <div className="w-full flex gap-7 p-4">
              <div className=" h-[620px] w-1/3 p-6 rounded-lg shadow-xl">
                <video autoPlay muted loop 
                  src="/process1.mp4"
                  alt="Clay Crafting Process"
                  className="rounded-lg h-[450px] w-[100%] object-cover shadow-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Handcrafted with Passion
                </h3>
                <p className="text-gray-800 text-lg">
                  Our artisans meticulously handcraft each piece, ensuring quality
                  and uniqueness.
                </p>
              </div>             
              <div className=" h-[620px] w-1/3 p-6 rounded-lg shadow-xl">
                <video autoPlay muted loop 
                  src="/process2.mp4"
                  alt="Clay Crafting Process"
                  className="rounded-lg h-[450px] w-[100%] object-cover shadow-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Handcrafted with Passion
                </h3>
                <p className="text-gray-800 text-lg">
                  Our artisans meticulously handcraft each piece, ensuring quality
                  and uniqueness.
                </p>
              </div>             
              <div className=" h-[620px] w-1/3 p-6 rounded-lg shadow-xl">
                <video autoPlay muted loop 
                  src="/process3.mp4"
                  alt="Clay Crafting Process"
                  className="rounded-lg h-[450px] w-[100%] object-cover shadow-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Handcrafted with Passion
                </h3>
                <p className="text-gray-800 text-lg">
                  Our artisans meticulously handcraft each piece, ensuring quality
                  and uniqueness.
                </p>
              </div>             
            </div>
          </div>
          
          </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Workshops &amp; Classes
          </h2>
          <p className="text-center text-gray-800 mb-12">
            Join our workshops and classes to learn the art of clay crafting from
            experienced artisans.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex  p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.pinimg.com/564x/88/22/aa/8822aa69f60bbc6e884a10364365c584.jpg"
                  alt="Workshops & Classes"
                  className="rounded-lg shadow-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
                <p className="text-gray-800">
                  Our workshops offer a hands-on experience where you can create
                  your own clay masterpieces.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://i.pinimg.com/564x/88/22/aa/8822aa69f60bbc6e884a10364365c584.jpg"
                  alt="Workshops & Classes"
                  className="rounded-lg shadow-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
                <p className="text-gray-800">
                  Our workshops offer a hands-on experience where you can create
                  your own clay masterpieces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center">
            Eco-Friendly Practices
          </h2>
          <p className="text-center text-gray-800 mb-10">
            We are committed to sustainability, using eco-friendly materials and
            processes to minimize our environmental impact.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src=""
                  alt="Eco-Friendly Materials"
                  className="rounded-lg shadow-md mb-6 h-[450px] w-[100%]"
                />
                <h3 className="text-2xl font-bold mb-4">Sustainable Materials</h3>
                <p className="text-gray-600">
                  We use natural, sustainable materials in our products, ensuring
                  they are safe for both people and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "The custom sculpture I ordered was perfect. The attention to
                  detail was incredible, and it made a wonderful gift!"
                </p>
                <h4 className="text-xl font-bold">- Alex Smith</h4>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "I attended a workshop, and it was such a fulfilling experience.
                  The instructors were knowledgeable and very helpful."
                </p>
                <h4 className="text-xl font-bold">- Jamie Lee</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Clay Creations. All rights reserved.</p>
        </div>
      </footer>
    </div>

  )
}

export default LearnMore