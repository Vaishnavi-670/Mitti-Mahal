'use client'
import useWishlistContext from "@/context/WishlistContext";
import React, { useState } from "react";


const Wishlist = () => {
  const { wishlist } = useWishlistContext();


  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description.slice(0, 100)} ...</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
