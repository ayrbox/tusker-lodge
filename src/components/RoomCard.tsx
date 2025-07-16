import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function RoomCard(props: {
  image: StaticImageData;
  name: string;
  info: string;
}) {
  return (
    <div className="relative group border border-gray-300 rounded-md">
      <Image src={props.image} alt={props.name} />
      <div className="py-4 px-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{props.name}</h3>
          <p className="text-sm">{props.info}</p>
        </div>
        <Link
          href="./link-to-room"
          className="text-blue-500 flex items-center hidden group-hover:block"
        >
          View Details &raquo;
        </Link>
      </div>
    </div>
  );
}
