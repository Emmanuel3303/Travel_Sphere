"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Star, ArrowUpRight } from "lucide-react";

interface DestinationCarouselProps {
  onSelectDestination?: (name: string) => void;
}

export default function DestinationCarousel({
  onSelectDestination,
}: DestinationCarouselProps) {
  const destinations = [
    {
      id: 1,
      title: "Waterfall Wild Life",
      location: "NRT, Switzerland",
      rating: "4.8",
      reviews: "320",
      price: "$480",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      tag: "Nature & Alps",
    },
    {
      id: 2,
      title: "Historical Place",
      location: "NRT, Rome",
      rating: "4.6",
      reviews: "480",
      price: "$540",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
      tag: "Heritage & Culture",
    },
    {
      id: 3,
      title: "Mountains & Rivers",
      location: "NRT, Bhutan",
      rating: "4.7",
      reviews: "295",
      price: "$620",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      tag: "Mountain Retreat",
    },
    {
      id: 4,
      title: "Tropical Azure Coast",
      location: "NRT, Maldives",
      rating: "4.9",
      reviews: "510",
      price: "$750",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
      tag: "Beach & Luxury",
    },
    {
      id: 5,
      title: "Coastal Escape",
      location: "NRT, Portugal",
      rating: "4.5",
      reviews: "210",
      price: "$510",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Sun & Sea",
    },
    {
      id: 6,
      title: "Sunny Shores",
      location: "NRT, Thailand",
      rating: "4.8",
      reviews: "440",
      price: "$430",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
      tag: "Island Adventure",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update visible items per page on viewport resize
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, destinations.length - itemsPerPage);

  // Compute precise horizontal offset based on card positions
  const updateOffset = useCallback(() => {
    const target = cardRefs.current[currentIndex];
    if (target) {
      setTranslateX(target.offsetLeft);
    }
  }, [currentIndex]);

  useEffect(() => {
    updateOffset();
  }, [currentIndex, itemsPerPage, updateOffset]);

  // Adjust index if out of bounds on viewport change
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto-play sliding animation
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch gesture swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="destinations"
      className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Curated Escapes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Destination
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Unleash Your Wanderlust With Sky Wings
          </p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none shadow-xs"
            aria-label="Previous destination"
            id="dest-prev-btn"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-gray-900 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Next destination"
            id="dest-next-btn"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sliding Destination Carousel Viewport */}
      <div
        className="relative overflow-hidden w-full py-4 -my-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6 sm:gap-8 will-change-transform"
          style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
        >
          {destinations.map((dest, idx) => (
            <div
              key={dest.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => onSelectDestination?.(dest.title)}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] shrink-0 group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-2"
              id={`dest-card-${dest.id}`}
            >
              {/* Card Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {dest.tag}
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-gray-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm group-hover:bg-gray-900 transition-colors duration-300">
                  {dest.price}
                </div>
              </div>

              {/* Card Content Footer */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {dest.title}
                    </h3>

                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{dest.location}</span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full text-xs font-bold text-blue-700 shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                    <Star className="w-3.5 h-3.5 fill-current text-blue-600 group-hover:text-white transition-colors" />
                    <span>★ {dest.rating}</span>
                  </div>
                </div>

                {/* Action Link Row */}
                <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                  <span className="tracking-wide">View Details &amp; Itinerary</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Jump to slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              currentIndex === dotIdx
                ? "w-8 bg-blue-600 shadow-xs"
                : "w-2 bg-gray-200 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
