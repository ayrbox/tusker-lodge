import Link from "next/link";
import { attractions, Attraction, AttractionCategory } from "./data";

const AttractionCard = (props: Attraction) => {
  return (
    <li className="group py-2">
      <Link
        href={props.link}
        target="_blank"
        className="text-indigo-400 group-hover:text-indigo-600"
      >
        {props.name}
      </Link>
      {props.description && (
        <div className="text-sm text-gray-600">{props.description}</div>
      )}
    </li>
  );
};

const renderAttractionCategory = (props: AttractionCategory) => {
  return (
    <div className="">
      <h2 className="text-2xl mb-4">{props.name}</h2>
      <ul role="list" className="space-y-2">
        {props.attractions.map((a) => (
          <AttractionCard key={a.name} {...a} />
        ))}
      </ul>
    </div>
  );
};

export default function AttractionsPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {attractions.map((c) => renderAttractionCategory(c))}
    </div>
  );
}
