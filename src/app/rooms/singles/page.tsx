import Image from "next/image";
import SinglesRoomImage from "@/images/rooms/singles.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function SinglesRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          Singles Room
        </h1>
        <p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 4</strong> Single room with 1 single bed.
        </p>

        <Image
          src={SinglesRoomImage}
          alt="Singles Room - Room 4"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}