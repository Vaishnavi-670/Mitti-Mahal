'use client';
import React, { useState } from 'react';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('wallet');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'wallet':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">My Wallet</h3>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
              <div className="text-lg font-semibold">Current Balance:</div>
              <div className="text-xl font-bold text-blue-600">$100</div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-4 rounded-lg mb-2">
                <h4 className="font-semibold">Recent Transactions</h4>
                <p className="text-sm text-gray-600">Spent $30 on Clay Plate - 12th Sept 2024</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold">Pending Amount</h4>
                <p className="text-sm text-gray-600">$10 for Clay Mug - Estimated release: 20th Sept 2024</p>
              </div>
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">My Wishlist</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Clay Vase</span>
                <button className="text-sm text-blue-500 hover:underline">View Details</button>
              </li>
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Clay Bowl</span>
                <button className="text-sm text-blue-500 hover:underline">View Details</button>
              </li>
            </ul>
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div>
                  <h4 className="font-semibold">Clay Mug</h4>
                  <p className="text-sm text-gray-600">Order Date: 12th August 2024</p>
                </div>
                <button className="text-sm text-blue-500 hover:underline">Track Order</button>
              </li>
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div>
                  <h4 className="font-semibold">Clay Plate</h4>
                  <p className="text-sm text-gray-600">Order Date: 5th September 2024</p>
                </div>
                <button className="text-sm text-blue-500 hover:underline">Track Order</button>
              </li>
            </ul>
          </div>
        );
      case 'account':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">Account Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="font-semibold">Name:</span>
                <span>John Doe</span>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="font-semibold">Email:</span>
                <span>johndoe@gmail.com</span>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span className="font-semibold">Shipping Address:</span>
                <span>123 Clay Street, Pottersville, NY</span>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Notification Preferences</span>
                <button className="text-sm text-blue-500 hover:underline">Manage</button>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Privacy Settings</span>
                <button className="text-sm text-blue-500 hover:underline">Manage</button>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Welcome to your profile!</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/236x/fa/84/12/fa8412953fc0e81715ab628daf7e5947.jpg"
            alt="User"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">John Doe</h2>
        </div>
        <div className="mt-8">
          {['wallet', 'wishlist', 'orders', 'account', 'settings'].map((section) => (
            <button
              key={section}
              className={`w-full text-left p-3 mb-4 rounded-lg ${
                activeSection === section ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-3/4 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Details</h2>
        <div className="text-gray-700">{renderSectionContent()}</div>
      </div>
    </div>
  );
};

export default UserProfile;
