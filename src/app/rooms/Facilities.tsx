import { BedDouble, PawPrint, CircleParking, Wifi, Tv } from "lucide-react";

export default function Facilities() {
  return (
    <>
      <h2 className="text-3xl tracking-tight text-gray-900">Facilities</h2>
      <div className="my-6 text-blue-600">
        <h3 className="sr-only">Ameneties</h3>
        <div className="flex gap-2">
          <BedDouble />
          <PawPrint />
          <Wifi />
          <Tv />
          <CircleParking />
        </div>
      </div>
      <ul
        role="list"
        className="list-disc space-y-2 pl-4 text-sm text-gray-600"
      >
        <li>Sleeps up to 3 person</li>
        <li>Free WiFi</li>
        <li>Pet friendly</li>
        <li>Non-smoking</li>
        <li>Freeview TV</li>
        <li>Tea and Coffee making facilities</li>
        <li>Linen provided</li>
        <li>Hairdryer</li>
      </ul>

      <a
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        href="./booking"
      >
        Check Avaibility
      </a>
    </>
  );
}
