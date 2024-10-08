import React from 'react'

const Orders = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
    <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
    <ul className="space-y-4">
      <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <img
            src="https://example.com/clay-mug.jpg" // Replace with the actual image URL
            alt="Clay Mug"
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <div>
            <h4 className="font-semibold">Clay Mug</h4>
            <p className="text-sm text-gray-600">Order Date: 12th August 2024</p>
            <p className="text-lg font-bold text-gray-800">$15.00</p> {/* Replace with actual price */}
          </div>
        </div>
        <button className="text-sm text-blue-500 hover:underline">Track Order</button>
      </li>
      <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <img
            src="https://example.com/clay-plate.jpg" // Replace with the actual image URL
            alt="Clay Plate"
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <div>
            <h4 className="font-semibold">Clay Plate</h4>
            <p className="text-sm text-gray-600">Order Date: 5th September 2024</p>
            <p className="text-lg font-bold text-gray-800">$20.00</p> {/* Replace with actual price */}
          </div>
        </div>
        <button className="text-sm text-blue-500 hover:underline">Track Order</button>
      </li>
    </ul>
  </div>
  )
}

export default Orders