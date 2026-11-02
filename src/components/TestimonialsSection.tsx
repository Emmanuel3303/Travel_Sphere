"use client";

import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "I Just Returned The Most Amazing Trip To Europe. All Thanks To This Travel Agency, From The Moment I Contacted Them, They Were Incredibly Helpful.",
      name: "John Carter",
      role: "Accountant",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      featured: false,
    },
    {
      id: 2,
      quote:
        "I Just Returned The Most Amazing Trip To Europe. All Thanks To This Travel Agency, From The Moment I Contacted Them, They Were Incredibly Helpful.",
      name: "John Miller",
      role: "Accountant",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      featured: true, // Center highlighted card in blue as in Figma
    },
    {
      id: 3,
      quote:
        "I Just Returned The Most Amazing Trip To Europe. All Thanks To This Travel Agency, From The Moment I Contacted Them, They Were Incredibly Helpful.",
      name: "Johnathan Smith",
      role: "Accountant",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      featured: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight">
          Loved By Thousand Travellers
        </h2>
      </div>

      {/* 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
              item.featured
                ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25 border border-blue-500 md:-translate-y-2 hover:shadow-2xl"
                : "bg-[#F3F4F6] text-gray-800 border border-gray-100 hover:shadow-lg"
            }`}
          >
            <div>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 fill-current ${
                      item.featured ? "text-white" : "text-blue-600"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className={`text-sm sm:text-base leading-relaxed mb-8 ${
                  item.featured ? "text-blue-50 font-normal" : "text-gray-600 font-normal"
                }`}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-current/10">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-white/50"
              />
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold ${
                    item.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`text-xs ${
                    item.featured ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
