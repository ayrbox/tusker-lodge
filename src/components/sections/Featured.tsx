import Image from "next/image";

export default function Featured() {
  return (
    <section>
      <div className="container mx-auto py-16 flex">
        <div className="w-1/2 text-gray-500">
          <h1 className="mb-6 text-5xl font-bold">About Us</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet sem semper, elementum lorem in, sollicitudin nunc. Fusce
            gravida semper est vel elementum. In vehicula arcu nec cursus
            vehicula. Nullam risus nisi, cursus a posuere eu, egestas placerat
            massa. Nulla ut scelerisque augue. Phasellus at mattis ante, a
            euismod risus. Mauris a massa ipsum.
          </p>
          <p>
            Nunc consequat sem orci, ut ultricies magna auctor vitae. Aenean
            vulputate, quam eu suscipit ultrices, justo nisi aliquam nisi, sed
            tristique quam orci at metus. Quisque elementum ac turpis ac auctor.
            Donec ultrices urna sed fermentum eleifend. Proin eget turpis eget
            elit ultrices sagittis. Nulla sollicitudin metus nisl.
          </p>
        </div>
        <Image
          className="rounded rounded-lg shadow-md border w-1/2"
          src="/featured-torquay-harbour.jpg"
          alt="Torquay Harbour"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
}
