import TorquayHarbourImage from "@/images/featured-torquay-harbour.jpg";
import { BookingCTA } from "../BookingCTA";

export default function Hero() {
  //console.dir(HeroImage, { depth: Infinity });
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${TorquayHarbourImage.src})`,
      }}
    >
      <div className="relative container mx-auto px-8 py-32 xl:p-40 flex flex-col text-center md:text-left">
        <h1 className="text-5xl md:text-6xl text-gray-200 text-shadow-lg">
          Experience Torquay with
          <span className="font-bold"> Tusker Lodge</span>
        </h1>
        <p className="my-8 text-gray-200 font-bold">
          Sandy welcomes you to Tusker Lodge in Torquay Harbour, located in
          heart of English Riviera.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-items-end">
          <BookingCTA href={process.env.NEXT_PUBLIC_BOOKING_DIRECTLY}>
            Book Directly
          </BookingCTA>
          <BookingCTA
            href={process.env.NEXT_PUBLIC_BOOKING_DOT_COM}
            variant="booking"
          >
            Booking.com
          </BookingCTA>
        </div>
      </div>
    </section>
  );
}
