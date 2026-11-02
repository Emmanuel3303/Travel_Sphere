"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";

interface PromoBannerProps {
  onOpenBooking: () => void;
}

export default function PromoBanner({ onOpenBooking }: PromoBannerProps) {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Vertical Aerial Beach Coast Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200/80 shadow-lg">
            
            {/* Aerial Coast Photo */}
            <div className="relative h-96 sm:h-[440px] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Aerial turquoise ocean waves crashing on golden sand"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                <Tag className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-bold text-gray-900 tracking-wide">
                  SPECIAL OFFER
                </span>
              </div>
            </div>

            {/* Bottom 20% OFF bar */}
            <div className="p-5 sm:p-6 bg-white flex items-center justify-between border-t border-gray-100">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-blue-600 tracking-tight">
                  20% OFF
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-gray-400">Valid Promo</p>
                <p className="text-xs font-bold text-gray-700">Till 28 September 2026</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Promotional Copy & Sky Button */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] uppercase">
              UNLEASH <br />
              WANDERLUST WITH <br />
              <span className="text-blue-600">SKY WINGS</span>
            </h2>

            <div className="space-y-3 pt-2 text-gray-600 max-w-lg text-base sm:text-lg leading-relaxed">
              <p>
                Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures.
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Memories.
              </p>
            </div>
          </div>

          {/* Book A Flight Now Button with Sky Clouds background */}
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="group relative w-full sm:w-auto min-w-[340px] sm:min-w-[400px] h-16 rounded-full overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-200"
              id="promo-book-btn"
            >
              {/* Sky background image inside button */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80"
                  alt="Sunny blue sky clouds backdrop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors" />
              </div>

              {/* Button text & arrow */}
              <div className="relative z-10 flex items-center justify-center gap-3 h-full px-8 text-white font-bold text-base sm:text-lg tracking-wide drop-shadow-sm">
                <span>Book A Flight Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
