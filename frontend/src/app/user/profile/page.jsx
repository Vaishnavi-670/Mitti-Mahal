'use client';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

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
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://example.com/clay-vase.jpg" // Replace with actual image URL
                  alt="Clay Vase" // Replace with actual title
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">Clay Vase</h2>
                <p className="text-gray-600">A beautiful handcrafted clay vase.</p>
                <StarRatings
                  rating={4} // Replace with actual rating
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="5px"
                />
                <button className="mt-4 text-sm text-blue-500 hover:underline">
                  View Details
                </button>
              </div>

              <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://example.com/clay-bowl.jpg" // Replace with actual image URL
                  alt="Clay Bowl" // Replace with actual title
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">Clay Bowl</h2>
                <p className="text-gray-600">An elegant clay bowl for your kitchen.</p>
                <StarRatings
                  rating={5} // Replace with actual rating
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="5px"
                />
                <button className="mt-4 text-sm text-blue-500 hover:underline">
                  View Details
                </button>
              </div>

              {/* Add more products here if needed */}
            </div>
          </div>

        );
      case 'orders':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://example.com/clay-mug.jpg" // Replace with the actual image URL
                    alt="Clay Mug"
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Clay Mug</h4>
                    <p className="text-sm text-gray-600">Order Date: 12th August 2024</p>
                    <p className="text-lg font-bold text-gray-800">$15.00</p> {/* Replace with actual price */}
                  </div>
                </div>
                <button className="text-sm text-blue-500 hover:underline">Track Order</button>
              </li>
              <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="https://example.com/clay-plate.jpg" // Replace with the actual image URL
                    alt="Clay Plate"
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Clay Plate</h4>
                    <p className="text-sm text-gray-600">Order Date: 5th September 2024</p>
                    <p className="text-lg font-bold text-gray-800">$20.00</p> {/* Replace with actual price */}
                  </div>
                </div>
                <button className="text-sm text-blue-500 hover:underline">Track Order</button>
              </li>
            </ul>
          </div>

        );
      case 'account':
        return (
          <div className="bg-white p-8 rounded-2xl w-[73%] transform transition-transform shadow-lg">
            {/* <h2 className="text-3xl font-semibold border-b pb-4 mb-8 text-gray-700">
            Account Details
            <img
              src="https://i.pinimg.com/236x/a7/5e/2f/a75e2f85004206915e5430120f9a65d2.jpg"
              alt="Account"
              className="inline-block object-cover w-14 h-16 mr-2"
            />
          </h2> */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-lg font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="City"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-lg font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="State"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pincode" className="block text-lg font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="Pincode"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="shippingAddress" className="block text-lg font-medium text-gray-700">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    id="shippingAddress"
                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                    placeholder="Enter your shipping address"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-all ease-in-out duration-300 shadow-lg"
              >
                Save Changes
              </button>
            </form>
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
              className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === section ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
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
