'use client'
import React, { useState } from "react";


const Wishlist = () => {
    const [products, setProducts] = useState([
    {
      id: 1,
      title: "Clay Pot",
      description: "A traditional clay pot perfect for cooking and serving.",
      image: "https://via.placeholder.com/150", 
      rating: 4.5,
    },
    {
      id: 2,
      title: "Clay Vase",
      description: "Beautiful handcrafted clay vase for your home decor.",
      image: "https://via.placeholder.com/150", 
      rating: 3.8,
    },
    {
      id: 3,
      title: "Clay Plate",
      description: "Elegant clay plate to serve your meals in style.",
      image: "https://via.placeholder.com/150", 
      rating: 4.2,
    },
    {
      id: 4,
      title: "Clay Bowl",
      description: "Handmade clay bowl, perfect for any dining experience.",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Clay Mug",
      description: "Enjoy your favorite beverages in this charming clay mug.",
      image: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 6,
      title: "Clay Lamp",
      description: "Decorative clay lamp to brighten up your space.",
      image: "https://via.placeholder.com/150", // Replace with your image URL
    },
  ]);

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
