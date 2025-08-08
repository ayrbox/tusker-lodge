import NavItem from "./NavItem";
import Image from "next/image";

import LogoImage from "@/images/logo.jpg";
import ButtonLink from "./ButtonLink";
import { PhoneCallIcon } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="p-2 md:p-8">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <Image
            src={LogoImage}
            alt="Tusker Lodge Logo"
            width={200}
            height={60}
          />

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

          <div className="hidden relative md:grid grid-cols-[auto_1fr] gap-x-2 items-center text-gray-700">
            <div className="p-3 row-span-2 rounded-full bg-orange-500">
              <PhoneCallIcon className="text-orange-100" />
            </div>
            <p className="text-gray-400">Call Us</p>
            <p className="text-gray-700">
              <a href="tel:+441803292668">
                <span className="absolute inset-0"></span>
                +44 1803 292668
              </a>
            </p>
          </div>

          <ButtonLink href="./book-now">Check Availability</ButtonLink>
        </div>
      </div>
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
    </>
  );
}
