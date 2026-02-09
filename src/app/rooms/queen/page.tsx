import QueenRoomImage from "@/images/rooms/queen.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function QueenRoom() {
  const images = [
    {
      src: QueenRoomImage,
      alt: "Luxury Queen Room 07 - Super King Double Bed at Tusker Lodge Torquay",
    },
    {
      src: QueenRoomImage,
      alt: "Queen Room 07 En-Suite - Premium Accommodation in Torquay, Devon",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Queen Room - Super King Double Bed",
    description:
      "Spacious super king sized double room with modern amenities and en-suite facilities at Tusker Lodge Torquay",
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 2,
    },
    bed: {
      "@type": "BedDetails",
      name: "Super King Double Bed (6 foot)",
      quantity: 1,
    },
    amenityFeature: [
      { "@type": "Text", name: "Free WiFi" },
      { "@type": "Text", name: "50 inch Flat Screen TV" },
      { "@type": "Text", name: "Pet Friendly" },
      { "@type": "Text", name: "Tea and Coffee Facilities" },
      { "@type": "Text", name: "Hair Dryer" },
      { "@type": "Text", name: "En-Suite Shower Room" },
      { "@type": "Text", name: "Complimentary Toiletries" },
    ],
    image: QueenRoomImage.src,
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoomCarousel images={images} />
      <Wrapper title="Luxury Queen Room with Super King Double Accommodation">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>Queen Room</strong> <em>(Room 7)</em> is our premier
                super king sized double room, a spacious north-facing,
                first-floor en-suite accommodation with a luxurious 6&apos;
                double bed. This premium room at our Torquay bed and breakfast
                features tea and coffee making facilities with complimentary
                bottled water. It boasts an en-suite shower room with
                high-quality complimentary toiletries.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Amenities &amp; Features
              </h2>
              <ul
                role="list"
                className="list-disc space-y-3 pl-6 text-lg md:text-xl text-gray-700"
              >
                <li className="text-gray-700">
                  <span className="font-medium">Sleeps up to 2 guests</span> -
                  Perfect for couples
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">50&ldquo; Flat Screen TV</span>{" "}
                  - Premium entertainment
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Free WiFi</span> - Stay
                  connected during your stay
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Pet Friendly</span> - Bring your
                  furry companion
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Tea and Coffee Facilities</span>{" "}
                  - Start your day right
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Hair Dryer</span> - Essential
                  amenities provided
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Complimentary Toiletries</span>{" "}
                  - Premium quality products
                </li>
                <li className="text-gray-700">
                  Private facilities
                  <span className="font-medium">En-Suite Shower Room</span> -
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Breakfast & Dining
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Start your day right with our delicious breakfast, an optional
                extra at just £10 per person per day. Our carefully prepared
                breakfast options ensure you&apos;re energized for exploring
                Torquay and the English Riviera.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
                Why Choose Our Queen Room?
              </h3>
              <p className="text-lg text-blue-800 leading-relaxed">
                Perfect for couples seeking luxury accommodation in Torquay, our
                super king double room combines elegance with modern comfort.
                Located at Tusker Lodge, a pet-friendly bed and breakfast in
                Devon, this spacious room offers the ideal retreat for your
                English Riviera getaway.
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
