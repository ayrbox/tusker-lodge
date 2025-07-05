import NavItem from "./NavItem";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white p-8 flex flex-col space-y-4 justify-between items-center">
      <Image src="/logo.jpg" alt="Tusker Lodge Logo" width={200} height={60} />
      <p className="text-xl text-gray-400">
        All Room En-suite. Car Parking. Pet Friendly.
      </p>

      <p className="text-4xl">01803 292668</p>

      <ol className="flex align-items gap-8">
        <li>
          <NavItem text="Home" url="/" />
        </li>
        <li>
          <NavItem text="Our Rooms" url="/rooms" />
        </li>
        <li>
          <NavItem text="Local Attraction" url="/attractions" />
        </li>
        <li>
          <NavItem text="Pets" url="/pets" />
        </li>
        <li>
          <NavItem text="Parking" url="/parking" />
        </li>
        <li>
          <NavItem text="Contact" url="/contact" />
        </li>
        <li>
          <NavItem text="Book Now" url="/book-now" />
        </li>
      </ol>
    </div>
  );
}
