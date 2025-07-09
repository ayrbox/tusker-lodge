import Link from "next/link";
import React from "react";

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link
      href={props.href}
      className="bg-[#2196f3] px-4 py-2 rounded-lg text-blue-100 font-bold"
    >
      {props.children}
    </Link>
  );
}
