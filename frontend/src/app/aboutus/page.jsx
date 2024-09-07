import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-14 w-[100%] px-5 md:px-10 lg:px-32">
      <div className="max-w-7xl mx-auto">

        {/* About Us Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6  text-center">About Us</h1>
        <p className='text-lg text-gray-800 text-center mb-8'>Each product at Mitti Mahal is a labor of love, crafted by skilled artisans who pour their heart and soul into every creation. From elegant home décor to functional tableware and unique gifts, our collections reflect the perfect blend of artistry and practicality. We believe in the importance of sustainability and quality, ensuring that every piece we offer is made with the finest materials and utmost care</p>
        
        {/* Introduction Section with Image */}
        <div className="flex mt-14 flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/564x/a3/13/a8/a313a8ad98b43bf10337543f3d87df5c.jpg" 
              alt="Mitti Mahal Pottery" 
              className="rounded-lg h-96 shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Mitti Mahal, where the ancient art of pottery meets contemporary design. Our mission is to bring the timeless beauty of handcrafted clay products into your home, celebrating the rich heritage of pottery while embracing modern aesthetics.
            </p>
            <p className="text-lg text-gray-600">
              Each piece in our collection is thoughtfully designed and meticulously crafted by skilled artisans. We are dedicated to maintaining traditional techniques while integrating innovative design elements, ensuring that every product is both functional and beautiful.
            </p>
          </div>
        </div>

        {/* Artisans and Craft Section with Image */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:order-2 md:pl-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/a6/b2/2b/a6b22bbae46abac10d9da27679b1622e.jpg" 
              alt="Artisan at Work" 
              className="rounded-lg h-96 shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:order-1">
            <p className="text-lg text-gray-600 mb-4">
              At Mitti Mahal, we celebrate the artistry and skill of our artisans who pour their passion into every creation. Our products range from elegant home décor to functional tableware and unique gifts, crafted with the highest quality materials.
            </p>
            <p className="text-lg text-gray-600">
              By choosing Mitti Mahal, you’re not only adding exquisite art to your home but also supporting a community dedicated to preserving the rich tradition of pottery. Our commitment to sustainability and craftsmanship is at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Commitment to Tradition Section with Image */}
        <div className="flex flex-col md:flex-row w-[100%] items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/c7/ec/a3/c7eca3ef9ccb9bd36164a9d084357bbf.jpg" 
              alt="Traditional Pottery Techniques" 
              className="rounded-lg h-96 shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="text-lg text-gray-600 mb-4">
              Our commitment to preserving traditional pottery techniques is matched by our passion for innovation. We strive to keep this ancient craft alive, blending traditional methods with contemporary designs to create unique and meaningful pieces.
            </p>
            <p className="text-lg text-gray-600">
              Thank you for being a part of the Mitti Mahal journey. Explore our collection and discover the stories behind each piece, crafted with care and dedication by our talented artisans.
            </p>
          </div>
        </div>

        {/* Sub Description Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Mitti Mahal, we believe in the beauty of handcrafted artistry and the value of preserving traditional techniques. Our philosophy is rooted in creating pieces that not only enhance your living space but also tell a story of heritage and craftsmanship.
          </p>
          <p className="text-lg text-gray-600">
            We are dedicated to providing you with exceptional products that reflect our passion for pottery and our commitment to sustainability. Each item is a unique expression of creativity and skill, designed to bring joy and elegance to your life.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32 mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
          <div className="max-w-2xl mx-auto">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg mb-8">
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

        {/* Brand History Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="border-l-2 border-gray-300 pl-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800">2010</h3>
                <p className="text-lg text-gray-600">Founded in Clayville, CA, Mitti Mahal began with a vision to revive traditional pottery techniques and create timeless pieces for modern homes.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800">2015</h3>
                <p className="text-lg text-gray-600">Expanded our product line to include a wide range of home décor and tableware, gaining recognition for quality craftsmanship and innovative designs.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800">2020</h3>
                <p className="text-lg text-gray-600">Launched our online store, making our unique pottery accessible to a broader audience and fostering a global appreciation for handcrafted ceramics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay connected and be the first to know about our latest collections, exclusive offers, and behind-the-scenes insights. Sign up for our newsletter and follow us on social media!
          </p>
          <a 
            href="/newsletter" 
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700"
          >
            Sign Up for Our Newsletter
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;