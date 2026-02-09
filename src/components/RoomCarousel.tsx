"use client";

import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RoomCarouselProps {
  images: { src: StaticImageData; alt: string }[];
}

export default function RoomCarousel({ images }: RoomCarouselProps) {
  return (
    <div className="w-full pb-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
}
