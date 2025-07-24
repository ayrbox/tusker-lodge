import Image from "next/image";
import SinglesRoomImage from "@/images/rooms/singles.jpg";
import Facilities from "@/app/rooms/Facilities";
import Wrapper, { Sidebar, Content } from "@/app/rooms/Wrapper";

export default function SinglesRoom() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={SinglesRoomImage}
        alt="Singles Room - Room 4"
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
                All our single rooms well furnished with private en-suite shower
                room.
              </p>

              <p>
                <strong>Room 02</strong> is north facing large singleon the
                first floor half landing which is accessible from the rear
                entrance with few steps to navigate from the outside but there
                are steps down to the breakfast room on the ground floor. This
                room has an en-suite shower room.
              </p>

              <p>
                <strong>Room 08</strong> is north facing and situated on the
                second floor with use of a shared bathroom. Refurbished in 2014
                it has a 3’ single bed, wardrode and desk.
              </p>

              <p>
                <strong>Room 12</strong> is a small north facing single situated
                on the second floor with a 3’ bed and use of a shared bathroom.
                Refurbished in 2013.
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
