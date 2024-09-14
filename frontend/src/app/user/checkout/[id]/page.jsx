'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
    const [product, setproduct] = useState([])
    const { id } = useParams();

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/product/getbyid/' + id);
        console.log(res.status);
        const data = await res.json();
        setproduct(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Section - Product Details */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105">
                        <h2 className="text-3xl font-semibold border-b pb-4 mb-8 text-gray-700">Your Order</h2>

                        <div className="flex items-center space-x-6 mb-6">
                            <img
                                src="your-product-image.jpg"
                                alt="Clay Product"
                                className="w-40 h-40 object-cover rounded-xl"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">{product.title}</h3>
                                <p className="text-gray-500">Short description of the product you ordered.</p>
                                <p className="text-lg font-semibold mt-2 text-gray-800">Price: $50.00</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-lg">
                                <p className="text-gray-600">Subtotal:</p>
                                <p className="text-gray-800">$50.00</p>
                            </div>
                            <div className="flex justify-between text-lg">
                                <p className="text-gray-600">Shipping:</p>
                                <p className="text-gray-800">$5.00</p>
                            </div>
                            <div className="flex justify-between text-lg font-semibold border-t pt-4">
                                <p className="text-gray-700">Total:</p>
                                <p className="text-gray-900">$55.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Shipping Details and Payment */}
                    <div className="bg-white p-8 rounded-2xl  transform transition-transform ">
                        <h2 className="text-3xl font-semibold border-b pb-4 mb-8 text-gray-700">Shipping Address</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
                                <input
                                    type="text"
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                    placeholder="Enter your shipping address"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">City</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="City"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Postal Code</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="Postal Code"
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-300 shadow-lg">
                                Proceed to Payment
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
