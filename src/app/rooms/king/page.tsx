import KingRoomImage from "@/images/rooms/king.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function KingRoom() {
  const images = [
    {
      src: KingRoomImage,
      alt: "King Room with Garden View - 5-Foot Zip & Link King-Size Bed at Tusker Lodge Torquay",
    },
    {
      src: KingRoomImage,
      alt: "King Room with En-Suite Shower - Premium Double Accommodation with Torwood Gardens View",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "King Room with Garden View",
    description:
      "Premium king room with 5-foot zip & link king-size bed, en-suite shower, and garden views of Torwood Gardens at Tusker Lodge Torquay bed and breakfast. Rated 8.8/10 for comfortable beds. Located on the first floor, south-facing.",
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 2,
    },
    bed: [
      {
        "@type": "BedDetails",
        name: "5-Foot Zip & Link King-Size Bed",
        quantity: 1,
      },
    ],
    amenityFeature: [
      { "@type": "Text", name: "Private En-Suite Shower Room" },
      { "@type": "Text", name: "Free Toiletries" },
      { "@type": "Text", name: "Hair Dryer" },
      { "@type": "Text", name: "Flat-Screen TV" },
      { "@type": "Text", name: "Tea and Coffee Maker" },
      { "@type": "Text", name: "Garden View" },
      { "@type": "Text", name: "Seating Area" },
      { "@type": "Text", name: "Soundproof Walls" },
      { "@type": "Text", name: "Carpeted Floors" },
      { "@type": "Text", name: "Electric Kettle" },
      { "@type": "Text", name: "Desk" },
      { "@type": "Text", name: "Iron" },
      { "@type": "Text", name: "Wardrobe or Closet" },
      { "@type": "Text", name: "Heating" },
      { "@type": "Text", name: "Fan" },
      { "@type": "Text", name: "Wake-up Service/Alarm Clock" },
      { "@type": "Text", name: "Socket Near Bed" },
      { "@type": "Text", name: "Refrigerator" },
      { "@type": "Text", name: "Dining Table" },
      { "@type": "Text", name: "Complimentary Bottled Water" },
    ],
    review: {
      "@type": "Review",
      ratingValue: "8.8",
      bestRating: "10",
      worstRating: "1",
      ratingExplanation: "Based on 89 reviews for comfortable beds",
    },
    image: KingRoomImage.src,
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoomCarousel images={images} />

      <Wrapper title="King Room with Garden View">
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
                Experience luxury and comfort in our <strong>King Room with Garden View</strong>, a first-floor, south-facing bedroom featuring stunning views of the picturesque Torwood Gardens. This premium room is perfectly designed for guests seeking relaxation and sophistication at Tusker Lodge, a premier bed and breakfast in Torquay, Devon.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With a luxurious 5-foot zip &amp; link king-size bed and a private en-suite shower room, this room combines elegant comfort with practical amenities. Guests consistently praise the exceptional comfort of our beds, with an impressive <strong>8.8/10 rating</strong> based on 89 verified reviews. Tea and coffee making facilities and complimentary bottled water are included for your convenience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Room Facilities &amp; Features
              </h2>
              <ul
                role="list"
                className="list-disc space-y-3 pl-6 text-lg md:text-xl text-gray-700"
              >
                <li className="text-gray-700">
                  <span className="font-medium">5-Foot Zip &amp; Link King-Size Bed</span> - Premium comfort and flexibility
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">First-Floor Location</span> - South-facing with direct access
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Garden View</span> - Beautiful outlook over Torwood Gardens
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Private En-Suite Shower Room</span> - Exclusive bathroom facilities
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Free Toiletries</span> - Premium quality products
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Hair Dryer</span> - Provided in en-suite
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Flat-Screen TV</span> - Entertainment and relaxation
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Tea and Coffee Maker</span> - With electric kettle
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Complimentary Bottled Water</span> - Stay refreshed
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Seating Area</span> - Comfortable lounge space
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Soundproof Walls</span> - Peace and quiet guaranteed
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Carpeted Floors</span> - Comfort underfoot
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Workspace</span> - Desk for work or planning
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Iron &amp; Ironing Board</span> - Available upon request
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Wardrobe or Closet</span> - Ample storage
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Refrigerator</span> - Keep drinks chilled
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Dining Table</span> - Convenient dining space
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Climate Control</span> - Heating and fan
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Socket Near Bed</span> - Convenient charging
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Wake-up Service/Alarm Clock</span> - Never miss checkout
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-8">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Guest Comfort Rating
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed mb-3">
                <strong>Beds Rated 8.8 out of 10</strong> - Based on 89 verified guest reviews
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Our guests consistently praise the comfort and quality of our beds, making this king room an excellent choice for a restful stay in Torquay.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Private Bathroom
              </h2>
              <ul
                role="list"
                className="list-disc space-y-3 pl-6 text-lg md:text-xl text-gray-700"
              >
                <li className="text-gray-700">
                  <span className="font-medium">Free Toiletries</span> - Premium products provided
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Toilet</span> - Private facilities
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Bath or Shower</span> - Choose your preferred option
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Towels</span> - Fresh towels provided
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Hair Dryer</span> - Available in en-suite
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Toilet Paper</span> - Fully stocked
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Breakfast &amp; Dining
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Start your day right with our delicious breakfast, an optional extra at just £10 per person per day. Enjoy your morning meal in comfort before exploring Torquay and the English Riviera.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-2">
                Why Choose Our King Room?
              </h3>
              <p className="text-lg text-green-800 leading-relaxed">
                Discover the perfect blend of elegance and comfort in our king room. With a premium 5-foot zip &amp; link king-size bed rated 8.8/10 for comfort, stunning garden views, and a private en-suite shower room, this room offers the ideal retreat for couples or individuals seeking a luxurious stay at Tusker Lodge in Torquay. The soundproof walls ensure a peaceful night&apos;s sleep, while comprehensive amenities and complimentary bottled water make for a comfortable, worry-free experience.
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
