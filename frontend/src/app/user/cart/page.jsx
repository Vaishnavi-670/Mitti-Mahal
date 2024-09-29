'use client';
import useCartContext from "@/context/CartContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const CartPage = () => {

  const { cart, incrementQty, decrementQty , calculateTotalPrice } = useCartContext();
  const [cartItems, setCartItems] = useState([])
  const updateQuantity = (id, amount) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + amount }
        : item
    );
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen">
      <header className="text-center py-8  mb-5">
        <h1 className="text-4xl font-bold text-black">
          <span className="inline-block transform transition-transform duration-700 ease-in-out hover:-translate-y-1">
            Your Cart
            <img src="https://i.pinimg.com/236x/02/3b/3e/023b3e3ca534ae94a88cfc898b31e0cf.jpg" alt="Standard" className="inline-block object-cover w-14 h-16 ml-2" />

          </span>

        </h1>
        <p className="text-lg">A curated selection of your favorite clay products, ready to be shipped with care.</p>
      </header>
      <div className="flex mt-3">
        <div className=" w-[68%] p-6">
          {/* Cart Items */}
          <div className="bg-white  p-6  rounded-lg">
            {cart.map((item) => (
              <div key={item._id} className="mb-6 border-b pb-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-32 h-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <h3 className="text-md font-semibold">Price</h3>
                        <p className="text-lg text-gray-700">₹{item.price}</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-md font-semibold">Quantity</h3>
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => decrementQty(item._id)}
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => incrementQty(item._id)}
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="text-right text-lg font-bold text-gray-800">
              Total: ₹{calculateTotalPrice()}
            </div>

            {/* Promo Code Section */}
            <div className="mt-6 p-4 bg-gray-50 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Apply Promo Code</h3>
              <div className="flex space-x-4">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter promo code"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Apply
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Apply a valid promo code to get discounts on your total purchase.
              </p>
            </div>

            {/* Checkout Button */}
            <div className="text-right mt-6">
              <Link href='/user/checkout' className="px-6 py-4 bg-green-500 text-white rounded-3xl hover:bg-green-600 transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
        <div className=" shadow-xl shadow-gray-400 rounded-xl mr-3 h-[80vh]   w-[30%]">
          <img className="object-cover rounded-xl hover:scale-105 transform transition-transform h-full w-full" src="https://i.pinimg.com/474x/46/2c/99/462c999167881ebe9e6dae62390582fe.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
