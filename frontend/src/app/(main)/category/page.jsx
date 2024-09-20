'use client'
import React from 'react'

const categories = [
    {
      name: "Clay Pots",
      products: [
        { id: 1, name: "Earthen Clay Pot", price: "$20", image: "pot1.jpg" },
        { id: 2, name: "Handmade Clay Pot", price: "$25", image: "pot2.jpg" },
        { id: 2, name: "Decorative Clay Pot", price: "$25", image: "pot2.jpg" },
        { id: 2, name: "Aesthectic Clay Pot", price: "$25", image: "pot2.jpg" },
      ],
    },
    
    {
      name: "Clay Vases",
      products: [
        { id: 3, name: "Decorative Clay Vase", price: "$30", image: "vase1.jpg" },
        { id: 4, name: "Handcrafted Clay Vase", price: "$35", image: "vase2.jpg" },
        { id: 4, name: "Earthen Clay Vase", price: "$35", image: "vase2.jpg" },
        { id: 4, name: "Aesthetic Clay Vase", price: "$35", image: "vase2.jpg" },
      ],
    },
    {
      name: "Clay Plates",
      products: [
        { id: 5, name: "Rustic Clay Plate", price: "$15", image: "plate1.jpg" },
        { id: 5, name: "Decorative Clay Plate", price: "$15", image: "plate1.jpg" },
        { id: 5, name: "Rustic Clay Plate", price: "$15", image: "plate1.jpg" },
        { id: 6, name: "Handmade Clay Plate", price: "$18", image: "plate2.jpg" },
      ],
    },
  ];
  

const Category = () => {
  return (
    <>
    <div className="  px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
          <div className="grid  grid-cols-3 lg:grid-cols-4 gap-5">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>

  )
}

export default Category;