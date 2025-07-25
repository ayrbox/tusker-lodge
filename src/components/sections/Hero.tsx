import ButtonLink from "@/components/ButtonLink";
import TorquayHarbourImage from "@/images/torquay-harbour.jpg";

export default function Hero() {
  //console.dir(HeroImage, { depth: Infinity });
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-700 before:to-transparent"
      style={{
        backgroundImage: `url(${TorquayHarbourImage.src})`,
      }}
    >
      <div className="relative container mx-auto py-32 lg:p-40 flex flex-col text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-200 text-shadow-lg">
          Come and Stay with us
        </h1>
        <p className="my-8 text-gray-200 font-bold">
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
