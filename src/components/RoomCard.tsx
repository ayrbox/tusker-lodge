import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function RoomCard(props: {
  image: StaticImageData;
  name: string;
  info: string;
  href: string;
}) {
  return (
    <div className="relative group border border-gray-400 rounded-lg">
      <Image className="rounded-t-lg" src={props.image} alt={props.name} />
      <div className="py-4 px-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-600">{props.name}</h3>{" "}
          <p className="text-sm text-gray-500">{props.info}</p>
        </div>
        <Link
          href={props.href}
          className="text-blue-500 flex items-center hidden group-hover:block"
        >
          View Details &raquo;
        </Link>
      </div>
    </div>
  );
}
