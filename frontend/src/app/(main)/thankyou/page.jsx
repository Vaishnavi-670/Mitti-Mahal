"use client";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "next/navigation";
import Link from "next/link";
const ThankYou = () => {
  const hasRun = useRef();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  let params = new URLSearchParams(location.search);
  console.log(params.get("payment_intent"));

  const savePayment = async () => {
    const bookingDetails = JSON.parse(sessionStorage.getItem("bookingDetails"));
    const paymentDetails = await retrievePaymentIntent();
    const response = await fetch(
      `http://localhost:5000/booking/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bookingDetails,
          paymentDetails: paymentDetails,
          intentId: params.get("payment_intent")
        }),
      }
    );
    console.log(response.status);
    if (response.status === 200) {
      sessionStorage.removeItem("bookingDetails");
      sessionStorage.removeItem("carDetails");
    }
  };

  const retrievePaymentIntent = async () => {
    const response = await fetch(
      `http://localhost:5000/retrieve-payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({
          paymentIntentId: params.get("payment_intent"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status);
    const data = await response.json();
    // console.log(data);
    return data;
  };

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      if (params.get("redirect_status") === "succeeded") {
        savePayment();

      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <img
        src="https://i.pinimg.com/474x/36/ff/00/36ff00f0c9a628602af4a301a7144298.jpg" // Replace with your image path
        alt="Thank you"
        className="w-72 h-72 object-cover mb-10 rounded-full shadow-2xl "
      />
      <h1 className="text-4xl font-bold text-orange-700 mb-4 animate-fade-in">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6 animate-fade-in">
        Your support means a lot to us! We hope our handcrafted clay products bring warmth and elegance to your home. 
      </p>
      
      <p className="text-sm text-gray-500 text-center max-w-md animate-fade-in mb-6">
        Need help with your order? Please reach out to us at{' '}
        <a href="mailto:support@mittimahal.com" className="text-orange-600 underline">
          support@mittimahal.com
        </a>{' '}
        or call us at <strong>+123 456 7890</strong>.
      </p>
      <Link
        href="/"
        className="bg-orange-600 text-white px-6 py-3 rounded-3xl shadow-md hover:bg-orange-700 transition duration-300 ease-in-out animate-fade-in"
      >
        Back to Home Page
      </Link>

      
      
    </div>
  );
};

export default ThankYou;
