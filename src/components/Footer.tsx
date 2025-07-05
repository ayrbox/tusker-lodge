import NavItem from "./NavItem";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-blue-500 py-12 text-blue-200">
      <div className="container mx-auto flex justify-between">
        <div>
          <Image
            src="/logo.jpg"
            alt="Tusker Lodge Logo"
            width={200}
            height={60}
          />
        </div>
        <ol className="flex flex-col gap-3">
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
        <div>Food Hygine</div>
        <div>Social media logos</div>
      </div>
    </div>
  );
}
