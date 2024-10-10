'use client';
import React, { useEffect, useState } from 'react';


const Category = () => {

  const [category, setcategory] = useState([])
  const [potProducts, setPotProducts] = useState([]);
  const [vaseProducts, setVaseProducts] = useState([]);
  const [bottolProducts, setbottolProducts] = useState([]);

  const fetchTypeData = async (type, setFunction) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getbytype/${type}`);
    const data = await response.json();
    setFunction(data);
  }

  useEffect(() => {
    fetchTypeData('Pot', setPotProducts);
    fetchTypeData('vase', setVaseProducts);
    fetchTypeData('bottol', setbottolProducts);
  }, [])
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Our Products
      </h1>
        <div key={category.name} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-700">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {potProducts.map((product) => (
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
    </div>
  );
};

export default Category;
