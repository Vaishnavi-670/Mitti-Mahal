'use client'
import useCartContext from '@/context/CartContext';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const ISSERVER = typeof window === "undefined";


const ManageOrdersPage = () => {
  const { cart, } = useCartContext();

  const calculateItemsTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

  const [orderList, setorderList] = useState([])
  const fetchProduct = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/getbyuser`,
      {
        headers: {
          'x-auth-token': JSON.parse(!ISSERVER && localStorage.getItem('user'))?.token
        },
      }
    );
    console.log(res.status);
    setorderList(res.data);
    // const data = await res.json();
    console.table(res.data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  const cancelOrder = async (id) => {
    console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/update/` + id, {
      method: 'PUT', body:
        JSON.stringify({ orderStatus: 'Cancelled' })
    });
    if (res.status === 200) {
      toast.success('Product Deleted Successfully', { variant: 'success' });
      fetchProduct();
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="p-8 w-[90%] min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Manage Orders</h2>
        {orderList.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Product Id</th>
                  <th className="px-4 py-2 border">Product Name</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Quantity</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Actions</th>
                  <th className="px-4 py-2 border">View Details</th>
                </tr>

              </thead>

              <tbody>
                
                {orderList.map((order) => (
                  <tr key={order._id} className="text-center hover:bg-gray-50 transition">
                    <td className="px-4 py-2 border">
                      {/* <img
                        src={order.image}
                        alt={order.title}
                        className="w-20 h-20 rounded-md object-cover mx-auto"
                      /> */}
                      {order._id}
                    </td>

                    <td className="px-4 py-2 border">{order.items.title}</td>
                    <td className="px-4 py-2 border">{order.items.length}</td>
                    <td className="px-4 py-2 border">₹{calculateItemsTotal(order.items)}</td>
                    {/* <td className="px-4 py-2 border">{order.qty}</td> */}
                    <td className="px-4 py-2 border">
                      <span
                        className={`px-3 py-1 rounded-md text-sm ${order.status === 'Delivered'
                          ? 'bg-green-200  text-green-800'
                          : order.status === 'In Transit'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-blue-200 text-blue-800'
                          }`}
                      >
                        {order.status}
                      </span>

                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => cancelOrder(order._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Cancel Order
                      </button>
                    </td>
                    <td>
                      <Link href={`/user/order/${order._id}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
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

export default ManageOrdersPage;
