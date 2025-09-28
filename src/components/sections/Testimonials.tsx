"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    title: "A fantastic impromptu overnight stay!",
    text: `We checked in for a last minute overnight stay. The host was very welcoming and friendly, the room was very clean and well stocked with tea & coffee, the bathroom had shampoos and body cream.
We were even able to have our dog stay over with us! Very comfortable mattress and lovely view over Torwood Gardens.`,
    name: "Trudi",
    source: "Booking.com",
  },
  {
    title: "Lovely place",
    text: "A really great place to stay: excellent location, lovely hosts, a lot of character to the place, next to a sweet little park.",
    name: "Elena",
    source: "Booking.com",
  },
  {
    title: "Wonderful place and location.",
    text: `The couple running this Guest house are very kind and welcoming. They work hard to make the guests feel comfortable.
It is dog-friendly, so we took our little dog.
It is very close to the marina and centre, but there is no noise.
If you go with your dog there is a lovely garden just across the road.`,
    name: "Viviana Williams",
    source: "Google Reviews",
  },
  {
    title: "Beautiful Little Gem",
    text: "Really enjoyed my stay at this beautiful little gem. The owner was lovely. The room was beautiful. The location was perfect. It was very clean and very reasonably priced.",
    name: "Jolene Davies",
    source: "Google Reviews",
  },
  {
    title: "Stay was lovely, clean and comfortable",
    text: `The stay was lovely, very clean and comfortable room,great location close to the harbour and shopping. It was a great breakfast, and Sandy and his wife were fantastic. They made us feel very welcome,
We hope to be back for a longer visit in the future.`,
    name: "Sharon & Dave",
    source: "Google Reviews",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  const handleStart = (clientX: number) => {
    startXRef.current = clientX;
    currentXRef.current = clientX;
    isDraggingRef.current = true;
    setIsAutoScrollPaused(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current) return;

    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
        );
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }

    isDraggingRef.current = false;
    setTimeout(() => setIsAutoScrollPaused(false), 2000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsAutoScrollPaused(true);

    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
      );
    }

    setTimeout(() => setIsAutoScrollPaused(false), 2000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-6 items-center text-center">
        <h1 className="text-lg text-gray-500 font-bold">Testimonials</h1>
        <div
          className="w-full p-8 xl:w-2/3 cursor-grab active:cursor-grabbing select-none text-lg text-gray-800"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <h2 className="text-2xl font-bold my-3">
            {currentTestimonial.title}
          </h2>
          <p className="text-lg transition-opacity duration-500">
            &quot;{currentTestimonial.text}&quot;
          </p>
          <div className="transition-opacity duration-500 mt-6">
            <h5 className="font-bold">{currentTestimonial.name}</h5>
            <p className="text-sm -mt-1">{currentTestimonial.source}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-gray-600" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoScrollPaused(true);
                setTimeout(() => setIsAutoScrollPaused(false), 2000);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
