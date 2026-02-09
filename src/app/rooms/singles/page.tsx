import SinglesRoomImage from "@/images/rooms/singles.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function SinglesRoom() {
  const images = [
    {
      src: SinglesRoomImage,
      alt: "Single Room with Garden View - Comfortable Accommodation at Tusker Lodge",
    },
    {
      src: SinglesRoomImage,
      alt: "Single Room Ensuite - Tusker Lodge Torquay",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Single Room with Garden View",
    description:
      "Single room with private bathroom, soundproof walls, and garden views. Features extra-long single bed and flat-screen TV. Rated 8.8/10 for comfortable beds.",
    occupancy: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 1,
    },
    bed: {
      "@type": "BedDetails",
      name: "Single Bed (Extra Long - Over 2 metres)",
      numberOfBeds: 1,
    },
    amenityFeature: [
      { "@type": "Text", name: "Private Bathroom" },
      { "@type": "Text", name: "Garden View" },
      { "@type": "Text", name: "Soundproofing" },
      { "@type": "Text", name: "Flat-screen TV" },
      { "@type": "Text", name: "Free Toiletries" },
      { "@type": "Text", name: "Tea/Coffee Maker" },
      { "@type": "Text", name: "Hairdryer" },
      { "@type": "Text", name: "Electric Kettle" },
      { "@type": "Text", name: "Wardrobe or Closet" },
      { "@type": "Text", name: "Heating" },
      { "@type": "Text", name: "Fan" },
      { "@type": "Text", name: "Carpeted" },
      { "@type": "Text", name: "Desk" },
      { "@type": "Text", name: "Seating Area" },
      { "@type": "Text", name: "Iron" },
      { "@type": "Text", name: "Wake up service/Alarm clock" },
      { "@type": "Text", name: "Socket near the bed" },
      { "@type": "Text", name: "Linen" },
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
    image: SinglesRoomImage.src,
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoomCarousel images={images} />

      <Wrapper title="North Facing Single Room">
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
                Our <strong>Single Room</strong> offers a peaceful retreat with
                stunning garden views. This unit features a private bathroom,
                soundproof walls for a quiet stay, and is equipped with a tea and
                coffee maker for your convenience.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Relax in the seating area with a flat-screen TV or make use of the
                desk for any work needs. The room includes a wardrobe, carpeted
                floors, heading, and an extra-long single bed (over 2 metres) that
                guests have rated <strong>8.8/10</strong> for comfort.
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
                  <span className="font-medium">1 Single Bed</span> - Extra long
                  (&gt; 2 metres)
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Private Bathroom</span> - With bath
                  or shower, toilet, and towels
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Garden View</span> - Peaceful
                  outlook
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Entertainment</span> - Flat-screen
                  TV
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Convenience</span> - tea/coffee
                  maker, electric kettle, socket near bed
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Comfort</span> - Soundproofing,
                  heating, fan, carpeted floors
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Furniture</span> - Desk, seating
                  area, wardrobe or closet
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Toiletries</span> - Free
                  toiletries, hairdryer, toilet paper
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Other</span> - Iron, wake up
                  service/alarm clock, linen
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
                Guests love the comfort of our extra-long beds and the quiet atmosphere provided by the soundproof walls and garden views.
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
