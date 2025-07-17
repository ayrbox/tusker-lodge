import Image from "next/image";
import KingRoomImage from "@/images/rooms/king.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function KingRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          King Room
        </h1>
        <p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 2</strong> King room with 1 king bed.
        </p>

        <Image
          src={KingRoomImage}
          alt="King Room - Room 2"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}