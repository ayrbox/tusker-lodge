"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";

import LogoImage from "@/images/logo.jpg";
import ButtonLink from "./ButtonLink";
import { PhoneCallIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type Nav = {
  name: string;
  text: string;
  url: string;
};

const navigations: Nav[] = [
  {
    name: "home",
    text: "Home",
    url: "/",
  },
  {
    name: "our-rooms",
    text: "Our Rooms",
    url: "/rooms",
  },
  {
    name: "attractions",
    text: "Local Attractions",
    url: "/attractions",
  },
  {
    name: "pets",
    text: "Pets",
    url: "/pets",
  },
  {
    name: "parking",
    text: "Parking",
    url: "/parking",
  },
  {
    name: "contact",
    text: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  const [menu, setMenu] = useState(true);

  const handleMenuToggle: (open: boolean) => React.MouseEventHandler =
    (open) => (e) => {
      e.preventDefault();
      setMenu(open);
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
          {navigations.map((n) => (
            <li key={n.name}>
              <NavItem text={n.text} url={n.url} />
            </li>
          ))}
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

        <ButtonLink
          className="hidden md:block"
          href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm"
        >
          Check Availability
        </ButtonLink>

        <button className="block lg:hidden" onClick={handleMenuToggle(true)}>
          <MenuIcon />
        </button>
        <div
          className={clsx(
            "z-1 absolute inset-0 bg-stone-950 opacity-75",
            menu && "block",
            !menu && "hidden",
          )}
          role="button"
          onClick={handleMenuToggle(false)}
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
            <button onClick={handleMenuToggle(false)}>
              <XIcon />
            </button>

            <ol className="flex flex-col align-items gap-4">
              {navigations.map((n) => (
                <li key={n.name}>
                  <Link href={n.url} className="hover:text-blue-500">
                    {n.text}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
