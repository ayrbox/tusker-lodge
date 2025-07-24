import Image from "next/image";
import QueenRoomImage from "@/images/rooms/queen.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";

export default function QueenRoom() {
  return (
    <div className="flex flex-col items-center">
      <Image src={QueenRoomImage} alt="Queen Room - Room 3" className="pb-4" />
      <Wrapper title="Room 3: Queen Room ">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">
                Queen Room is our super king sized double, a spacious north
                facing, first floor en-suite with a 6′ super king, sumptuously
                comfortable double bed and a compact en-suite.
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
