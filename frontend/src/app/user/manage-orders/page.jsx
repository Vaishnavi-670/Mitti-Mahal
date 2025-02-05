'use client'
import React, { useEffect, useState } from 'react';

const ManageOrdersPage = () => {
  const [orderList, setorderList] = useState([])
  const fetchProduct = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setorderList(data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="p-8 w-[90%] min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Manage Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Product Name</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr key={order._id} className="text-center hover:bg-gray-50 transition">
                  <td className="px-4 py-2 border">             
                         <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 rounded-md object-cover mx-auto"
                  />
                  </td>
                  <td className="px-4 py-2 border">{order.name}</td>
                  <td className="px-4 py-2 border">${order.price}</td>
                  <td className="px-4 py-2 border">{order.qty}</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-3 py-1 rounded-md text-sm ${order.status === 'Delivered'
                          ? 'bg-green-200 text-green-800'
                          : order.status === 'In Transit'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-blue-200 text-blue-800'
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Cancel Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrdersPage;
