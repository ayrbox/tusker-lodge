import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/images/logo.jpg";

const FooterHeading = (props: { children: React.ReactNode }) => {
  return (
    <h1 className="text-xl font-bold text-gray-700 pt-4 pb-2 md:pt-0">
      {props.children}
    </h1>
  );
};

export default function Footer() {
  return (
    <section className="py-12 px-8 text-gray-500">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
        <div>
          <Image
            src={LogoImage}
            alt="Tusker Lodge Logo"
            width={200}
            height={60}
          />
          <p className="mt-2">533 Babbacombe Road, Torquay, Devon, TQ1 1HQ.</p>
        </div>
        <div>
          <FooterHeading>Reservations</FooterHeading>
          <p>Tel: 01803 292668</p>
          <p>tuskerlodgehotel@gmail.com</p>
        </div>
        <div>
          <FooterHeading>Socials</FooterHeading>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/TuskerLodgeHotel"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/tuskerlodgehotel/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 hover:fill-current hover:text-blue-500"
                fill="currentColor"
                style={{ color: "#c13584" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <FooterHeading>Links</FooterHeading>
          <ol className="flex flex-col">
            <li>
              <NavItem text="Location" url="/" />
            </li>
            <li>
              <NavItem text="Zutto Sushi" url="/pets" />
            </li>
            <li>
              <NavItem text="Terms &amp; Condition" url="/rooms" />
            </li>
            <li>
              <NavItem text="Privacy Policy" url="/attractions" />
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
