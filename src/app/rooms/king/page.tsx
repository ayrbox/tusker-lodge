import KingRoomImage from "@/images/rooms/king.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";
import RoomCarousel from "@/components/RoomCarousel";

export default function KingRoom() {
  const images = [
    { src: KingRoomImage, alt: "King Room - Room 2" },
    { src: KingRoomImage, alt: "King Room - Room 2 (2)" },
  ];

  return (
    <div className="flex flex-col items-center">
      <RoomCarousel images={images} />
      <Wrapper title="King Room">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">
                <strong>Room 04</strong> is a spacious and comfortable south
                facing king sized double room with a 5&apos; zip and link double
                bed. Located on the first floor with private en-suite shower
                room, a seating area and views overlooking Torwood Gardens.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Amenites</h2>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">Sleeps up to 3</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">50&ldquo; TV</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Free Wifi</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Pet Friendly</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Tea and Coffee</span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Hair Dryer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Breakfast</h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
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
