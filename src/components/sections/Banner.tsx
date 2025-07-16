import TorquayBannerImage from "@/images/torquay-banner.jpg";

export type BannerProps = {
  title: string;
  path: string;
};

export default function Banner(props: BannerProps) {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(${TorquayBannerImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative container mx-auto py-10 flex flex-col text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-200 text-shadow-lg">
          {props.title}
        </h1>
        <p className="my-4 text-gray-200">{props.path}</p>
      </div>
    </section>
  );
}
