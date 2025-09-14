import Image from "next/image";
import HarbourImage from "@/images/featured-torquay-harbour.jpg";

export default function Featured() {
  return (
    <section>
      <div className="container mx-auto mb-16 py-8 flex flex-col items-center md:flex-row gap-4">
        <Image
          className="rounded rounded-lg shadow-md border md:w-1/2"
          src={HarbourImage}
          alt="Torquay Harbour"
          height={500}
          width={500}
        />
        <div className="p-8 md:w-1/2 text-gray-500">
          <h5 className="font-bold text-blue-400 mb-2">
            Welcome to Tusker Lodge
          </h5>
          <h1 className="mb-6 text-4xl font-bold">
            Experience Torquay with us
          </h1>
          <p className="mb-3">
            Welcome to Tusker Lodge, your home away from home in the heart of
            beautiful Torquay, Devon. Nestled just a pleasant 10-minute stroll
            from the vibrant Torquay harbour, our charming bed and breakfast
            offers the perfect blend of comfort, convenience, and coastal charm.
          </p>
          <p className="mb-3">
            Run with warmth and dedication by Sandy and his wife, Tusker Lodge
            reflects our passion for hospitality. Sandy brings his professional
            culinary expertise to your breakfast table each morning, drawing
            from years of experience as a chef. For those seeking something
            special, don't miss our weekend takeaway service featuring Sandy's
            exceptional Japanese cuisine – a unique treat you won't find at
            other local accommodations.
          </p>
          <p className="mb-3">
            Our nine thoughtfully appointed rooms cater to every traveler's
            needs, whether you're seeking a cozy single retreat, a romantic
            double, or a spacious triple for the whole family. And speaking of
            family – we haven't forgotten your four-legged companions! As a
            pet-friendly establishment, we welcome well-behaved pets because we
            know they're part of your travel story too.
          </p>
          <p className="mb-3">
            Location is everything, and Tusker Lodge delivers. With public
            transport links directly across the road, exploring the English
            Riviera couldn't be easier. Spend your days discovering Torquay's
            stunning beaches, historic harbor, and charming town center, then
            return to the comfort and tranquility of our lodge.
          </p>
          <p className="mb-3">
            Whether you're here for a seaside escape, a family adventure, or a
            peaceful retreat, Tusker Lodge provides the perfect base for your
            Torquay experience. We look forward to welcoming you and sharing the
            best of Devon hospitality.
          </p>
          <p className="mb-3">
            <strong>
              Book your stay today and discover why our guests return year after
              year.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
