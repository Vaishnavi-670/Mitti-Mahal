'use client';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        razorpay: any;
    }
}
const CheckoutPage = () => {
    const AMOUNT = 5000; // Amount in paise (100 paise = 1 Rs)
    const [isProcessing, setisProcessing] = useState(false);
    const handlePayment = async ()=>{
        setisProcessing(true);
        try {
            
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto ">
                <h1 className="text-4xl font-bold mb-10 text-center  text-gray-800"> Checkout
                </h1>
                <div className="flex gap-12">
                    {/* Left Section  Product Details */}
                    <div className="bg-white p-14 rounded-2xl w-[27%] shadow-xl transform transition-transform hover:scale-105">
                        <h2 className="text-3xl font-semibold border-b pb-4 mb-8 text-gray-700">
                            Your Order
                        </h2>
                        {/* Product Information */}
                        <div className="flex flex-col mb-6">
                            <img
                                src="https://i.pinimg.com/236x/fa/84/12/fa8412953fc0e81715ab628daf7e5947.jpg"
                                alt="Clay Product"
                                className="w-full h-60 object-cover rounded-xl"
                            />
                            {/* <div className="mt-5">
                                <h3 className="text-2xl font-semibold text-gray-700">Bowl</h3>
                                <p className="text-gray-500">Short description of the product you ordered.</p>
                                <p className="text-lg font-semibold mt-2 text-red-600">Price: $50.00</p>
                            </div> */}
                        </div>
                        {/* Pricing Detail */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-lg">
                                <p className="text-gray-600">Subtotal:</p>
                                <p className="text-gray-800 font-bold">$50.00</p>
                            </div>
                            <div className="flex justify-between text-lg">
                                <p className="text-gray-600">Shipping:</p>
                                <p className="text-gray-800 font-bold">$5.00</p>
                            </div>

                            {/* Discount Code  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="discount-code"
                                    className="block text-gray-600 text-lg font-medium"
                                >
                                    Discount Code:
                                </label>
                                <div className="flex items-center space-x-4 mt-2">
                                    <input
                                        type="text"
                                        id="discount-code"
                                        placeholder="Enter code"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500"
                                    />
                                    <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300">
                                        Apply
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">Apply a discount code if you have one.</p>
                            </div>

                            <div className="flex justify-between text-lg font-semibold border-t pt-4">
                                <p className="text-gray-700">Total:</p>
                                <p className="text-gray-900 font-bold">$55.00</p>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="mt-6">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                                    required
                                />
                                <span className="text-gray-700">
                                    I agree to the
                                    <a href="/terms" className="text-blue-500 underline ml-1">
                                        Terms and Conditions
                                    </a>
                                </span>
                            </label>
                        </div>                      
                    </div>
                    {/* Right Section - Shipping Details and Payment */}
                    <div className="bg-white p-8 rounded-2xl w-[73%] transform transition-transform">
                        <h2 className="text-3xl font-semibold border-b pb-4 mb-8 text-gray-700">
                            Shipping Address
                            <img src="https://i.pinimg.com/236x/a7/5e/2f/a75e2f85004206915e5430120f9a65d2.jpg" alt="Standard" className="inline-block object-cover w-14 h-16 mr-2" />

                        </h2>
                        <form className="space-y-6">
                            <h2 className="text-2xl font-semibold mt-8 text-gray-700">
                                <img src="https://i.pinimg.com/236x/b4/92/94/b4929462e87b63e20537bc5ec702d0cc.jpg" alt="Standard" className="inline-block object-cover w-10 h-9 mr-2" />
                                Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-lg font-medium text-gray-700 "
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-2 p-4 w-full border  rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="Your First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-lg font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="Your Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="number"
                                        className="block text-lg font-medium  text-gray-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="number"
                                        className="mt-2 p-4 w-full border  rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="Your Phone Number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-lg font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-2 p-4 w-full border  rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
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
                                    <label className="block text-sm font-medium text-gray-600">
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                        placeholder="Postal Code"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Shipping Address
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                    placeholder="Enter your shipping address"
                                />
                            </div>

                            
                            <h2 className="text-2xl font-semibold mt-8 text-gray-700">
                                <img src="https://i.pinimg.com/236x/f3/99/f4/f399f4c3a5662fcbf8a1a7e8fb69a181.jpg" alt="Standard" className="inline-block object-cover w-10 h-9 mr-2" />
                                Delivery Method</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="delivery" id="standard" className="h-5 w-5" />
                                    <label htmlFor="standard" className="text-lg font-medium text-gray-700">
                                        Standard Delivery (3-5 days)
                                    </label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="delivery" id="express" className="h-5 w-5" />
                                    <label htmlFor="express" className="text-lg font-medium text-gray-700">
                                        Express Delivery (1-2 days)
                                    </label>
                                </div>
                            </div>

                            {/* Payment Method Section */}
                            {/* <h2 className="text-2xl font-semibold mt-8 text-gray-700">
                                <img src="https://i.pinimg.com/236x/6d/20/15/6d20156a784ad1a24110d6379cc79156.jpg" alt="Standard" className="inline-block object-cover w-10 h-9 mr-2" />

                                Payment Method</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="payment" id="creditCard" className="h-5 w-5" />
                                    <label htmlFor="creditCard" className="text-lg font-medium text-gray-700">
                                        <img src="https://i.pinimg.com/236x/8e/3f/27/8e3f27de23b9837d3c2c78d947bd8941.jpg" alt="Credit Card" className="inline-block w-6 h-6 mr-2" />
                                        Credit/Debit Card
                                    </label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="payment" id="paypal" className="h-5 w-5" />
                                    <label htmlFor="paypal" className="text-lg font-medium text-gray-700">
                                        <img src="https://i.pinimg.com/236x/10/4f/24/104f249d8b4824276ed9f2892a8fdb6e.jpg" alt="PayPal" className="inline-block w-6 h-6 mr-2" />
                                        PayPal
                                    </label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="payment" id="googlePay" className="h-5 w-5" />
                                    <label htmlFor="googlePay" className="text-lg font-medium text-gray-700">
                                        <img src="https://i.pinimg.com/236x/f6/60/a6/f660a637c5ea8ef2b00218bac3479c82.jpg" alt="Google Pay" className="inline-block w-6 h-6 mr-2" />
                                        Google Pay
                                    </label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="payment" id="applePay" className="h-5 w-5" />
                                    <label htmlFor="applePay" className="text-lg font-medium text-gray-700">
                                        <img src="https://i.pinimg.com/236x/cf/11/eb/cf11ebcc0a874e3ad3830431f7b0ab58.jpg" alt="Apple Pay" className="inline-block w-6 h-6 mr-2" />
                                        Apple Pay
                                    </label>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="radio" name="payment" id="bankTransfer" className="h-5 w-5" />
                                    <label htmlFor="bankTransfer" className="text-lg font-medium text-gray-700">
                                        <img src="https://i.pinimg.com/236x/81/e2/cb/81e2cb082f344dc0dd2040cf20ac506b.jpg" alt="Bank Transfer" className="inline-block w-6 h-6 mr-2" />
                                        Bank Transfer
                                    </label>
                                </div>
                            </div>                            */}
                            <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-300 shadow-lg mt-6">
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
