import Image, { StaticImageData } from "next/image";
import KingRoomImage from "@/images/rooms/king.jpg";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import DoubleRoomImage from "@/images/rooms/doubles.jpg";
import SingleRoomImage from "@/images/rooms/singles.jpg";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export type RoomProps = {
  image: StaticImageData;
  name: string;
  href: string;
};

const Room = (props: RoomProps) => {
  return (
    <div className="relative group text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          className="object-cover h-full w-full"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-[#1a627d] to-transparent"></div>
      <div className="absolute inset-0 p-4 flex items-end">
        <div>
          <h3 className="text-xl font-bold">{props.name}</h3>
          <Link className="flex" href={props.href}>
            <span className="absolute inset-0"></span>
            <span>View</span>
            <ArrowRightIcon className="transition-all group-hover:translate-x-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const roomsInfo: RoomProps[] = [
  {
    name: "Family Room",
    image: FamilyRoomImage,
    href: "./rooms/family",
  },
  {
    name: "King & Queen Room",
    image: KingRoomImage,
    href: "./rooms/king",
  },
  {
    name: "Doubles",
    image: DoubleRoomImage,
    href: "./rooms/doubles",
  },
  {
    name: "Singles",
    image: SingleRoomImage,
    href: "./rooms/singles",
  },
];

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
      <div className="xl:w-1/2 grid md:grid-cols-2 h-dvh xl:h-[32rem]">
        {roomsInfo.map((r) => (
          <Room key={r.name} name={r.name} image={r.image} href={r.href} />
        ))}
      </div>
    </section>
  );
}
