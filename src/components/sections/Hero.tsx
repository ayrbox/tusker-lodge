import ButtonLink from "@/components/ButtonLink";
import HeroImage from "@/images/hero-room-image.jpg";

export default function Hero() {
  //console.dir(HeroImage, { depth: Infinity });
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <div className="container mx-auto py-64 flex flex-col">
        <h1 className="relative text-7xl font-bold text-gray-200 text-shadow-lg">
          Come and Stay with Us
        </h1>
        <p className="my-8 text-gray-200">
          Sandy welcomes you to Tusker Lodge in Torquay Harbour, located in
          heart of English Riviera.
        </p>
        <div>
          <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
            Book Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
