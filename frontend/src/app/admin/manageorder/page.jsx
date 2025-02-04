'use client';
import React, { useState } from 'react';

const ManageOrder = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Clay Pot', quantity: 2, price: 20, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', product: 'Clay Vase', quantity: 1, price: 35, status: 'Pending' },
    { id: 3, customer: 'Alex Johnson', product: 'Clay Plate Set', quantity: 3, price: 50, status: 'Shipped' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage Orders</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Orders..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border rounded-lg w-full md:w-1/3 shadow-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Order ID</th>
              <th className="px-4 py-2 border">Customer</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="text-center hover:bg-gray-50 transition">
                <td className="px-4 py-2 border">{order.id}</td>
                <td className="px-4 py-2 border">{order.customer}</td>
                <td className="px-4 py-2 border">{order.product}</td>
                <td className="px-4 py-2 border">{order.quantity}</td>
                <td className="px-4 py-2 border">${order.price}</td>
                <td className="px-4 py-2 border">
                  <span className={`px-2 py-1 rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                    order.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>{order.status}</span>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
