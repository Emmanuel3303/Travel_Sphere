"use client";

import React from "react";
import { Globe, ShieldCheck, BadgePercent } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Various Destination",
      description:
        "Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Everything Is Included",
      description:
        "Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Affordable Price",
      description:
        "Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences.",
      icon: <BadgePercent className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Discover The World From Above
        </h2>
        <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
          Travelling Is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 sm:p-8 rounded-3xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 group"
          >
            {/* Blue Icon inside circle */}
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
