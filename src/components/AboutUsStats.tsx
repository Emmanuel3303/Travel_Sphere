"use client";

import React from "react";

export default function AboutUsStats() {
  const stats = [
    {
      value: "10+",
      label: "Year Experience",
      detail: "Decade of aviation excellence",
    },
    {
      value: "12K",
      label: "Happy Clients",
      detail: "Across 45+ destinations globally",
    },
    {
      value: "4.8",
      label: "Overall Rating",
      detail: "Verified traveller reviews",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header & Columns */}
      <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
        
        {/* Pill Badge */}
        <div>
          <span className="inline-block bg-[#E5E7EB] text-gray-800 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            ABOUT US
          </span>
        </div>

        {/* Main Section Statement */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug max-w-4xl">
          Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures, And Gain Unique Experiences.
        </h2>

        {/* Two Columns with Blue Left Accent Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-2">
          
          {/* Column 1 */}
          <div className="border-l-2 border-blue-600 pl-5 sm:pl-6">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Embark On A Journey Of Discovery As You Explore Breathtaking Landscapes. Immerse Yourself In Diverse Cultures And Create Unforgettable Memories.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-l-2 border-blue-600 pl-5 sm:pl-6">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Travelling Is More Than Just Visiting Places. It&apos;s About Embracing The Spirit Of Adventure And Finding Inspiration In The Unfamiliar.
            </p>
          </div>

        </div>
      </div>

      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#F3F4F6] rounded-[28px] sm:rounded-[36px] p-8 sm:p-10 text-center border border-gray-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-600 tracking-tight mb-2">
              {stat.value}
            </div>
            <div className="text-base sm:text-lg font-bold text-gray-900">
              {stat.label}
            </div>
            <div className="text-xs text-gray-400 font-medium mt-1">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
