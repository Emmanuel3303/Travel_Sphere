"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
          Journey To The Skies Made Simple!
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-500 font-normal leading-relaxed max-w-[580px] mx-auto">
          Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-[1060px] mx-auto">
        {/* Card 1: Find Your Destination */}
        <div className="bg-[#F4F4F4] hover:bg-[#EDEDED] rounded-[16px] p-8 sm:p-9 min-h-[248px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
          <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-xs">
            <Image
              src="/service-pin.png"
              alt=""
              width={22}
              height={22}
              className="object-contain"
            />
          </div>

          <h3 className="mt-auto text-[22px] font-semibold text-gray-900 leading-[1.35] tracking-tight">
            Find Your <br />
            Destination
          </h3>
        </div>

        {/* Card 2 (Center Featured): Book A Ticket */}
        <div className="relative bg-[#2986FE] text-white rounded-[20px] p-8 sm:p-10 min-h-[388px] flex flex-col justify-between overflow-hidden shadow-[0_22px_48px_rgba(41,134,254,0.22)] z-10 transition-all duration-300">
          {/* Top-Right Quarter-Circle Cutout Image with White Border */}
          <div className="absolute top-0 right-0 w-[190px] h-[190px] rounded-bl-[100%] bg-white pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-[184px] h-[184px] rounded-bl-[100%] overflow-hidden">
              <Image
                src="/journey-highway.jpg"
                alt="Golden hour flight highway view"
                fill
                sizes="(max-width: 768px) 190px, 190px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="relative z-10">
            {/* Top Icon inside circular white outline */}
            <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-white/90 flex items-center justify-center">
              <Image
                src="/service-book.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <h3 className="text-[22px] font-semibold text-white mt-7 leading-[1.35] tracking-tight">
              Book <br />
              A Ticket
            </h3>

            <p className="text-[13.5px] text-white/90 font-normal leading-relaxed mt-5 max-w-[240px]">
              Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures, And Gain Unique Experiences.
            </p>
          </div>

          {/* Bottom Action Button */}
          <button
            onClick={onOpenBooking}
            className="relative z-10 mt-auto pt-8 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-wider text-white hover:text-white/80 group focus:outline-none transition-colors"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Card 3: Play & Journey */}
        <div className="bg-[#F4F4F4] hover:bg-[#EDEDED] rounded-[16px] p-8 sm:p-9 min-h-[248px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
          <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-xs">
            <Image
              src="/service-card.png"
              alt=""
              width={22}
              height={22}
              className="object-contain"
            />
          </div>

          <h3 className="mt-auto text-[22px] font-semibold text-gray-900 leading-[1.35] tracking-tight">
            Play &amp; <br />
            Journey
          </h3>
        </div>
      </div>
    </section>
  );
}
