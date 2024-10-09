import React from 'react';

function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Privacy Policy for Mitti Mahal</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Effective Date: [Insert Date]</h2>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to <strong>Mitti Mahal</strong>,your privacy is very important to us.
            At <strong>Mitti Mahal</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website, make purchases, or use our services. By using our site, you agree to the terms outlined in this policy.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>

            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Full Name</li>
              <li>Billing and Shipping Addresses</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Payment Information (credit/debit card details, UPI, PayPal, etc.)</li>
              <li>Account Login Credentials (username, password)</li>
              <li>Order History and Preferences</li>
              <li>Customer Support Interactions (via email, chat, or phone)</li>
            </ul>

            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Additional Information for Enhanced Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Preferences and Interests (such as favorite products or categories)</li>
              <li>Customer Reviews and Ratings</li>
              <li>Wishlist Items (if applicable)</li>
              <li>Feedback or Survey Responses</li>
              <li>Referral Information (if referred by friends or affiliates)</li>
            </ul>

            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.3 Non-Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>IP Address</li>
              <li>Browser Type and Version</li>
              <li>Operating System</li>
              <li>Device Type (mobile, desktop)</li>
              <li>Referring URLs and Search Queries</li>
              <li>Website Navigation Patterns (pages visited, products viewed, time spent, etc.)</li>
              <li>Third-Party Cookie Data for retargeting and personalization</li>
            </ul>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process orders and transactions securely</li>
              <li>Provide personalized product recommendations</li>
              <li>Improve website design and functionality</li>
              <li>Facilitate communication for orders, support, and feedback</li>
              <li>Tailor marketing and promotional offers based on your preferences</li>
              <li>Maintain security of transactions and detect potential fraud</li>
              <li>Support product returns, refunds, and exchanges</li>
              <li>Track referral programs and rewards</li>
            </ul>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-600 mb-4">
              We prioritize the confidentiality of your data. However, certain information may be shared with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Payment Processors and Delivery Partners to complete transactions and ship products</li>
              <li>Analytics Providers (Google Analytics, etc.) to track and optimize website performance</li>
              <li>Marketing Platforms for sending promotional content (if opted in)</li>
              <li>Advertising Partners for retargeting and personalized ads</li>
              <li>Third-Party Integrations for social media logins, user reviews, and wishlist services</li>
              <li>Law Enforcement or Legal Bodies if required to comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We will never sell your personal information to third parties.
            </p>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Security</h2>
            <p className="text-gray-600">
              We use industry-standard encryption and third-party payment processors to ensure the security of your payment information. Your full credit card details are not stored on our servers.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Account Protection</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account login information. We encourage the use of strong passwords and recommend that you regularly update your password for enhanced security.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Retention and Deletion</h2>
            <p className="text-gray-600">
              Your personal information is retained for as long as necessary to provide our services, comply with legal obligations, or resolve disputes. You may request deletion of your account and data by contacting us at <strong>[Your Contact Email]</strong>, and we will process the request unless required to retain the data by law.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Customer Rights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Data portability for certain information</li>
              <li>Restriction of processing of your data in certain circumstances</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, email us at <strong>[Your Contact Email]</strong>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Data Security Measures</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>SSL encryption for secure transmission of sensitive information</li>
              <li>Regular security audits and updates to our website</li>
              <li>Restricted access to sensitive information within our company</li>
              <li>Multi-factor authentication for secure access to account details</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Third-Party Links and Services</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites, services, or applications. Please note that we are not responsible for the privacy practices of these third-party entities. We advise you to review their privacy policies before interacting with them.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-600">
              If you are located outside [Your Country], please note that your personal data may be transferred and processed in the country where our servers or third-party service providers are located. By using our services, you consent to the transfer of your data as necessary to provide the services.
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Children’s Privacy</h2>
            <p className="text-gray-600">
              Mitti Mahal does not knowingly collect personal information from children under the age of 13. If we discover that a child has provided us with personal information, we will delete such information promptly. If you believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Loyalty Programs and Promotions</h2>
            <p className="text-gray-600">
              To enhance your shopping experience, we may offer loyalty programs, discounts, or referral rewards. Participation in such programs may require additional information such as membership numbers or referral links, which will be handled in accordance with this privacy policy.
            </p>
          </div>

          {/* Section 13 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We reserve the right to update this Privacy Policy periodically. Any changes will be reflected with a new effective date and will be communicated via email or a notification on our website. We encourage you to review this page regularly to stay informed about our privacy practices.
            </p>
          </div>

          {/* Section 14 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Mitti Mahal</strong><br />
              123 Artisan Lane,<br />
                  Clayville, CA 90210<br />
              Email: <strong>mittimahal@gmail.com</strong><br />
              Phone: <strong>(+62) 81234567890</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
