import Image from "next/image";
import DoublesRoomImage from "@/images/rooms/doubles.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function DoublesRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          Doubles Room
        </h1>
        <p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 1</strong> Double room with 1 double bed.
        </p>

        <Image
          src={DoublesRoomImage}
          alt="Doubles Room - Room 1"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}