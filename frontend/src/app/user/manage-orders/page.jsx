'use client'
import React from 'react';

const ManageOrdersPage = () => {
  const orders = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Clay Pot',
      price: '$20',
      quantity: 2,
      status: 'Shipped',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Clay Vase',
      price: '$35',
      quantity: 1,
      status: 'In Transit',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Clay Plate',
      price: '$15',
      quantity: 4,
      status: 'Delivered',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="p-8 w-[90%]  min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center bg-white rounded-lg p-4 shadow-md"
          >
            <img
              src={order.image}
              alt={order.name}
              className="w-20 h-20 rounded-md object-cover mr-6"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{order.name}</h3>
              <p className="text-gray-600">Price: {order.price}</p>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
            </div>
            <div className="flex flex-col items-end">
              <span
                className={`px-3 py-1 rounded-md text-sm ${
                  order.status === 'Delivered'
                    ? 'bg-green-200 text-green-800'
                    : order.status === 'In Transit'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-blue-200 text-blue-800'
                }`}
              >
                {order.status}
              </span>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Cancel Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ManageOrdersPage;
