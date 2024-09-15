'use client'
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center justify-between border-b pb-6 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="/path-to-profile-picture.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
              <p className="text-gray-500">johndoe@example.com</p>
              <p className="text-gray-500">Joined: January 2022</p>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Edit Profile</button>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Personal Information</h2>
            <div className="space-y-2">
              <div>
                <span className="block text-gray-600">Full Name</span>
                <p className="text-gray-800">John Doe</p>
              </div>
              <div>
                <span className="block text-gray-600">Email</span>
                <p className="text-gray-800">johndoe@example.com</p>
              </div>
              <div>
                <span className="block text-gray-600">Phone Number</span>
                <p className="text-gray-800">+1 234 567 890</p>
              </div>
              <div>
                <span className="block text-gray-600">Shipping Address</span>
                <p className="text-gray-800">1234 Elm Street, Springfield, USA</p>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Order History</h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span>Clay Pot</span>
                <span className="text-gray-500">25th August 2024</span>
                <span className="text-green-500">Delivered</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Handmade Vase</span>
                <span className="text-gray-500">5th July 2024</span>
                <span className="text-green-500">Delivered</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Clay Mug Set</span>
                <span className="text-gray-500">12th June 2024</span>
                <span className="text-red-500">Cancelled</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Payment Details</h2>
          <div className="space-y-2">
            <div>
              <span className="block text-gray-600">Payment Method</span>
              <p className="text-gray-800">Credit Card (**** **** **** 1234)</p>
            </div>
            <div>
              <span className="block text-gray-600">Billing Address</span>
              <p className="text-gray-800">1234 Elm Street, Springfield, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
