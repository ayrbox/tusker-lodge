import Link from "next/link";
import React from "react";

export default function NavItem(props: { url: string; text: string }) {
  return <Link href={props.url}>{props.text}</Link>;
}
