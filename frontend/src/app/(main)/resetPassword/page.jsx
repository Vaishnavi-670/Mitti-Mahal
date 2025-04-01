'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const resetForm = useFormik({
        initialValues: {
            otp: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/utils/verifyotp`, values)
                .then(response => {
                    toast.success('Password updated successfully');
                    setError('');
                })
                .catch(error => {
                    setError('Failed to verify OTP.');
                    setSuccess('');
                    toast.error('Failed to verify OTP.');
                });
        }

    });

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();
    const otpRef = useRef();

    const handleSendOtp = async (e) => {

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getbyemail/` + emailRef.current.value)
            .then((result) => {

                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/utils/sendotpmail`, { recipient: emailRef.current.value })
                    .then(response => {
                        setSuccess('OTP sent successfully.');
                        console.log(response.data);
                        setError('');
                    })
                    .catch(error => {
                        setError('Failed to send OTP.');
                        setSuccess('');
                    });
            }).catch((err) => {
                if (err?.response?.status === 404) {
                    setError('User not found');
                    toast.error('Email not found');
                } else {
                    console.log(err);
                    toast.error('Failed to fetch user details');
                }
            });
        // e.preventDefault(); 
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={resetForm.handleSubmit}>
                <div className="relative h-[500px] flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-gray-400 shadow-md">
                    <div className="relative mx-4 -mt-6 h-32 mb-4 grid  place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            ResetPassword
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-16 mt-1 w-full min-w-[200px]">
                            <input type='email' ref={emailRef} id='email' onChange={resetForm.handleChange} value={resetForm.values.email}
                                placeholder=""
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] py-3 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] 
                    after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md 
                    after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 
                    peer-focus:before:border-l-2  peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                    peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Enter Registered Email
                            </label>

                            <button type='button' onClick={handleSendOtp} className=''>Send Otp</button>
                            {success && <p className="mt-4 text-green-500">{success}</p>}
                            {error && <p className="mt-4 text-red-500">{error}</p>}
                        </div>
                        <div className="relative h-16 mt-1 w-full min-w-[200px]">
                            <input type='number' onChange={resetForm.handleChange} value={resetForm.values.otp} id='otp'
                                placeholder=" "
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] py-3 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] 
                    after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md 
                    after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 
                    peer-focus:before:border-l-2  peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                    peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Enter OTP
                            </label>


                        </div>
                        <div className="relative h-16 mt-1 w-full min-w-[200px]">
                            <input id='password' onChange={resetForm.handleChange}
                                value={resetForm.values.password}
                                placeholder=""
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] py-3 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] 
                    after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md 
                    after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] 
                    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 
                    peer-focus:before:border-l-2  peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
                    peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                New Password
                            </label>
                        </div>
                        <div className="relative mt-3 h-16 w-full min-w-[200px]">
                            <input type='password' id='confirmPassword' onChange={resetForm.handleChange} value={resetForm.values.confirmPassword}
                                placeholder=""
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] py-3 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px]
                     before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5
                      after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                       peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2
                        peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Confirm Password
                            </label>
                        </div>
                    </div>
                    <div className="p-6 pt-3">
                        <button
                            data-ripple-light="true"
                            type="submit"
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-5 px-6 text-center align-middle font-sans
                     text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none
                      disabled:opacity-50 disabled:shadow-none"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default ResetPassword;
