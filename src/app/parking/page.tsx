import { Metadata } from "next";
import { AlertCircle, Car, MapPin, Phone, Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Parking Information | Tusker Lodge Torquay - Guest Parking Guide",
  description: "Comprehensive parking information for Tusker Lodge guests including on-site parking, nearby council car parks, accessibility details, and luggage assistance.",
  keywords: "Tusker Lodge parking, Torquay parking, guest house parking, Torquay harbour parking",
};

export default function ParkingPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Parking at Tusker Lodge
        </h1>
        <p className="text-lg text-gray-600">
          Please read this information carefully to plan your arrival and ensure a smooth check-in experience.
        </p>
      </header>

      {/* Important Notice */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <div className="flex items-start gap-3">
          <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Important Information
            </h2>
            <p className="text-gray-700">
              We want to ensure you have accurate expectations about parking at Tusker Lodge.
              Please review all options below and contact us if you have any questions or concerns
              before your arrival.
            </p>
          </div>
        </div>
      </div>

      {/* Parking Options */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Parking Options
        </h2>

        {/* Option 1: On-Site Parking */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <Car className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Option 1: On-Site Parking (Limited - 3 Spaces)
              </h3>
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Most Convenient
              </span>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              We have <strong>3 on-site parking spaces</strong> located directly behind Tusker Lodge.
              These spaces are available on a <strong>first-come, first-served basis</strong>.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-1">Please Note:</p>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-800 text-sm">
                    <li>Spaces are <strong>tight and compact</strong></li>
                    <li>The road is <strong>not level</strong> with other parked cars at the front</li>
                    <li><strong>Large vehicles may struggle</strong> to park in these spaces</li>
                    <li>If you drive a larger car (SUV, van, etc.), we recommend using the council car park instead</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                How to Reserve:
              </h4>
              <p className="text-sm">
                To reserve an on-site parking space, please <strong>call us in advance</strong> at{" "}
                <a href="tel:+441803292668" className="text-blue-600 hover:text-blue-800 font-semibold">
                  01803 292668
                </a>
                . We cannot guarantee availability, but we'll do our best to accommodate you.
              </p>
            </div>
          </div>
        </div>

        {/* Option 2: Torbay Council Car Park */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Option 2: Torbay Council Car Park (Recommended for Most Guests)
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                100 Meters Away
              </span>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              A large public car park operated by Torbay Council is located approximately <strong>100 meters</strong> from
              Tusker Lodge. This is our recommended option for most guests, especially those with larger vehicles.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Advantages:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Plenty of space available</li>
                  <li>Suitable for all vehicle sizes</li>
                  <li>Pay-by-hour (fees covered by Tusker Lodge when required)</li>
                  <li>Well-lit and secure</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">⚠ Important Considerations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>5-7 minute walk to the lodge</li>
                  <li>Steep downhill gradient (60-70°)</li>
                  <li>May be challenging with heavy luggage</li>
                  <li>Return walk is uphill</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-orange-900 mb-2">Walking Route Details:</p>
                  <p className="text-orange-800 text-sm mb-2">
                    The walk from the council car park to Tusker Lodge is <strong>downhill on a paved road</strong>.
                    While the distance is only 100 meters, the <strong>steep gradient (60-70 degrees)</strong> can make
                    it challenging, especially when carrying luggage.
                  </p>
                  <p className="text-orange-800 text-sm">
                    <strong>Please consider this when packing.</strong> If you have mobility concerns or heavy luggage,
                    we strongly recommend requesting assistance (see below).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">⚠️ Do Not Confuse with Premier Inn Car Park</p>
                  <p className="text-red-800 text-sm">
                    The Torbay Council car park is located <strong>next to the Premier Inn</strong>, which has its own
                    private car park. Please ensure you park in the <strong>public council car park</strong>, not the
                    Premier Inn car park. There are clear signs indicating which sections are public parking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 3: Street Parking */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <Car className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Option 3: Street Parking (Limited Availability)
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Limited street parking is available directly in front of Tusker Lodge, operated by Torbay Council
              with <strong>hourly charges</strong>.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Availability is not guaranteed, especially during peak season. This option
              is best for short-term parking during check-in/check-out.
            </p>
          </div>
        </div>
      </section>

      {/* Luggage Assistance */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Need Help with Luggage?
              </h2>
              <p className="text-gray-700 mb-4">
                We understand that the walk from the council car park can be challenging with luggage.
                We're here to help when possible!
              </p>

              <div className="bg-white rounded-lg p-4 space-y-3">
                <h3 className="font-bold text-gray-900">How to Request Assistance:</h3>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>1. Inform us when booking:</strong> Let us know if you'll need help with luggage when you make your reservation.
                  </p>
                  <p>
                    <strong>2. Call ahead:</strong> If you didn't mention it during booking, please call us at{" "}
                    <a href="tel:+441803292668" className="text-blue-600 hover:text-blue-800 font-semibold">
                      01803 292668
                    </a>
                    {" "}before your arrival.
                  </p>
                  <p>
                    <strong>3. Arrive during off-peak hours:</strong> We can provide assistance more reliably when we're
                    not busy. Please coordinate an arrival time with us to ensure staff availability.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Please note:</strong> Luggage assistance is subject to staff availability. We'll do our
                    best to help, but we cannot guarantee assistance during busy periods. Planning ahead helps us
                    serve you better!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Map */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Finding the Council Car Park
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong> The Torbay Council car park is located next to the Premier Inn,
              approximately 100 meters from Tusker Lodge.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Step-by-Step Directions:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Look for the large car park next to the Premier Inn hotel</li>
                <li>Check the signage carefully - park in the <strong>public council car park</strong> section,
                  NOT the Premier Inn private parking</li>
                <li>From the car park, walk downhill on the paved road towards Torquay Harbour</li>
                <li>Tusker Lodge will be on your right after approximately 5-7 minutes</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                💡 <strong>Tip:</strong> If you're unsure about the location or have any questions,
                please don't hesitate to call us at{" "}
                <a href="tel:+441803292668" className="text-blue-600 hover:text-blue-800 font-semibold">
                  01803 292668
                </a>
                . We're happy to provide additional guidance!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Questions About Parking?
        </h2>
        <p className="text-lg mb-6 text-blue-50">
          We're here to help! If you have any concerns about parking or need to arrange assistance,
          please contact us before your arrival.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+441803292668"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call: 01803 292668
          </a>
          <a
            href="mailto:tuskerlodgehotel@gmail.com"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors inline-block"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-8 text-center text-sm text-gray-500 italic">
        * Parking information is correct as of November 2025. Please check with us or local signage for any updates.
      </footer>
    </div>
  );
}
