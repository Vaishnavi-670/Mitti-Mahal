import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-14 w-full px-5 md:px-10 lg:px-20">
      <div className="  space-y-16">

        {/* About Us Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            Each product at Mitti Mahal is crafted by skilled artisans with love and dedication. From elegant home décor to functional tableware and unique gifts, our collections reflect the perfect blend of artistry, quality, and sustainability.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className='flex  items-center justify-center gap-10'>
          <div className="grid w-[90%]  gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-2">
                Welcome to Mitti Mahal, where the ancient art of pottery meets contemporary design. Our mission is to bring the timeless beauty of handcrafted clay products into your home, celebrating the rich heritage of pottery while embracing modern aesthetics.
              </p>
              {/* <p className="text-lg text-gray-600">
              Each piece in our collection is designed and meticulously crafted by skilled artisans. We are dedicated to preserving traditional techniques while integrating innovative design elements, making every product functional and beautiful.
            </p> */}
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://i.pinimg.com/236x/32/63/93/326393a6db97d58ac68c0e2962d0642e.jpg"
                alt="Mitti Mahal Pottery"
                className="rounded-lg h-80 shadow-lg w-full object-cover"
              />
            </div>
          </div>
          <div className="grid w-[90%] gap-10 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Traditional Meets Modern</h2>
              <p className="text-lg text-gray-600 mb-4">
                We are committed to preserving traditional pottery techniques while embracing modern design. Each piece is crafted with care and dedication, blending the old with the new to create unique and meaningful items.
              </p>
              {/* <p className="text-lg text-gray-600">
              Thank you for being a part of the Mitti Mahal journey. Explore our collection and discover the stories behind each piece, crafted with care by our talented artisans.
            </p> */}
            </div>
            <div className="md:order-1">
              <img
                src="https://i.pinimg.com/736x/c7/ec/a3/c7eca3ef9ccb9bd36164a9d084357bbf.jpg"
                alt="Traditional Pottery Techniques"
                className="rounded-lg h-80 shadow-lg w-full object-cover"
              />
            </div>
          </div>

          <div className="grid w-[90%] gap-10 items-center">
            <div className=" md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                Thank you for being a part of the Mitti Mahal journey. Explore our collection and discover the stories behind each piece, crafted with care by our talented artisans.
              </p>

            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://i.pinimg.com/236x/32/63/93/326393a6db97d58ac68c0e2962d0642e.jpg"
                alt="Mitti Mahal Pottery"
                className="rounded-lg h-80 shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="col-span-2">
            <video
              src="https://example.com/artisan-video.mp4"
              controls
              className="rounded-lg shadow-lg w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Celebrating Our Artisans</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Mitti Mahal, we celebrate the artistry of our artisans who pour their passion into every creation. Our products range from elegant home décor to functional tableware and unique gifts, crafted with high-quality materials.
            </p>
            <p className="text-lg text-gray-600">
              By choosing Mitti Mahal, you support a community dedicated to preserving the rich tradition of pottery. Our commitment to sustainability and craftsmanship is at the core of everything we do.
            </p>
          </div>
        </div>

        {/* Traditional Techniques Section */}


        {/* Customer Reviews Section */}
        <div className="bg-gray-50 py-16 px-8 md:px-16 lg:px-32 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "Mitti Mahal's pottery is absolutely stunning! The quality and craftsmanship are unmatched, and every piece feels like a work of art. Highly recommend to anyone looking for unique and beautiful ceramics."
              </p>
              <cite className="block text-gray-800 font-semibold">– Jane Doe</cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "I purchased a set of tableware from Mitti Mahal, and it has completely transformed my dining experience. The attention to detail is evident, and I appreciate the blend of tradition and modern design."
              </p>
              <cite className="block text-gray-800 font-semibold">– John Smith</cite>
            </blockquote>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://example.com/journey2010.gif"
                alt="Journey 2010"
                className="h-48 mb-4 rounded-lg shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2010</h3>
              <p className="text-lg text-gray-600">
                Founded in Clayville, CA, Mitti Mahal began with a vision to revive traditional pottery techniques and create timeless pieces for modern homes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://example.com/journey2015.gif"
                alt="Journey 2015"
                className="h-48 mb-4 rounded-lg shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2015</h3>
              <p className="text-lg text-gray-600">
                Expanded our product line to include a wide range of home décor and tableware, gaining recognition for quality craftsmanship and innovative designs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://example.com/journey2020.gif"
                alt="Journey 2020"
                className="h-48 mb-4 rounded-lg shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2020</h3>
              <p className="text-lg text-gray-600">
                Launched our online store, making our unique pottery accessible to a broader audience and fostering a global appreciation for handcrafted ceramics.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Community Section */}
        <div className="bg-gray-800 text-white py-16 px-8 md:px-16 lg:px-32 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8">
            Stay connected and be the first to know about our latest collections, exclusive offers, and behind-the-scenes insights. Sign up for our newsletter and follow us on social media!
          </p>
          <a
            href="/newsletter"
            className="inline-block bg-white text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Sign Up for Our Newsletter
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
