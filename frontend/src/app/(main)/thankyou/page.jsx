"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const ISSERVER = typeof window === "undefined"; 

const ThankYou = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
};
const ThankYouContent = () => {

  const hasRun = useRef();
  const searchParams = useSearchParams();
  const [currentUser, setCurrentUser] = useState(
    !ISSERVER ? JSON.parse(sessionStorage.getItem("user") || "null") : null
  );   
  // Use searchParams instead of directly accessing location
  const paymentIntentId = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  const savePayment = async () => {   
    const bookingDetails = !ISSERVER ? JSON.parse(sessionStorage.getItem("bookingDetails") || "null") : null;
    const paymentDetails = await retrievePaymentIntent();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/add`,
      {   
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bookingDetails,
          paymentDetails: paymentDetails,
          intentId: paymentIntentId
        }),      
      }
      
    );
    console.log(response.status);
    if (response.status === 200) {
      !ISSERVER && sessionStorage.removeItem("bookingDetails");
      !ISSERVER && sessionStorage.removeItem("carDetails");
    } 
  };
  const retrievePaymentIntent = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/retrieve-payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({
          paymentIntentId: paymentIntentId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status);
    const data = await response.json();
    
    return data;
  };

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      if (redirectStatus === "succeeded") {
        savePayment();
      }
    }
  }, [redirectStatus]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <img
        src="https://i.pinimg.com/originals/73/3d/af/733daf2fa27ca522b952be87b683a78c.gif"  
        className="w-80 h-80  object-cover mb-10 rounded-full shadow-2xl "
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
