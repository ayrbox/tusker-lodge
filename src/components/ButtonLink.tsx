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
      target="_blank"
      className={clsx(
        "border rounded-md border border-transparent bg-[#009ffd] px-8 py-3 text-base font-medium text-white hover:bg-[#ffa400] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden",
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
}
