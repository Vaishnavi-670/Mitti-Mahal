import React from 'react'

const Settings = () => {
  return (
<div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-2xl font-semibold mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Notification Preferences</span>
                <button className="text-sm text-blue-500 hover:underline">Manage</button>
              </div>
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <span>Privacy Settings</span>
                <button className="text-sm text-blue-500 hover:underline">Manage</button>
              </div>
            </div>
          </div>
  )
}

export default Settings