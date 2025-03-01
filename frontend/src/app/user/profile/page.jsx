'use client';
import React, { useEffect, useState } from 'react';
import Wishlist from '../wishlist/page';
import Wallet from './Wallet';
import Orders from './Orders';
import Account from './Account';
import Settings from './Settings';
import axios from 'axios';
const ISSERVER = typeof window === undefined;



const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('wallet');
  const [userData, setuserData] = useState(null)
  const token = !ISSERVER ? localStorage.getItem('token') : '';

  const fetchUserData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
          headers: {
              'x-auth-token': token
          }
      });
      const data = res.data;
      console.log(data);
      setuserData(data);

  }
  useEffect(() => {
      fetchUserData();
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'wallet':
        return (
          <Wallet />
        );
      case 'wishlist':
        return (
          <Wishlist />

        );
      case 'orders':
        return (
          <Orders />

        );
      case 'account':
        return (
          <Account />
        );
      case 'settings':
        return (
          <Settings />
        );
      default:
        return <div>Welcome to your profile!</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-2xl shadow-slate-300  transform transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          <img
            src="https://i.pinimg.com/236x/fa/84/12/fa8412953fc0e81715ab628daf7e5947.jpg"
            alt="User"
            className="w-28 h-28   rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold"></h2>
        </div>
        <div className="mt-4">
          {['wallet', 'wishlist', 'orders', 'account', 'settings'].map((section) => (
            <button
              key={section}
              className={`w-full text-left p-3 mb-4 rounded-lg ${activeSection === section ? 'bg-red-900 text-white' : 'text-gray-700 hover:bg-gray-200'
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
