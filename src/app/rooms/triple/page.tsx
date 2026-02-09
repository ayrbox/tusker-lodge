import FamilyRoomImage from "@/images/rooms/family.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function FamilyRoom() {
  const images = [
    {
      src: FamilyRoomImage,
      alt: "Triple Room with Garden View - 102 ft² Accommodation at Tusker Lodge Torquay",
    },
    {
      src: FamilyRoomImage,
      alt: "Triple Room with Walk-in Shower - Premium Family Accommodation in Torquay, Devon",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Triple Room with Garden View",
    description:
      "102 ft² triple room with 1 single bed and 1 large double bed, walk-in shower, and garden views at Tusker Lodge Torquay bed and breakfast. Rated 8.8/10 for comfortable beds.",
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 3,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      unitCode: "FTK",
      value: "102",
    },
    bed: [
      {
        "@type": "BedDetails",
        name: "Large Double Bed (Extra Long - Over 2 metres)",
        quantity: 1,
      },
      {
        "@type": "BedDetails",
        name: "Single Bed (Extra Long - Over 2 metres)",
        quantity: 1,
      },
    ],
    amenityFeature: [
      { "@type": "Text", name: "Private Bathroom with Walk-in Shower" },
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
    ],
    review: {
      "@type": "Review",
      ratingValue: "8.8",
      bestRating: "10",
      worstRating: "1",
      ratingExplanation: "Based on 89 reviews for comfortable beds",
    },
    image: FamilyRoomImage.src,
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoomCarousel images={images} />

      <Wrapper title="Triple Room with Garden View">
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
                Experience the comfort of our{" "}
                <strong>Triple Room with Garden View</strong>, a spacious 102
                ft² accommodation perfect for families and groups of up to 3
                guests. Featuring 1 large double bed and 1 single bed with extra
                long frames (over 2 metres), this room is designed for ultimate
                comfort and relaxation at Tusker Lodge, a premium bed and
                breakfast in Torquay.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our triple room boasts beautiful garden views, carpeted floors,
                and a seating area with flat-screen TV, creating the perfect
                retreat after a day exploring the English Riviera. Guests
                consistently rate our beds as exceptionally comfortable, with an
                impressive <strong>8.8/10 rating</strong> based on 89 reviews.
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
                  <span className="font-medium">102 ft² of Space</span> -
                  Generous, comfortable accommodation
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">1 Large Double Bed</span> -
                  Extra long (over 2 metres)
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">1 Single Bed</span> - Extra long
                  (over 2 metres)
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Private Bathroom</span> - With
                  walk-in shower
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Free Toiletries</span> - Premium
                  quality products
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Hair Dryer</span> - Provided in
                  en-suite
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Flat-Screen TV</span> -
                  Entertainment and relaxation
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Tea and Coffee Maker</span> -
                  With electric kettle
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Seating Area</span> -
                  Comfortable lounge space
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Garden View</span> - Beautiful
                  outlook over the gardens
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Soundproof Walls</span> - Peace
                  and quiet guaranteed
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Carpeted Floors</span> - Comfort
                  underfoot
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Workspace</span> - Desk for work
                  or planning
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Iron &amp; Ironing Board</span>{" "}
                  - Available upon request
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Wardrobe or Closet</span> -
                  Ample storage
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Climate Control</span> - Heating
                  and fan
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Socket Near Bed</span> -
                  Convenient charging
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">
                    Wake-up Service/Alarm Clock
                  </span>{" "}
                  - Never miss checkout
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-8">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Guest Comfort Rating
              </h3>
              <p className="text-lg text-amber-800 leading-relaxed mb-3">
                <strong>Beds Rated 8.8 out of 10</strong> - Based on 89 verified
                guest reviews
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Our guests consistently praise the comfort and quality of our
                beds, making this triple room an excellent choice for a restful
                stay in Torquay.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Breakfast &amp; Dining
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Start your day right with our delicious breakfast, an optional
                extra at just £10 per person per day. Our carefully prepared
                breakfast options ensure the whole family is energized for
                exploring Torquay and the English Riviera.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-2">
                Why Choose Our Triple Room?
              </h3>
              <p className="text-lg text-green-800 leading-relaxed">
                With spacious 102 ft² of accommodation, extra-long beds rated
                8.8/10 for comfort, and stunning garden views, our triple room
                is the perfect choice for families and groups visiting Torquay.
                The soundproof walls ensure a peaceful night&apos;s sleep, while
                the comprehensive amenities make for a comfortable, worry-free
                stay at Tusker Lodge, a premier bed and breakfast in Devon.
              </p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
