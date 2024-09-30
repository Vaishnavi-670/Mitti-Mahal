'use client'
'use client';
import React, { useState } from 'react';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('wallet');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'wallet':
        return <div>Wallet Details: Your balance is $100</div>;
      case 'wishlist':
        return <div>Wishlist Items: Clay Vase, Clay Bowl</div>;
      case 'orders':
        return <div>Orders: Clay Mug, Clay Plate</div>;
      case 'account':
        return <div>Account Details: John Doe, johndoe@gmail.com</div>;
      case 'settings':
        return <div>Settings: Notification Preferences, Privacy Settings</div>;
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
          <button
            className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === 'wallet' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveSection('wallet')}
          >
            My Wallet
          </button>
          <button
            className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === 'wishlist' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveSection('wishlist')}
          >
            Wishlist
          </button>
          <button
            className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === 'orders' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveSection('orders')}
          >
            Orders
          </button>
          <button
            className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === 'account' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveSection('account')}
          >
            Account Details
          </button>
          <button
            className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === 'settings' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveSection('settings')}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-3/4 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Details</h2>
        <div className="text-gray-700">{renderSectionContent()}</div>
      </div>
    </div>
  );
};

export default UserProfile;
