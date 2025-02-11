'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrderDetails = () => {
    const [order, setorder] = useState([])
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
        <div className="max-w-6xl w-full flex h-[100vh] flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 h-[90vh] flex justify-center">
            <img
              src={order.image}
              alt="Handcrafted Clay Pot"
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{order.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{order.description}</p>

            <div className="mb-6">
              <span className="text-2xl font-semibold text-red-900">₹{order.price}</span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Features:</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>100% natural clay</li>
                <li>Handcrafted by local artisans</li>
                <li>Eco-friendly and sustainable</li>
                <li>Perfect for indoor and outdoor use</li>
                <li>Available in multiple sizes</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications:</h2>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <strong>Dimensions:</strong> 10 x 8 inches
                </li>
                <li>
                  <strong>Weight:</strong> 1.5 kg
                </li>
                <li>
                  <strong>Material:</strong> Natural clay
                </li>

              </ul>
            </div>
            {/* <div className="mb-6">
              <label
                htmlFor="quantity"
                className="text-lg font-medium text-gray-800 mr-4"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center py-2 border border-gray-300 rounded-md"
              />
            </div>            */}
          </div>
          
        </div>
        
        </>
      );
    } else {
      return <h2>Loading ... </h2>;
    }
  };

    
      return (
        <div className="bg-white min-h-screen mt-10 flex h-[100vh] items-center justify-center p-6">
      {showProductDetails()}
    </div>
        );
}


export default OrderDetails