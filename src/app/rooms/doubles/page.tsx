import DoublesRoomImage from "@/images/rooms/doubles.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function DoublesRoom() {
  const images = [
    {
      src: DoublesRoomImage,
      alt: "Economy Double Room - 86 ft² Accommodation at Tusker Lodge Torquay",
    },
    {
      src: DoublesRoomImage,
      alt: "Economy Double Room Ensuite - Compact Comfort in Torquay",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Economy Double Room",
    description:
      "86 ft² compact double room on the first floor with 1 double bed, en suite shower, and north-facing views at Tusker Lodge Torquay. Rated 8.8/10 for comfortable beds.",
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 2,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      unitCode: "FTK",
      value: "86",
    },
    bed: {
      "@type": "BedDetails",
      name: "Double Bed",
      numberOfBeds: 1,
    },
    amenityFeature: [
      { "@type": "Text", name: "Private Bathroom with Shower" },
      { "@type": "Text", name: "Free Toiletries" },
      { "@type": "Text", name: "Hair Dryer" },
      { "@type": "Text", name: "Flat-Screen TV" },
      { "@type": "Text", name: "Tea and Coffee Maker" },
      { "@type": "Text", name: "Soundproofing" },
      { "@type": "Text", name: "Free WiFi" },
      { "@type": "Text", name: "View" },
      { "@type": "Text", name: "Linen" },
      { "@type": "Text", name: "Socket near the bed" },
      { "@type": "Text", name: "Desk" },
      { "@type": "Text", name: "Seating Area" },
      { "@type": "Text", name: "Iron" },
      { "@type": "Text", name: "Heating" },
      { "@type": "Text", name: "Fan" },
      { "@type": "Text", name: "Wake up service/Alarm clock" },
      { "@type": "Text", name: "Carpeted" },
      { "@type": "Text", name: "Electric kettle" },
      { "@type": "Text", name: "Wardrobe or closet" },
      { "@type": "Text", name: "Upper floors accessible by stairs only" },
      { "@type": "Text", name: "No smoking" },
    ],
    review: {
      "@type": "Review",
      ratingValue: "8.8",
      bestRating: "10",
      worstRating: "1",
      ratingExplanation: "Based on 89 reviews for comfortable beds",
    },
    image: DoublesRoomImage.src,
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoomCarousel images={images} />

      <Wrapper title="Economy Double Room">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Room Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                Enjoy a cozy stay in our <strong>Economy Double Room</strong>, a
                compact 86 ft² space located on the first floor. This
                north-facing room features a comfortable double bed and comes
                complete with an en suite shower room, making it an ideal choice
                for couples or solo travelers seeking value without compromising
                on comfort.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The room is well-appointed with essential amenities including a
                flat-screen TV, tea and coffee making facilities, and
                complimentary toiletries. Our guests love the comfort of our
                beds, giving them an impressive <strong>8.8 rating</strong>{" "}
                based on 89 reviews.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Room Facilities & Features
              </h2>
              <ul
                role="list"
                className="list-disc space-y-3 pl-6 text-lg md:text-xl text-gray-700"
              >
                <li className="text-gray-700">
                  <span className="font-medium">86 ft² Size</span> - Compact and
                  cozy layout
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">1 Double Bed</span> - Comfort
                  rated 8.8/10
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Private Bathroom</span> - With
                  shower, toilet, and towels
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Free Toiletries</span> -
                  Shampoo, body soap provided
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Entertainment</span> -
                  Flat-screen TV and Free WiFi
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Convenience</span> - Electric
                  kettle, tea/coffee maker, socket near bed
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Comfort</span> - Heating, fan,
                  carpeted floors, soundproofing
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Furniture</span> - Desk, seating
                  area, wardrobe/closet
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Other Amenities</span> -
                  Hairdryer, iron, wake-up service/alarm clock
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Access</span> - Upper floors
                  accessible by stairs only
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Policy</span> - No smoking
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-8">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Guest Comfort Rating
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed mb-3">
                <strong>Comfy beds, 8.8 – Based on 89 reviews</strong>
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                This first-floor compact room comes with toiletries, an en suite
                shower room and tea and coffee making facilities. This room type
                is north facing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Breakfast & Dining
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Start your day right with our delicious breakfast, an optional
                extra at just £10 per person per day.
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
