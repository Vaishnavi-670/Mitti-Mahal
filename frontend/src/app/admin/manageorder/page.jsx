'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// import { toast } from 'react-toastify';
const ManageOrder = () => {
  const calculateItemsTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.qty, 0);
  };

  const [orderList, setOrderList] = useState([]);
  const fetchOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setOrderList(data);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  // Function to update the order status
  const updateOrderStatus = async (id, status) => {
    console.log(`Updating order ${id} to status: ${status}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/update/` + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderStatus: status }),
    });

    if (res.status === 200) {
      toast.success('Order Status Updated Successfully', { variant: 'success' });
      fetchOrders();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 w-[90%] min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Manage Orders</h2>
        {orderList.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  {/* <th className="px-4 py-2 border">Product Image</th> */}
                  <th className="px-4 py-2 border">No. of Products</th>
                  <th className="px-4 py-2 border">Total Price</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Actions</th>
                  <th className="px-4 py-2 border">View Details</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order) => (
                  <tr key={order._id} className="text-center hover:bg-gray-50 transition">
                    {/* <td className="px-4 py-2 border">
                      <img
                        src={order.image}
                        alt={order.title}
                        className="w-20 h-20 rounded-md object-cover mx-auto"
                      />
                    </td> */}
                    <td className="px-4 py-2 border">{order.items.length}</td>
                    <td className="px-4 py-2 border">₹{calculateItemsTotal(order.items)}</td>
                    
                    {/* Order Status Dropdown */}
                    <td className="px-4 py-2 border">
                      <select
                        value={order.orderStatus}
                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                        className="px-3 py-2 border rounded-lg text-gray-700 font-medium bg-gray-100 focus:outline-none"
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Cancel Order Button */}
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => updateOrderStatus(order._id, "Cancelled")}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Cancel Order
                      </button>
                    </td>

                    {/* View Details Button */}
                    <td className="px-4 py-2 border">
                      <Link
                        href={`/user/order/${order._id}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        View Details
                      </Link>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOrder;
