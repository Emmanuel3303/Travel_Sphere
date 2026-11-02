"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BottomHighlightsProps {
  onOpenBooking: () => void;
}

export default function BottomHighlights({
  onOpenBooking,
}: BottomHighlightsProps) {
  const highlights = [
    {
      title: "Explore The Skies With Confidence",
      subtitle: "Certified pilots, modern aircraft & 99.8% on-time flight rating worldwide.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Discover The World One Step At A Time",
      subtitle: "Bespoke itineraries, private guides, and handpicked local accommodations.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            onClick={onOpenBooking}
            className="flex items-center gap-5 sm:gap-6 p-4 sm:p-5 rounded-3xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer group"
          >
            {/* Circular Photo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1 line-clamp-2">
                {item.subtitle}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 mt-2">
                <span>Explore Tour</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
