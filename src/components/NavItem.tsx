import React from "react";

export default function NavItem(props: { url: string; text: string }) {
  return (
    <a href={props.url} className="hover:text-blue-500">
      {props.text}
    </a>
  );
}
