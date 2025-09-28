"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    name: "Isabel Rowla",
    title: "Customer",
  },
  {
    text: "Tusker Lodge provided an exceptional experience for our family vacation. The pet-friendly amenities made it perfect for our furry companions, and the staff went above and beyond.",
    name: "James Mitchell",
    title: "Family Guest",
  },
  {
    text: "The location in Torquay is absolutely stunning, and the rooms are beautifully appointed. We couldn't have asked for a better place to stay during our Devon getaway.",
    name: "Sarah Thompson",
    title: "Couple's Retreat",
  },
  {
    text: "As pet owners, finding quality accommodation that welcomes our dogs can be challenging. Tusker Lodge exceeded all expectations with their genuine pet-friendly approach.",
    name: "Michael Davies",
    title: "Pet Owner",
  },
  {
    text: "The breakfast was delicious, the rooms were spotless, and the hospitality was outstanding. We'll definitely be returning to Tusker Lodge for our next visit to Devon.",
    name: "Emma Wilson",
    title: "Returning Guest",
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
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
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
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }

    setTimeout(() => setIsAutoScrollPaused(false), 2000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-6 items-center text-center">
        <h1 className="text-3xl text-gray-500 font-bold">Testimonials</h1>
        <div
          className="w-full md:w-lg cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <p className="text-sm transition-opacity duration-500">
            &quot;{currentTestimonial.text}&quot;
          </p>
          <div className="transition-opacity duration-500 mt-6">
            <h5 className="font-bold">{currentTestimonial.name}</h5>
            <p className="text-xs -mt-1">{currentTestimonial.title}</p>
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
