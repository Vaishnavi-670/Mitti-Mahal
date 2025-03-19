'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrderDetails = () => {
  const [order, setorder] = useState(null)
  const { id } = useParams();
  const fetchProductId = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getbyid/` + id);
    console.log(res.status);    
    const data = await res.json();
    console.table(data);
    setorder(data);
  };
  useEffect(() => {
    fetchProductId();
  }, [id]);
  const showProductDetails = () => {
    if (order !== null) {
      return (
        <>  
          {order?.items.map((item) => (
            <div
              key={item._id}
              className="mb-6 border-b pb-6 last:border-none last:mb-0 bg-white shadow-sm rounded-lg p-4"
            >
              <div className="flex items-start space-x-6">
                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                </div>  
                {/* Product Details */}
                <div className="flex-1 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-base text-gray-600">{item.description}</p>
  
                  {/* Price */}
                  <div className="flex justify-between items-center mt-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Price</h3>
                      <p className="text-lg font-semibold text-gray-800">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return <h2 className="text-center text-xl font-semibold text-gray-600">Loading ...</h2>;
    }
  };
  
  return (
    <div className=" min-h-screen  flex flex-col items-center">
      {/* Order Details */}
      <div className="w-full max-w-7xl p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl text-center font-bold text-gray-800 border-b pb-4 mb-6">
          Order Details
        </h2>
        {showProductDetails()}
      </div>
  
      {/* Order Summary Section */}
      <div className="w-full max-w-4xl mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
            Order Summary
          </h2>
  
          <div className="space-y-6">
            {/* Total Amount */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-700">Total Amount:</h3>
              <p className="text-lg font-semibold text-green-600">₹{order?.totalAmount}</p>
            </div>
  
            {/* Order Status */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-700">Order Status:</h3>
              <span className={`px-3 py-1 text-lg font-semibold rounded-full 
                ${order?.orderStatus === "Delivered" ? "bg-green-200 text-green-800" :
                  order?.orderStatus === "Processing" ? "bg-yellow-200 text-yellow-800" :
                    "bg-red-200 text-red-800"}`}>
                {order?.orderStatus}
              </span>
            </div>
            {/* Payment Status */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-700">Payment Status:</h3>
              <span className={`px-3 py-1 text-lg font-semibold rounded-full 
                ${order?.paymentStatus === "Paid" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                {order?.paymentStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Shipping Address Section */}
      <div className="w-full max-w-4xl mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
            Shipping Address
          </h2> 
          <div className="text-gray-700 space-y-3">
            {/* <p className="text-lg"><span className="font-semibold">Name:</span> {order?.shippingAddress?.name}</p> */}
            <p className="text-lg"><span className="font-semibold">Address:</span> {order?.shippingAddress?.address}</p>
            <p className="text-lg"><span className="font-semibold">City:</span> {order?.shippingAddress?.city}</p>
            {/* <p className="text-lg"><span className="font-semibold">State:</span> {order?.shippingAddress?.state}</p> */}
            <p className="text-lg"><span className="font-semibold">Pincode:</span> {order?.shippingAddress?.postalCode}</p>
            {/* <p className="text-lg"><span className="font-semibold">Phone:</span> {order?.shippingAddress?.phone}</p> */}
          </div>
        </div>
      </div>
    </div>
  ); 
}


export default OrderDetails