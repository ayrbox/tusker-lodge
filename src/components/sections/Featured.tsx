import Image from "next/image";
import HarbourImage from "@/images/hero-banner.jpg";
import BG from "@/images/bg/featured_bg.jpg";

export default function Featured() {
  return (
    <section
      className="relative py-10 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${BG.src})`,
      }}
    >
      <div className="container mx-auto mb-16 py-8 flex flex-col xl:flex-row">
        <div className="p-8 xl:w-1/2">
          <Image
            className="rounded rounded-lg shadow-md h-full object-cover"
            src={HarbourImage}
            alt="Torquay Harbour"
          />
        </div>
        <div className="p-8 xl:w-1/2 text-gray-500">
          <h5 className="font-bold text-blue-400 mb-2">
            Welcome to Tusker Lodge
          </h5>
          <h1 className="mb-6 text-4xl font-bold">
            Experience Torquay with us
          </h1>

          <p className="mb-3 text-lg">
            Welcome to Tusker Lodge – your perfect coastal retreat just 10
            minutes from Torquay harbour!
          </p>
          <p className="mb-3">
            Run by Sandy (a professional chef) and his wife, we bring genuine
            warmth and exceptional hospitality to your Devon getaway. Start each
            day with Sandy's expertly crafted breakfast, and don't miss his
            weekend Japanese takeaway – a delicious surprise that sets us apart!
          </p>
          <p className="mb-3">
            With 9 comfortable rooms (singles, doubles, and triples) and a
            pet-friendly policy, we welcome everyone – including your
            four-legged family members. Public transport is right across the
            road, making it easy to explore all that the{" "}
            <strong className="text-lg">English Riviera</strong> offers.
          </p>
          <p className="mb-3">
            Whether you're seeking seaside adventures, family fun, or a peaceful
            escape, Tusker Lodge is your ideal home base in beautiful Torquay.
          </p>
          <p className="mb-3 text-lg">
            <strong>We can't wait to welcome you!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
