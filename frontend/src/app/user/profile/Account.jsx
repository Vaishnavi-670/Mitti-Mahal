'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
const ISSERVER = typeof window === undefined;

const Account = () => {

    const [userData, setuserData] = useState(null)
    const token = !ISSERVER ? localStorage.getItem('token') : '';

    const fetchUserData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
            headers: {
                'x-auth-token': token
            }
        });
        const data = res.data;
        console.log(data);
        setuserData(data);

    }
    useEffect(() => {
        fetchUserData();
    }, []);

    const submitForm = (values) => {
        console.log(values);

        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/`, values, {
            headers: {
                'x-auth-token': token
            }
        })
            .then((result) => {
                router.push('/manageuser');
                toast.success('User updated successfully');
            }).catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message || 'Something went wrong');
            });
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Update Form</h2>
            {
                userData !== null ? (
                    <div className="bg-white p-8 rounded-2xl w-[73%] transform transition-transform shadow-lg">
                        <Formik initialValues={userData} onSubmit={submitForm} >
                            {
                                (updateForm) => {
                                    return <form className="space-y-6" onSubmit={updateForm.handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                                    placeholder="Your Full Name"
                                                    required
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.name}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.email}
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
                                                    id="contact"
                                                    className="mt-2 p-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out"
                                                    placeholder="Your Phone Number"
                                                    required
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.contact}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.gender}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.city}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.state}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.pincode}
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
                                                    onChange={updateForm.handleChange}
                                                    value={updateForm.values.shippingAddress}
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
                                }
                            }
                        </Formik>


                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <img className="w-32 h-32 object-cover" src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="Loading..." />
                    </div>
                )
            }
        </div>
    )
}

export default Account