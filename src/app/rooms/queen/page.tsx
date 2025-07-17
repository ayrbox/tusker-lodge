import Image from "next/image";
import QueenRoomImage from "@/images/rooms/queen.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function QueenRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          Queen Room
        </h1>
        <p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 3</strong> Queen room with 1 queen bed.
        </p>

        <Image
          src={QueenRoomImage}
          alt="Queen Room - Room 3"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}