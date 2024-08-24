import React from 'react'

const LearnMore = () => {
  return (
<>
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
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
        Our Products
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Clay Sculptures</h3>
            <p className="text-black">
              We create personalized clay sculptures that are perfect for gifts,
              home decor, and more.
            </p>
            <img
              src=""
              alt="Custom Clay Sculptures"
              className="mt-4 mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Wide Range of Products</h3>
            <p className="text-gray-800">
              Explore our diverse range of clay products, including pottery,
              decorative items, and more.
            </p>
            <img
              src="https://your_image_url_here.jpg"
              alt="Wide Range of Products"
              className="mt-4 mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Process Section */}
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Our Process
      </h2>
      <p className="text-center text-gray-800 mb-12">
        From selecting the finest materials to the final touches, learn how our
        clay products are crafted with care and precision.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://your_image_url_here.jpg"
              alt="Clay Crafting Process"
              className="rounded-lg shadow-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">
              Handcrafted with Passion
            </h3>
            <p className="text-gray-600">
              Our artisans meticulously handcraft each piece, ensuring quality
              and uniqueness.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Workshops & Classes Section */}
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Workshops &amp; Classes
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Join our workshops and classes to learn the art of clay crafting from
        experienced artisans.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://your_image_url_here.jpg"
              alt="Workshops & Classes"
              className="rounded-lg shadow-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Learn from the Best</h3>
            <p className="text-gray-600">
              Our workshops offer a hands-on experience where you can create
              your own clay masterpieces.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Eco-Friendly Practices Section */}
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Eco-Friendly Practices
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We are committed to sustainability, using eco-friendly materials and
        processes to minimize our environmental impact.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://your_image_url_here.jpg"
              alt="Eco-Friendly Materials"
              className="rounded-lg shadow-md mb-6"
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
  {/* Testimonials Section */}
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
</>

  )
}

export default LearnMore