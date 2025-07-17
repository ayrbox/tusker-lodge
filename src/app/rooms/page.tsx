import RoomCard from "@/components/RoomCard";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import KingRoomImage from "@/images/rooms/king.jpg";
import QueenRoomImage from "@/images/rooms/queen.jpg";
import DoubleRoomImage from "@/images/rooms/doubles.jpg";
import SingleRoomImage from "@/images/rooms/singles.jpg";

export default function RoomsPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600 pb-8">
          Our Rooms
        </h1>
        <p className="pb-8 w-full lg:w-1/2 text-gray-400">
          Our accommodation comprises of Single rooms and Double rooms. The
          bedrooms are spread over our three story Guest House with various
          south facing rooms having views over picturesque Torwood gardens. To
          the front of the property is a large south east facing terraced patio
          area also overlooking Torwood gardens.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard
          name="Family Room"
          info="Starting from £50"
          image={FamilyRoomImage}
          href="./rooms/family"
        />
        <RoomCard
          name="King Room"
          info="Starting from £50"
          image={KingRoomImage}
          href="./rooms/king"
        />
        <RoomCard
          name="Queen Room"
          info="Starting from £50"
          image={QueenRoomImage}
          href="./rooms/queen"
        />
        <RoomCard
          name="Doubles"
          info="Starting from £50"
          image={DoubleRoomImage}
          href="./rooms/doubles"
        />
        <RoomCard
          name="Singles"
          info="Starting from £50"
          image={SingleRoomImage}
          href="./rooms/singles"
        />
      </div>
    </>
  );
}
