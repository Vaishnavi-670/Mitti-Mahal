'use client'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconPhoneCall } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
const ISSERVER = typeof window === undefined;



const Contact = () => {
    const contactRef = useRef();
    const { id } = useParams();

    const contactForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/add`, values)
                .then((result) => {
                    toast.success('Message sent successfully');
                    console.log(result.data);
                    resetForm();
                }).catch((err) => {
                    console.log(err);
                    toast.error('Something went wrong');
                });
        },
    });

    return (
        <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto shadow-gray-400">

                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>


                <div className="text-center mb-16">
                    <p className="text-lg text-gray-600">
                        We would love to hear from you! Whether you have questions about our products, need assistance with an order, or want to share your feedback, our team is here to help. Reach out to us using the contact form below or get in touch directly through our contact details.
                    </p>
                </div>


                <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                    <form onSubmit={contactForm.handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={contactForm.values.name}
                                    onChange={contactForm.handleChange}
                                    className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={contactForm.values.email}
                                    onChange={contactForm.handleChange}
                                    className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id='subject'
                                name="subject"
                                value={contactForm.values.subject}
                                onChange={contactForm.handleChange}
                                className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                rows="6"
                                value={contactForm.values.message}
                                onChange={contactForm.handleChange}
                                className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        <div className="text-right">
                            <button
                            disabled={contactForm.isSubmitting}
                                type="submit"
                                className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Feel free to reach out to us directly through any of the following methods:
                        </p>
                        <ul className="text-lg text-gray-600">
                            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                            <li><strong>Email:</strong> info@mittimahal.com</li>
                            <li><strong>Address:</strong> 123 Clayville Street, Claytown, CA 98765</li>
                            <li><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
                        <p className="text-lg text-gray-600 mb-4">Stay connected with us on social media:</p>
                        <div className="flex items-start justify-center space-x-4 mt-6">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <IconBrandFacebook size={28} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                <IconBrandTwitter size={28} />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                                <IconBrandInstagram size={28} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Mitti Mahal Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094456!2d144.95373531576016!3d-37.81627974257174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7a66b%3A0x4e77a30f76544a76!2sMitti%20Mahal!5e0!3m2!1sen!2sau!4v1630075416933!5m2!1sen!2sau"
                        className="w-full h-full"
                        allowFullScreen
                        loading="eager"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;