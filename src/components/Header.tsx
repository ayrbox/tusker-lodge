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
  const [menu, setMenu] = useState(false);

  const handleMenuToggle: (open: boolean) => React.MouseEventHandler =
    (open) => () => {
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

        {/* Desktop horizontal menu */}
        <ol className="hidden lg:flex align-items gap-6">
          {navigations.map((n) => (
            <li key={n.name}>
              <NavItem text={n.text} url={n.url} />
            </li>
          ))}
        </ol>

        {/* Contact info - visible on medium screens and up */}
        <div className="hidden relative md:grid grid-cols-[auto_1fr] gap-x-2 items-center text-gray-700">
          <div className="p-3 row-span-2 rounded-full bg-orange-500">
            <PhoneCallIcon className="text-orange-100" />
          </div>
          <p className="text-gray-400 text-sm">Call Us</p>
          <p className="text-gray-700 font-semibold">
            <a href="tel:+441803292668">
              <span className="absolute inset-0"></span>
              +44 1803 292668
            </a>
          </p>
        </div>

        {/* Book button - hidden on mobile to make room for burger menu */}
        <div className="hidden md:block">
          <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
            Check Availability
          </ButtonLink>
        </div>

        {/* Mobile burger menu button */}
        <button
          className="block lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={handleMenuToggle(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
            menu ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          role="button"
          onClick={handleMenuToggle(false)}
        ></div>

        {/* Sidebar menu */}
        <aside
          className={clsx(
            "fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
            "w-80 max-w-[85vw]",
            menu ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={handleMenuToggle(false)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
              <ol className="space-y-4">
                {navigations.map((n) => (
                  <li key={n.name}>
                    <Link
                      href={n.url}
                      className="block py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors text-lg font-medium"
                      onClick={handleMenuToggle(false)}
                    >
                      {n.text}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Footer with contact and booking */}
            <div className="border-t border-gray-200 p-4 space-y-4">
              {/* Contact info */}
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 rounded-full bg-orange-500">
                  <PhoneCallIcon className="text-orange-100 h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="font-semibold">
                    <a href="tel:+441803292668">+44 1803 292668</a>
                  </p>
                </div>
              </div>

              {/* Book button */}
              <div className="w-full">
                <ButtonLink
                  href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm"
                  className="w-full text-center"
                >
                  Check Availability
                </ButtonLink>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
