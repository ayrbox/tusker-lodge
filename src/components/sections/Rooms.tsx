import Image, { StaticImageData } from "next/image";
import ButtonLink from "../ButtonLink";
import KingRoomImage from "@/images/rooms/king.jpg";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import DoubleRoomImage from "@/images/rooms/singles.jpg";
import SingleRoomImage from "@/images/rooms/singles.jpg";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const Room = (props: {
  image: StaticImageData;
  name: string;
  info: string;
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:hidden"></div>
      <Image src={props.image} alt={props.name} />
      <div className="absolute left-6 bottom-6 py-4 px-8 text-white transition-all group-hover:-translate-y-4 group-hover:bg-gray-700 rounded-md">
        <h3 className="text-xl font-bold">{props.name}</h3>
        <p className="text-sm">{props.info}</p>
      </div>
    </div>
  );
};

export default function Rooms() {
  return (
    <section className="flex flex-col xl:flex-row-reverse">
      <div className="xl:w-1/2 px-8 py-8 flex justify-center items-center">
        <div className="p-4 flex flex-col gap-8 text-center items-center">
          <h1 className="text-3xl text-gray-700 font-bold">Our Rooms</h1>
          <p className="text-gray-500">
            Choose from 9 comfortable rooms – singles, doubles, or triples to
            suit your needs. Each comes with TV and all essential amenities at
            reasonable prices. Simple, comfortable, and everything you need for
            a relaxing stay.
          </p>
          <Link className="flex" href="./rooms">
            <span>Find more </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div className="xl:w-1/2 grid md:grid-cols-2">
        <Room
          name="Family Room"
          info="Starting from £50"
          image={FamilyRoomImage}
        />
        <Room
          name="King &amp; Queen Room"
          info="Starting from £50"
          image={KingRoomImage}
        />
        <Room name="Doubles" info="Starting from £50" image={DoubleRoomImage} />
        <Room name="Singles" info="Starting from £50" image={SingleRoomImage} />
      </div>
    </section>
  );
}
