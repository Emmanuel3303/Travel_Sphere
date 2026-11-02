"use client";

import React, { useState } from "react";
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
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? destinations.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= destinations.length - 3 ? 0 : prev + 1));
  };

  const visibleDestinations = [
    destinations[startIndex % destinations.length],
    destinations[(startIndex + 1) % destinations.length],
    destinations[(startIndex + 2) % destinations.length],
  ];

  return (
    <section id="destinations" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Destination
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium">
            Unleash Your Wanderlust With Sky Wings
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
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

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visibleDestinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination?.(dest.title)}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            id={`dest-card-${dest.id}`}
          >
            {/* Card Image Container */}
            <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gray-100">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-gray-800 shadow-xs">
                {dest.tag}
              </div>

              {/* Price Tag */}
              <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs">
                {dest.price}
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {dest.title}
                  </h3>
                  
                  {/* Location Pin */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{dest.location}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full text-xs font-bold text-blue-700 shrink-0">
                  <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
                  <span>★ {dest.rating}</span>
                </div>
              </div>

              {/* Action Link row */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                <span>View Details & Itinerary</span>
                <div className="w-7 h-7 rounded-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
