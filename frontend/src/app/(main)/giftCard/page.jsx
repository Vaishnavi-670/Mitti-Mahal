'use client';
import React from 'react';

const GiftCardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mitti Mahal Gift Cards</h1>
        <p className="text-lg text-gray-600">Gift the beauty of clay products with our exclusive gift cards.</p>
      </div>

      {/* Gift Card Image and Video Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {/* Gift Card Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/path-to-your-giftcard-image.jpg"
            alt="Mitti Mahal Gift Card"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center text-gray-600 mt-4">Beautifully designed Mitti Mahal gift cards, perfect for every occasion.</p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <video
            className="rounded-lg shadow-lg"
            controls
            src="/path-to-your-video.mp4"
            alt="Mitti Mahal Gift Card Video"
          />
          <p className="text-center text-gray-600 mt-4">Watch this video to see how our gift cards can brighten someone’s day.</p>
        </div>
      </div>

     
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Gift Card Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Details 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Flexible Amounts</h3>
            <p className="mt-4 text-gray-600">
              Our gift cards are available in a variety of amounts, giving the recipient the freedom to choose their favorite clay products from Mitti Mahal.
            </p>
          </div>

          {/* Details 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Instant Delivery</h3>
            <p className="mt-4 text-gray-600">
              Send your gift card instantly via email or schedule it for a special date. Perfect for last-minute gifts!
            </p>
          </div>

          
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Personalized Message</h3>
            <p className="mt-4 text-gray-600">
              Add a personalized message to your gift card to make it even more special. Let your loved ones know you're thinking of them.
            </p>
          </div>

          
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Redeemable Online</h3>
            <p className="mt-4 text-gray-600">
              Mitti Mahal gift cards can be redeemed online for any of our beautiful clay products. The perfect gift for every occasion!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;