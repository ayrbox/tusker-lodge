import React from "react";

export default function TermsPage() {
  return (
    <div className="prose prose-slate max-w-none text-gray-700">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          1. Reservations and Bookings
        </h2>
        <p className="mb-4">
          By making a reservation at Tusker Lodge, you agree to these terms and
          conditions. All bookings are subject to availability.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Direct bookings can be made via our website or by phone.
          </li>
          <li>
            A valid credit or debit card is required to secure all bookings.
          </li>
          <li>
            We reserve the right to charge a deposit at the time of booking.
          </li>
          <li>
            Full payment of the balance is typically required upon arrival or check-in.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          2. Cancellation and No-Show Policy
        </h2>
        <p className="mb-4">
          We are a small business and cancellations significantly affect us.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cancellations made more than 7 days prior to the scheduled arrival date
            will receive a full refund of any deposit paid.
          </li>
          <li>
            Cancellations made within 7 days of arrival, or &quot;no-shows,&quot; will be charged
            the full amount of the first night&apos;s stay or 50% of the total booking,
            whichever is greater.
          </li>
          <li>
            We recommend that all guests take out adequate travel insurance to cover
            unexpected cancellations.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          3. Check-in and Check-out
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Check-in:</strong> Guest rooms are available from 3:00 PM until
            8:00 PM. Please notify us in advance if you expect to arrive after 8:00 PM.
          </li>
          <li>
            <strong>Check-out:</strong> We kindly ask that you vacate your room by
            10:30 AM on the day of departure to allow us to prepare for incoming guests.
          </li>
          <li>
            Late check-outs may be available upon request and may incur an additional fee.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          4. House Rules and Guest Behavior
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Smoking:</strong> In accordance with UK law, Tusker Lodge is
            strictly non-smoking throughout the entire building. This includes e-cigarettes.
            Failure to comply will result in a £100 cleaning fee and immediate termination
            of your stay without refund.
          </li>
          <li>
            <strong>Quiet Hours:</strong> We ask guests to respect others and keep noise
            to a minimum between 10:30 PM and 8:00 AM.
          </li>
          <li>
            <strong>Visitors:</strong> Only registered guests are permitted in the guest
            rooms. Visitors are allowed in the common areas only with prior permission.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          5. Pet Policy (Dogs)
        </h2>
        <p className="mb-4">
          We welcome well-behaved dogs at Tusker Lodge under the following conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            One small/medium-sized dog is allowed per room (max 20kg).
          </li>
          <li>
            A one-off cleaning fee applies (starting at £10 for 1-5 nights).
          </li>
          <li>
            Dogs must be kept on a lead at all times in common areas.
          </li>
          <li>
            Dogs are not allowed on beds or furniture and must never be left
            unattended in the room.
          </li>
          <li>
            Owners are responsible for any damage caused by their pets and for
            disposing of waste off-premises.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          6. Damages and Breakages
        </h2>
        <p>
          Guests are responsible for any damage or breakages caused to the room,
          its contents, or any part of the guest house during their stay. We reserve
          the right to charge the guest&apos;s card for any necessary repairs or
          professional cleaning required.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          7. Liability
        </h2>
        <p>
          Tusker Lodge does not accept any liability for any damage, loss, or injury
          to any member of your party or any vehicles or possessions, unless proven
          to be caused by a negligent act by ourselves.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">
          8. Accessibility
        </h2>
        <p>
          Tusker Lodge is a Victorian property with stairs. If you have specific
          accessibility requirements, please contact us before booking to ensure
          we can accommodate your needs.
        </p>
      </section>
    </div>
  );
}
