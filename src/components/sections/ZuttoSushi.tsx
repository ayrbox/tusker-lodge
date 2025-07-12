import ButtonLink from "@/components/ButtonLink";
import ZuttoSushiImage from "@/images/zutto-sushi.jpg";

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
          Experience Zutto Sushi from our safe.
        </p>
        <div>
          <ButtonLink href="https://booking-directly.com/widgets/DLdRvxNR4vFcZTkOiuz4Qo5FPd8WPmcwPjOPtcPJsAV1CDfo7uweeGDXgLdtm">
            Learn Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
