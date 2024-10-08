import React from 'react'

const Wallet = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">My Wallet</h3>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
              <div className="text-lg font-semibold">Current Balance:</div>
              <div className="text-xl font-bold text-blue-600">$100</div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-4 rounded-lg mb-2">
                <h4 className="font-semibold">Recent Transactions</h4>
                <p className="text-sm text-gray-600">Spent $30 on Clay Plate - 12th Sept 2024</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold">Pending Amount</h4>
                <p className="text-sm text-gray-600">$10 for Clay Mug - Estimated release: 20th Sept 2024</p>
              </div>
            </div>
          </div>
  )
}

export default Wallet