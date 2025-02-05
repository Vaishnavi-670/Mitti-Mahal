'use client';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import useCartContext from '@/context/CartContext';
import { Formik, useFormik } from 'formik';


const CheckoutPage = () => {
    const { cart, calculateTotalPrice } = useCartContext();

    const checkoutForm = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            shippingaddress: '',
            city: '',
            postalCode: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const AMOUNT = 5000; // Amount in paise (100 paise = 1 Rs)
    const [isProcessing, setisProcessing] = useState(false);
    const handlePayment = async () => {
        setisProcessing(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`, {
                method: "POST"
            });
            const data = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: calculateTotalPrice(),
                currency: "INR",
                name: "Mitti Mahal",
                description: "Product Purchase",
                order_id: data.orderId,
                handler: async (response) => {
                    console.log("Payment successful", response);
                    // save new order
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            products: cart,
                            amount: AMOUNT,
                            paymentId: response.razorpay_payment_id,

                        })
                    });
                    const data = await res.json();
                },
                prefill: {
                    name: "User",
                    email: "user@example.com",
                    contact: "1234567890"
                },
                theme: {
                    color: "#3399cc",
                }
            }
            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        }
        catch (error) {
            console.error("Payment failed", error);
        } finally {
            setisProcessing(false);
        }
    };


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

                        <div>
                            {cart.map((item) => (
                                <div key={item._id} className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-gray-500">₹{item.price}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500">x{item.qty}</p>
                                </div>
                            ))}
                            <div className="text-right text-lg font-bold text-gray-800">
                                Total: ₹{calculateTotalPrice()}
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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.firstName}

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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.lastName}
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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.phone}
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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.email}
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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.city}
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
                                        onChange={checkoutForm.handleChange} value={checkoutForm.values.postalCode}
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
                                    onChange={checkoutForm.handleChange} value={checkoutForm.values.shippingaddress}
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
                            <Script src='https://checkout.razorpay.com/v1/checkout.js' />
                            <button onClick={handlePayment}
                                disabled={isProcessing}
                                className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-300 shadow-lg mt-6">
                                {isProcessing ? <span className="text-gray-300">Processing...</span> : 'Proceed to Payment'}

                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
