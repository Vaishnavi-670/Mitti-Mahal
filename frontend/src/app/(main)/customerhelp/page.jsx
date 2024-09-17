import React from 'react';

function CustomerHelpPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Customer Help Center</h1>
        
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Can We Assist You?</h2>
          <p className="text-lg text-gray-600 mb-6">
            We're here to help you with any issues or questions you may have regarding your order, buying products, or any other concerns. Please select from the options below to find the information you need.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">
          
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Issues</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Track your order status</li>
              <li>Report a problem with your order</li>
              <li>Request a return or refund</li>
              <li>Cancel an order</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
              Get Help with Orders
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Buying Products</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>How to place an order</li>
              <li>Payment methods and issues</li>
              <li>Product availability and sizing</li>
              <li>Using discount codes</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
              Get Help with Buying
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shipping options and costs</li>
              <li>Estimated delivery times</li>
              <li>International shipping information</li>
              <li>Tracking your shipment</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
              Get Help with Shipping
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">General Inquiries</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contact customer support</li>
              <li>Frequently Asked Questions (FAQ)</li>
              <li>Account and profile management</li>
              <li>Privacy and security policies</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
              Get General Help
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CustomerHelpPage;