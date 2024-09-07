import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Features</h1>
        
        {/* Feature 1: Handcrafted Artistry */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 h-[400px] mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/e0/d0/4a/e0d04ad7efe0f9914fc48eb885dbc60b.jpg" 
              alt="Handcrafted Artistry" 
              className="rounded-lg h-[400px] object-cover items-center shadow-lg w-full"
            />
          </div>
          <div className=" md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Handcrafted Artistry</h2>
            <p className="text-lg text-gray-600">
              Each piece at Mitti Mahal is handcrafted by skilled artisans who have honed their craft over generations. Our pottery reflects a deep commitment to quality and tradition, ensuring that every item is a unique work of art.
            </p>
          </div>
        </div>

        {/* Feature 2: Sustainable Materials */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:order-2 md:pl-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/564x/71/f3/1e/71f31e4f7d0c5efe9e7d346d3be02ea3.jpg" 
              alt="Sustainable Materials" 
              className="rounded-lg h-[400px] shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sustainable Materials</h2>
            <p className="text-lg text-gray-600">
              We are committed to sustainability in every step of our production process. From the clay we source to the glazes we use, our materials are eco-friendly and chosen with care to minimize our environmental impact.
            </p>
          </div>
        </div>

        {/* Feature 3: Timeless Design */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:pr-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/c5/ea/85/c5ea85bf4a90f019c3b9049eb04dbcc7.jpg" 
              alt="Timeless Design" 
              className="rounded-lg h-[400px] shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Timeless Design</h2>
            <p className="text-lg text-gray-600">
              Our designs are inspired by both traditional aesthetics and modern sensibilities. Each piece is crafted to be timeless, blending seamlessly into any decor style while maintaining a unique and artistic flair.
            </p>
          </div>
        </div>

        {/* Feature 4: Artisan Community */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:order-2 md:pl-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/1f/06/16/1f0616a44b2cdf089eb1141ee7ae4b27.jpg" 
              alt="Artisan Community" 
              className="rounded-lg h-[400px] shadow-lg w-full"
              
            />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Artisan Community</h2>
            <p className="text-lg text-gray-600">
              By purchasing from Mitti Mahal, you are supporting a vibrant community of artisans who dedicate their lives to this beautiful craft. We believe in fair trade and providing our artisans with the resources they need to thrive.
            </p>
          </div>
        </div>

        {/* Feature 5: Customization Options */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:pr-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/564x/dc/87/55/dc8755c99d4ca53a26157cf84ff88d2a.jpg" 
              alt="Customization Options" 
              className="rounded-lg h-[400px] object-cover shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              We offer customization options for those who seek a personal touch in their pottery. Whether it’s a specific design, size, or engraving, we work closely with our customers to bring their visions to life.
            </p>
          </div>
        </div>

        {/* Feature 6: Quality Assurance */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:order-2 md:pl-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/564x/9a/19/77/9a1977260eed4b877e894b2037801a34.jpg" 
              alt="Quality Assurance" 
              className="rounded-lg h-[400px] shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-600">
              Every product undergoes rigorous quality checks to ensure that it meets our high standards. We take pride in delivering only the best to our customers, with a focus on durability and aesthetic appeal.
            </p>
          </div>
        </div>

        {/* Feature 7: Global Shipping */}
        <div className="flex flex-col h-[400px] md:flex-row items-center mb-16">
          <div className="md:w-1/2 h-[400px] md:pr-8 mb-8 md:mb-0">
            <img 
              src="https://i.pinimg.com/736x/bf/09/6c/bf096c047fc69f859785596672fb1b7a.jpg" 
              alt="Global Shipping" 
              className="rounded-lg h-[400px] object-cover shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Global Shipping</h2>
            <p className="text-lg text-gray-600">
              We offer global shipping, ensuring that our beautiful pottery can reach customers wherever they are. Our packaging is designed to protect your products during transit, so they arrive in perfect condition.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore Our Collection</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the unique features that make Mitti Mahal's pottery special. Browse our collection today and find the perfect piece to add to your home.
          </p>
          <Link
            href="/shop" 
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700"
          >
            Shop Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Features;