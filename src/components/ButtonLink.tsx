import Link from "next/link";
import React from "react";
import clsx from "clsx";

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      href={props.href}
      title="Check Availability in 'booking-directly.com'"
      className={clsx(
        "hidden md:block bg-[#2196f3] px-4 py-2 rounded-lg text-blue-100 font-bold",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}
