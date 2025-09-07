"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";

import LogoImage from "@/images/logo.jpg";
import ButtonLink from "./ButtonLink";
import { PhoneCallIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [menu, setMenu] = useState(true);

  const handleMenuToggle: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setMenu((m) => !m);
  };

  return (
    <div className="p-2">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="Tusker Lodge Logo"
            width={200}
            height={60}
          />
        </Link>

        <ol className="hidden lg:flex align-items gap-4">
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

        <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
          Check Availability
        </ButtonLink>

        <button onClick={handleMenuToggle}>
          <MenuIcon />
        </button>
        <div
          className={clsx(
            "z-1 absolute inset-0 bg-gray-900 opacity-25",
            menu && "block",
            !menu && "hidden",
          )}
          role="button"
          onClick={handleMenuToggle}
        ></div>
        <section
          className={clsx(
            "absolute top-0 bottom-0 right-0 bg-gray-200 z-1 transition-all duration-150 ease-in-out",
            menu && "w-100",
            !menu && "w-0",
          )}
        >
          <div className="">
            <h1>Menu Here</h1>
            <button onClick={handleMenuToggle}>
              <XIcon />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
