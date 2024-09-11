'use client';
import React, { useState } from 'react';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };
  return (
    <div className="bg-white min-h-screen mt-10 flex h-[100vh] items-center justify-center p-6">
      <div className="max-w-6xl w-full flex h-[100vh] flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">

        
        <div className="w-full md:w-1/2 h-[90vh] flex justify-center">
          <img
            src="https://i.pinimg.com/236x/b0/c6/9c/b0c69cb637ba5d363baae66dd6617d34.jpg"
            alt="Handcrafted Clay Pot"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Handcrafted Clay Pot</h1>
          <p className="text-lg text-gray-600 mb-6">
            This beautifully handcrafted clay pot is perfect for your home decor. Made with natural clay, it adds a rustic and traditional touch to any space.
          </p>

          <div className="mb-6">
            <span className="text-2xl font-semibold text-red-900">$45.00</span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Features:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>100% natural clay</li>
              <li>Handcrafted by local artisans</li>
              <li>Eco-friendly and sustainable</li>
              <li>Perfect for indoor and outdoor use</li>
              <li>Available in multiple sizes</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications:</h2>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Dimensions:</strong> 10 x 8 inches</li>
              <li><strong>Weight:</strong> 1.5 kg</li>
              <li><strong>Material:</strong> Natural clay</li>
              <li><strong>Color:</strong> Terracotta</li>
            </ul>
          </div>

          <div className="mb-6">
            <label htmlFor="quantity" className="text-lg font-medium text-gray-800 mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button className="w-full md:w-auto px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;