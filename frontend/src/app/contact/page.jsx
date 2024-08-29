import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Contact Us</h1>

        {/* Introduction Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600">
            We would love to hear from you! Whether you have questions about our products, need assistance with an order, or want to share your feedback, our team is here to help. Reach out to us using the contact form below or get in touch directly through our contact details.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500" 
                placeholder="Subject" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows="6" 
                className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500" 
                placeholder="Your Message" 
                required 
              />
            </div>
            <div className="text-right">
              <button 
                type="submit" 
                className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
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
            <p className="text-lg text-gray-600 mb-4">
              Stay connected with us on social media:
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C1.505 0 .895.61.895 1.364v21.273C.895 23.39 1.505 24 2.256 24h10.935V14.706h-2.975v-3.622h2.975V8.413c0-2.949 1.802-4.55 4.432-4.55 1.258 0 2.338.093 2.654.135v3.075h-1.82c-1.425 0-1.7.675-1.7 1.667v2.188h3.395l-.444 3.622h-2.951V24h5.778c.75 0 1.361-.61 1.361-1.364V1.364C24.036.61 23.426 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.292 3.608 1.267.975.975 1.205 2.242 1.267 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.292 2.633-1.267 3.608-.975.975-2.242 1.205-3.608 1.267-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.292-3.608-1.267-.975-.975-1.205-2.242-1.267-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.849c.062-1.366.292-2.633 1.267-3.608.975-.975 2.242-1.205 3.608-1.267 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.052.072 5.725.13 4.473.397 3.463 1.407c-1.01 1.01-1.277 2.262-1.335 3.589C2.015 6.332 2 6.741 2 10s.015 3.668.072 4.948c.058 1.327.325 2.579 1.335 3.589 1.01 1.01 2.262 1.277 3.589 1.335 1.28.058 1.689.072 4.948.072s3.668-.015 4.948-.072c1.327-.058 2.579-.325 3.589-1.335 1.01-1.01 1.277-2.262 1.335-3.589.058-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.058-1.327-.325-2.579-1.335-3.589-1.01-1.01-2.262-1.277-3.589-1.335C15.668 2.015 15.259 2 12 2s-3.668.015-4.948.072c-1.327.058-2.579.325-3.589 1.335-1.01 1.01-1.277 2.262-1.335 3.589C2.015 8.332 2 8.741 2 12s.015 3.668.072 4.948c.058 1.327.325 2.579 1.335 3.589 1.01 1.01 2.262 1.277 3.589 1.335 1.28.058 1.689.072 4.948.072s3.668-.015 4.948-.072c1.327-.058 2.579-.325 3.589-1.335 1.01-1.01 1.277-2.262 1.335-3.589.058-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.058-1.327-.325-2.579-1.335-3.589-1.01-1.01-2.262-1.277-3.589-1.335C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm7.23-11.674a1.44 1.44 0 110-2.879 1.44 1.44 0 010 2.879z" />
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.385-1.83.647-2.825.764 1.014-.609 1.794-1.574 2.163-2.723-.95.565-2.005.978-3.127 1.2-.896-.953-2.173-1.549-3.591-1.549-2.717 0-4.918 2.2-4.918 4.917 0 .39.044.765.126 1.124-4.083-.205-7.702-2.161-10.126-5.138-.423.723-.666 1.561-.666 2.475 0 1.71.87 3.215 2.191 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.386 1.699 4.376 3.946 4.828-.413.112-.849.172-1.296.172-.317 0-.625-.03-.927-.086.631 1.953 2.463 3.377 4.634 3.415-1.698 1.33-3.832 2.124-6.155 2.124-.399 0-.79-.023-1.176-.068 2.193 1.407 4.797 2.229 7.598 2.229 9.109 0 14.094-7.548 14.094-14.094 0-.214-.004-.427-.015-.64.966-.696 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Mitti Mahal Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094456!2d144.95373531576016!3d-37.81627974257174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7a66b%3A0x4e77a30f76544a76!2sMitti%20Mahal!5e0!3m2!1sen!2sau!4v1630075416933!5m2!1sen!2sau"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
