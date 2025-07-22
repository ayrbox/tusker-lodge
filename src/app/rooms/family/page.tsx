import Image from "next/image";
import FamilyRoomImage from "@/images/rooms/family.jpg";
import ButtonLink from "@/components/ButtonLink";
import { BedDouble, PawPrint, CircleParking, Wifi, Tv } from "lucide-react";

export default function FamilyRoom() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Image
          src={FamilyRoomImage}
          alt="Family Room - Room 5"
          className="pb-4"
        />
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Family Room
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="text-3xl tracking-tight text-gray-900">
              Facilities
            </h2>
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
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="p-4 col-span-3 text-gray-500">
            <p>
              <strong>Room 6</strong> Family room with 1 doubles bed and a
              single bed. You can use it for two or three person. Ideal for
              families, this room features a queen Hilton Serenity bed for two
              adults and a single sofa bed for a child. Enjoy a 50-inch HDTV
              with children&apos;s channels, tea and coffee facilities, USB
              ports, a work desk, and complimentary WiFi when you book direct as
              a Hilton Honors member. The private bathroom includes a shower,
              bathtub, and refreshing Crabtree &amp; Evelyn toiletries. Dine
              with us in the restaurant, where you&apos;ll find a dedicated
              children&apos;s menu—and breakfast is free for children under
              five. Sleeps up to two adults and one child
            </p>
            <p>
              All double rooms are beautifully furnished and stylishly decorated
              in calm, neutral colours, the bedrooms all benefit from features
              characteristic of an Edwardian House such as high ceilings and
              large windows which ensure each room is flooded with natural
              daylight. Each room offers a comfortable bed with a high quality
              mattress to ensure a good night’s sleep together with an en-suite
              shower room, flat screen TV and tea and coffee making
              facilities.Breakfast is an optional £8 per person per day,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
