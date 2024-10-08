import React from 'react'

const Account = () => {
    return (
        <div className="bg-white p-8 rounded-2xl w-[73%] transform transition-transform shadow-lg">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-lg font-medium text-gray-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-lg font-medium text-gray-700">
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="State"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="pincode" className="block text-lg font-medium text-gray-700">
                            Pincode
                        </label>
                        <input
                            type="text"
                            id="pincode"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="Pincode"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="shippingAddress" className="block text-lg font-medium text-gray-700">
                            Shipping Address
                        </label>
                        <input
                            type="text"
                            id="shippingAddress"
                            className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                            placeholder="Enter your shipping address"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-800 text-white p-4 rounded-lg hover:bg-red-900 transition-all ease-in-out duration-300 shadow-lg"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default Account