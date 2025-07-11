import Link from "next/link";
import React from "react";

export default function NavItem(props: { url: string; text: string }) {
  return (
    <Link href={props.url} className="hover:text-blue-500">
      {props.text}
    </Link>
  );
}
