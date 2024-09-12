import Link from 'next/link';
import React from 'react';

const Shop = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Handcrafted Vase',
      price: '$45.00',
      imageUrl: 'https://via.placeholder.com/400x400',
      description: 'A beautifully handcrafted vase made from high-quality clay, perfect for any home decor.',
    },
    {
      id: 2,
      name: 'Clay Tea Set',
      price: '$75.00',
      imageUrl: 'https://via.placeholder.com/400x400',
      description: 'A traditional clay tea set, offering a unique and authentic tea-drinking experience.',
    },
    {
      id: 3,
      name: 'Decorative Plate',
      price: '$30.00',
      imageUrl: 'https://via.placeholder.com/400x400',
      description: 'An intricately designed decorative plate that adds a touch of elegance to any room.',
    },
    {
      id: 4,
      name: 'Hand-Painted Bowl',
      price: '$55.00',
      imageUrl: 'https://via.placeholder.com/400x400',
      description: 'A hand-painted bowl featuring vibrant colors and detailed patterns, perfect for display or use.',
    },
    
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Mitti Mahal Shop</h1>
          <p className="text-lg text-gray-600">
            Discover the exquisite collection of handcrafted clay products at Mitti Mahal. Our shop features a wide range of items, from traditional pottery to modern designs, each crafted with care and attention to detail. Explore our collection and find the perfect piece to enhance your home or gift to a loved one.
          </p>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white border rounded-lg shadow-lg p-6">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-800 mb-4">{product.price}</p>
              <Link 
                href={`/product/${product.id}`} 
                className="block bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>


        <div className="bg-gray-100 py-16 px-8 md:px-16 lg:px-32 text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our products or need help with your order? Reach out to our customer support team for assistance.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default Shop;