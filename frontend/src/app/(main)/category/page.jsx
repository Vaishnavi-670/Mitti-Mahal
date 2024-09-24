'use client';
import React, { useState } from 'react';

const categories = [

  {
    name: "Clay Pots",
    products: [
      { id: 1, name: "Earthen Clay Pot", price: "$20", image: "https://i.pinimg.com/236x/fb/3a/d3/fb3ad3e591a3f91461ffee7243e7638c.jpg" },
      { id: 2, name: "Handmade Clay Pot", price: "$25", image: "https://i.pinimg.com/236x/6b/f9/00/6bf9002706e630c66ca2feb955cfbf49.jpg" },
      { id: 3, name: "Decorative Clay Pot", price: "$25", image: "https://i.pinimg.com/236x/04/7d/5f/047d5fb090a9d99382a67657816a7e3c.jpg" },
      { id: 4, name: "Aesthetic Clay Pot", price: "$25", image: "https://i.pinimg.com/236x/38/55/39/3855391293372869e0b6ffe1c93a44a8.jpg" },
    ],
  },

  {
    name: "Clay Vases",
    products: [
      { id: 5, name: "Decorative Clay Vase", price: "$30", image: "https://i.pinimg.com/236x/56/ff/12/56ff126534a4501e14538ffd2fca3325.jpg" },
      { id: 6, name: "Handcrafted Clay Vase", price: "$35", image: "https://i.pinimg.com/236x/b8/df/ef/b8dfef4cc70c3f2f8e922019e14b2c87.jpg" },
      { id: 7, name: "Earthen Clay Vase", price: "$35", image: "vase3.jpg" },
      { id: 8, name: "Aesthetic Clay Vase", price: "$35", image: "vase4.jpg" },
    ],
  },
  
  {
    name: "Clay Plates",
    products: [
      { id: 9, name: "Rustic Clay Plate", price: "$15", image: "plate1.jpg" },
      { id: 10, name: "Decorative Clay Plate", price: "$15", image: "plate2.jpg" },
      { id: 11, name: "Aesthetic Clay Plate", price: "$15", image: "plate3.jpg" },
      { id: 12, name: "Handmade Clay Plate", price: "$18", image: "plate4.jpg" },
    ],
  },
];

const Category = () => {

  const [category, setcategory] = useState([])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Our Products
      </h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-700">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{product.price}</p>
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
