import Link from "next/link";

export default function PetsPage() {
  return (
    <div className="">
      <h1 className="text-4xl mb-2">Parking at Tusker Lodge</h1>
      <p className="text-sm mb-8 text-gray-500">3 onsite parking available.</p>

      <p className="mt-10">
        We have 3 onsite parking spaces which we reserve for guest&apos;s use
        when checking in and out.
      </p>
      <p>
        Paid parking is available at the Harbour Car Park which is located 100
        metres from the Guest House. The fees will be paid by the guest house;
      </p>
      <p className="mt-10 text-yellow-600 italic">
        * Information correct as at 19 May 2023, please check the display boards
        at the car park for any updates.
      </p>
    </div>
  );
}
