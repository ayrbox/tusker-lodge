import React from "react";

export default function PrivacyPage() {
  return (
    <div className="prose prose-slate max-w-none text-gray-700">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          1. Introduction
        </h2>
        <p className="mb-4">
          At Tusker Lodge, we are committed to protecting your privacy and ensuring
          that your personal information is handled in a safe and responsible manner.
          This policy outlines how we collect, use, and protect your data when you
          visit our website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          2. Third-Party Booking Partners
        </h2>
        <p className="mb-4">
          Please be aware that Tusker Lodge does not process reservations or payments
          directly on this website. When you choose to book a stay with us, you will
          be redirected to our trusted third-party booking partners:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Booking.com</strong></li>
          <li><strong>booking-directly.com</strong></li>
        </ul>
        <p>
          These platforms have their own privacy policies and terms of service. We
          do not store your credit card details or sensitive booking information
          on our own servers. We recommend reviewing the privacy policies of these
          providers before completing your reservation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          3. Information We Collect (Tracking & Analytics)
        </h2>
        <p className="mb-4">
          We use tracking technologies to help us understand how our website is being
          used and to improve our marketing efforts.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Google Analytics</h3>
            <p>
              We use Google Analytics to collect information about your behavior on
              our site (e.g., pages visited, time spent on site, geographical location).
              This data is aggregated and anonymized; it does not identify you
              personally. We use this information to improve the website experience
              for our guests.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Facebook Pixel</h3>
            <p>
              We use the Facebook Pixel to measure the effectiveness of our advertising
              by understanding the actions people take on our website. This allows us
              to show you relevant Tusker Lodge advertisements on Facebook and
              Instagram based on your interests.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          4. Detailed Cookie Policy
        </h2>
        <p className="mb-4">
          Cookies are small text files placed on your device to help the site provide
          a better user experience.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Analytics</td>
                <td className="px-6 py-4 whitespace-nowrap">Google (_ga, _gid)</td>
                <td className="px-6 py-4">Distinguishes users and sessions for site statistics.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Marketing</td>
                <td className="px-6 py-4 whitespace-nowrap">Facebook (_fbp)</td>
                <td className="px-6 py-4">Tracks conversions and optimizes ad targeting on Meta platforms.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Functional</td>
                <td className="px-6 py-4 whitespace-nowrap">Tusker Lodge</td>
                <td className="px-6 py-4">Remembers user preferences and site settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          You can choose to disable cookies through your browser settings. However,
          this may affect the functionality of some parts of our website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          5. Data Security
        </h2>
        <p>
          We take reasonable steps to protect any information collected via our
          tracking tools. However, as no transmission over the internet is 100%
          secure, we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          6. Your Rights (UK GDPR)
        </h2>
        <p className="mb-4">
          Under the UK General Data Protection Regulation (UK GDPR), you have rights
          regarding your personal data, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to be informed about how your data is used.</li>
          <li>The right to access the personal data we hold about you.</li>
          <li>The right to request the correction of inaccurate data.</li>
          <li>The right to request the deletion of your data in certain circumstances.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          7. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your
          data, please contact us at:
        </p>
        <p className="mt-2 font-semibold">
          Tusker Lodge<br />
          533 Babbacombe Road, Torquay, Devon, TQ1 1HQ<br />
          Email: tuskerlodgehotel@gmail.com<br />
          Tel: 01803 292668
        </p>
      </section>

      <p className="text-sm text-gray-500 italic mt-12">
        Last updated: May 30, 2026
      </p>
    </div>
  );
}
