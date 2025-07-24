import Image from "next/image";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";

export default function FamilyRoom() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={FamilyRoomImage}
        alt="Family Room - Room 5"
        className="pb-4"
      />

      <Wrapper title="Room 6: Family Comfort">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">
                Our spacious Family Room is designed with your comfort in mind,
                accommodating two to three guests. It&apos;s an ideal choice for
                families, featuring window view to Torwood Garden.
              </p>

              <p className="text-base text-gray-900">
                Enjoy a relaxing stay with amenities including a 50-inch HDTV
                with a selection of children&apos;s channels, tea and coffee
                facilities, convenient USB ports, and a dedicated work desk.
                Take advantage of complimentary WiFi hotspot.
              </p>

              <p className="text-base text-gray-900">
                The private bathroom offers a rejuvenating experience with both
                a shower and a bathtub, complemented by refreshing toiletries.
                This room comfortably sleeps up to two adults and/or three
                adults.
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
