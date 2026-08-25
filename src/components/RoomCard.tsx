export default function RoomCard(props: {
  image: any;
  name: string;
  info: string;
  href: string;
}) {
  return (
    <div className="relative group hover:shadow-lg rounded-xl">
      <img className="rounded-t-xl" src={props.image} alt={props.name} />
      <div className="py-4 px-8 flex items-center justify-between border-b border-l border-r border-gray-300 rounded-b-xl">
        <div>
          <h3 className="text-xl font-bold text-gray-600">
            <a href={props.href} className="flex items-center">
              <span className="absolute inset-0"></span>
              {props.name}
            </a>
          </h3>
          <p className="text-sm text-gray-500">{props.info}</p>
        </div>
      </div>
    </div>
  );
}
