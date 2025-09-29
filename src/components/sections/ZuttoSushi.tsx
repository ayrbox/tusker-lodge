import { ArrowRightIcon } from "lucide-react";
import ZuttoSushiImage from "@/images/zutto-sushi.jpg";
import Link from "next/link";

export default function ZuttoSushi() {
  return (
    <section
      className="relative py-10 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${ZuttoSushiImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-40 group-hover:hidden"></div>
      <div className="relative container mx-auto py-8 flex flex-col text-center border-2 border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-200 text-shadow-lg">
          Zutto Sushi
        </h1>
        <p className="mb-8 text-gray-200 font-bold">
          Experience Zutto Sushi from our Chef.
        </p>
        <div className="flex justify-center">
          <Link
            href="https://www.zuttosushi.co.uk/"
            target="_blank"
            className="text-gray-100 rounded-full border-transparent bg-[#009ffd] px-8 py-3 text-base font-medium hover:bg-[#ffa400] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          >
            <div className="flex justify-center gap-2">
              Learn Now
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
