'use client';
import React, { useState } from 'react';

function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What materials are used in your clay products?',
      answer: 'Our products are made from 100% natural clay sourced from local artisans. We ensure that all materials used are eco-friendly and sustainable.'
    },
    {
      question: 'How should I care for my clay products?',
      answer: 'To ensure longevity, avoid placing the clay products in extremely hot or cold environments. Clean them with a damp cloth and avoid using harsh chemicals.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping charges and delivery times vary based on the destination.'
    },
    {
      question: 'Can I customize my order?',
      answer: 'We do offer customization options on select products. Please contact our support team with your requirements, and we’ll do our best to accommodate your request.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We have a 30-day return policy. If you’re not satisfied with your purchase, you can return it within 30 days of receipt for a full refund.'
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-red-900 text-center mb-12">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left flex justify-between items-center text-xl font-semibold text-gray-800"
              >
                {faq.question}
                <span className={`ml-2 transform ${openQuestion === index ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              {openQuestion === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
