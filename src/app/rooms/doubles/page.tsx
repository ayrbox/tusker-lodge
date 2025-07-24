import Image from "next/image";
import DoublesRoomImage from "@/images/rooms/doubles.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";

export default function DoublesRoom() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={DoublesRoomImage}
        alt="Doubles Room - Room 1"
        className="pb-4"
      />

      <Wrapper title="Single Rooms">
        <Sidebar>
          <Facilities />
        </Sidebar>
        <Content>
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">
                Our Double Rooms includes double bed and well furnished for your
                comfort stay. We have three equally sized double bed rooms.
              </p>

              <p className="text-base text-gray-900">
                <strong>Room 03</strong> is north facing and is situated on the
                first floor. It is a “compact” double room with a standard 4’6”
                double bed and en-suite shower room.
              </p>

              <p className="text-base text-gray-900">
                <strong>Room 10</strong> is south facing and is situated on the
                second floor. It is a “compact” king room with a 5&apos; king
                &ldquo;zip-link&rdquo; bed and en-suite shower room.
              </p>

              <p className="text-base text-gray-900">
                <strong>Room 11</strong> is south facing and is situated on the
                second floor. It is a “compact” double room with a standard 4’6”
                double bed and en-suite shower room.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Amenites</h2>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">24&ldquo; TV</span>
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
