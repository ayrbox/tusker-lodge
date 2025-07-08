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
      className="bg-orange-400 px-8 py-4 rounded-lg text-orange-100"
    >
      {props.children}
    </Link>
  );
}
