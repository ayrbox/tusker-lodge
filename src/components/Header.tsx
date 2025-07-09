import NavItem from "./NavItem";
import Image from "next/image";

import LogoImage from "@/images/logo.jpg";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <div className="p-2 md:p-8 flex flex-col md:space-y-4 justify-between items-center">
      <div className="container mx-auto flex items-center justify-between md:pb-4 md:mb-4 md:border-b md:border-gray-300">
        <p className="text-2xl hidden md:block text-gray-400">01803 292668</p>
        <div className="">
          <Image
            src={LogoImage}
            alt="Tusker Lodge Logo"
            width={200}
            height={60}
          />
        </div>
        <ButtonLink href="./book-now">Book Now</ButtonLink>
      </div>
      <ol className="hidden md:flex align-items gap-8">
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
      </ol>
    </div>
  );
}
