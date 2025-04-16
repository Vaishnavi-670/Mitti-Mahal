'use client';
import React, { useEffect, useState } from 'react';
import Wishlist from '../wishlist/page';
import Orders from './Orders';
import Account from './Account';
import Settings from './Settings';
import axios from 'axios';
import toast from 'react-hot-toast';
const ISSERVER = typeof window === "undefined";



const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('wallet');
  const [userData, setuserData] = useState([])
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
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateProfile = (values) => {
    console.log(values);

    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/`, values, {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        // router.push('/manageuser');
        toast.success('User updated successfully');
        setuserData(values);
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || 'Something went wrong');
      });
  }

  const renderSectionContent = () => {
    switch (activeSection) {
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

  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mittimahal');
    fd.append('cloud_name', 'df7ifncgy');

    axios.post('https://api.cloudinary.com/v1_1/df7ifncgy/image/upload',
      fd,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
      .then((response) => {
        console.log(response.data);
        updateProfile({ ...userData, avatar: response.data.url });
        // userData.setFieldValue('image', response.data.url);

      }).catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-2xl shadow-slate-300  transform transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          <img
            src={userData.avatar}
            alt="User"
            className="w-28 h-28   rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <input type="file" accept="image/*" className="mt-2" onChange={uploadToCloud} />
        </div>
        <div className="mt-4">
          {['wishlist', 'orders', 'account', 'settings'].map((section) => (
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
