import RoomCard from "@/components/RoomCard";
import Banner from "@/components/sections/Banner";
import ZuttoSushi from "@/components/sections/ZuttoSushi";

import FamilyRoomImage from "@/images/rooms/family.jpg";
import KingRoomImage from "@/images/rooms/king.jpg";
import QueenRoomImage from "@/images/rooms/queen.jpg";
import DoubleRoomImage from "@/images/rooms/doubles.jpg";
import SingleRoomImage from "@/images/rooms/singles.jpg";

export default function RoomsPage() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Banner title="Our Rooms" path="Home > Rooms" />

      <div className="container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center text-gray-700 pb-8">
          Our Rooms
        </h1>

        <div className="grid grid-cols-3 gap-8">
          <RoomCard
            name="Family Room"
            info="Starting from £50"
            image={FamilyRoomImage}
          />
          <RoomCard
            name="King Room"
            info="Starting from £50"
            image={KingRoomImage}
          />
          <RoomCard
            name="Queen Room"
            info="Starting from £50"
            image={QueenRoomImage}
          />
          <RoomCard
            name="Doubles"
            info="Starting from £50"
            image={DoubleRoomImage}
          />
          <RoomCard
            name="Singles"
            info="Starting from £50"
            image={SingleRoomImage}
          />
        </div>
      </div>

      <ZuttoSushi />
    </main>
  );
}
