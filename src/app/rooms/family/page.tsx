import Image from "next/image";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import ButtonLink from "@/components/ButtonLink";

export default function FamilyRoom() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          Family Room
        </h1>
        <p className="mt-4 pb-8 w-full md:w-1/2 text-gray-400">
          <strong>Room 6</strong> Family room with 1 doubles bed and a single
          bed. You can use it for two or three person.
        </p>

        <Image
          src={FamilyRoomImage}
          alt="Family Room - Room 5"
          className="pb-4"
        />

        <ButtonLink href="./booking">Book Now</ButtonLink>
      </div>
    </>
  );
}
