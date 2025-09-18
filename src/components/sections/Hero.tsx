import TorquayHarbourImage from "@/images/featured-torquay-harbour.jpg";
import clsx from "clsx";
import Link from "next/link";

const HeroCTA = ({
  href = "",
  variant = "default",
  children,
}: {
  href?: string;
  variant?: "default" | "booking";
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className={clsx(
      "border rounded-full border border-transparent px-8 py-3 text-base font-medium text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden shadow",
      {
        "bg-[#ffa400] hover:bg-[#009ffd]": variant === "default",
      },
      {
        "bg-[#003b95] hover:bg-[#006ce4]": variant === "booking",
      },
    )}
  >
    {children}
  </Link>
);

export default function Hero() {
  //console.dir(HeroImage, { depth: Infinity });
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${TorquayHarbourImage.src})`,
      }}
    >
      <div className="relative container mx-auto py-32 lg:p-40 flex flex-col text-center md:text-left">
        <h1 className="text-5xl md:text-6xl text-gray-200 text-shadow-lg">
          Experience Torquay with
          <span className="font-bold"> Tusker Lodge</span>
        </h1>
        <p className="my-8 text-gray-200 font-bold">
          Sandy welcomes you to Tusker Lodge in Torquay Harbour, located in
          heart of English Riviera.
        </p>
        <div className="flex gap-4 justify-items-end">
          <HeroCTA href={process.env.NEXT_PUBLIC_BOOKING_DIRECTLY}>
            Book Directly
          </HeroCTA>
          <HeroCTA
            href={process.env.NEXT_PUBLIC_BOOKING_DOT_COM}
            variant="booking"
          >
            Booking.com
          </HeroCTA>
        </div>
      </div>
    </section>
  );
}
