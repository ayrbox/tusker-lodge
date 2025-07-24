import React from "react";

export default function RoomWrapper(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {props.title}
        </h1>
      </div>
      {props.children}
    </div>
  );
}

function Sidebar(props: { children: React.ReactNode }) {
  return <div className="mt-4 lg:row-span-3 lg:mt-0">{props.children}</div>;
}

function Content(props: { children: React.ReactNode }) {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
      {props.children}
    </div>
  );
}

export { Sidebar, Content };
