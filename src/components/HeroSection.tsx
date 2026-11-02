"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  Plane,
  MapPin,
  Calendar,
  Users,
  Search,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenVideo?: () => void;
}

export default function HeroSection({
  onOpenBooking,
  onOpenVideo,
}: HeroSectionProps) {
  const [fromCity, setFromCity] = useState("New York (JFK)");
  const [toCity, setToCity] = useState("Zurich (ZRH)");
  const [date, setDate] = useState("2026-10-24");
  const [passengers, setPassengers] = useState("2 Adults");

  return (
    <section id="hero" className="pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Rounded Hero Card - Exact Figma Aspect Ratio & Styling */}
      <div className="relative rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden bg-[#e6f1fc] border border-blue-100 shadow-xl shadow-blue-900/5 min-h-[580px] sm:min-h-[620px] lg:h-[692px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        
        {/* Full-bleed sky backdrop image with clouds */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero_sky.jpg"
            alt="Sunny blue sky with soft white cumulus clouds"
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d8eafc]/75 via-[#e4f0fc]/35 to-transparent" />
        </div>

        {/* User's Exact Plane Image - Scaled & Positioned to Exact Figma Proportion (79.5% width, 46.2% left, 4.3% top) */}
        <div className="absolute left-[18%] top-[12%] sm:left-[30%] sm:top-[7%] lg:left-[46.2%] lg:top-[4.3%] w-[95%] sm:w-[88%] lg:w-[79.5%] pointer-events-none z-10">
          <img
            src="/hero_airplane.png"
            alt="Passenger aircraft soaring through sunny blue sky and clouds"
            className="w-full h-auto object-contain drop-shadow-2xl animate-float block"
          />
        </div>

        {/* Hero Left Content Grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 flex items-start gap-4 sm:gap-6">
            
            {/* Vertical 1-2-3 Milestone Progress Tracker as in Figma */}
            <div className="hidden sm:flex flex-col items-center pt-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-900 shadow-sm">
                1
              </div>
              <div className="w-[1.5px] h-12 bg-white/70 my-1" />
              <div className="w-8 h-8 rounded-full bg-white/40 border border-white/60 flex items-center justify-center text-xs font-bold text-white shadow-xs backdrop-blur-xs">
                2
              </div>
              <div className="w-[1.5px] h-12 bg-white/70 my-1" />
              <div className="w-8 h-8 rounded-full bg-white/40 border border-white/60 flex items-center justify-center text-xs font-bold text-white shadow-xs backdrop-blur-xs">
                3
              </div>
            </div>

            {/* Typography Content */}
            <div className="space-y-4 sm:space-y-6 max-w-lg">
              {/* Tagline Badge */}
              <div className="inline-block">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-900">
                  ELEVATE YOUR TRAVEL JOURNEY
                </span>
              </div>

              {/* Exact 3-line Headline from Figma */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-gray-900 tracking-tight leading-[1.06]">
                Experience <br />
                The Magic Of <br />
                Flight!
              </h1>

              {/* Action Buttons from Figma */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
                  id="hero-book-btn"
                >
                  <span>Book A Trip Now</span>
                </button>

                <button
                  onClick={onOpenVideo}
                  className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 text-blue-600 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
                  aria-label="Watch tour video"
                  id="hero-play-btn"
                >
                  <Play className="w-4 h-4 fill-blue-600 text-blue-600 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Notch Card - Exact from Figma */}
        <div className="relative z-20 mt-8 sm:mt-12 flex justify-end">
          <div className="bg-white/95 backdrop-blur-md rounded-[28px] p-4 sm:p-5 border border-white shadow-xl shadow-blue-900/10 max-w-sm sm:max-w-md">
            
            {/* Top row: Know More link */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <span className="text-xs sm:text-sm font-bold text-gray-900 hover:text-blue-600 cursor-pointer flex items-center gap-1.5 transition-colors">
                Know More
                <ArrowRight className="w-4 h-4 text-gray-900" />
              </span>
            </div>

            {/* Bottom row: Circular place thumbnails + copy */}
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=120&q=80"
                  alt="Beach Resort"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=120&q=80"
                  alt="Tropical Island"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80"
                  alt="Hot Air Balloons"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">
                  Awesome Places
                </span>
                <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  Discover The World One Adventure At A Time!
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Quick Booking Search Bar widget attached under hero */}
      <div className="relative -mt-6 sm:-mt-8 z-30 max-w-5xl mx-auto px-2">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Departure */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4 transform -rotate-45" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase text-gray-400">Departure</p>
                <input
                  type="text"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-gray-800 bg-transparent focus:outline-none truncate"
                  placeholder="From where?"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase text-gray-400">Destination</p>
                <input
                  type="text"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-gray-800 bg-transparent focus:outline-none truncate"
                  placeholder="Where to?"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase text-gray-400">Travel Date</p>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-gray-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* Guests & Search Button */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 flex-1">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase text-gray-400">Guests</p>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="text-xs font-semibold text-gray-800 bg-transparent focus:outline-none"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="Family (3+)">Family (3+)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="h-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                title="Search Flights"
                id="search-flights-btn"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
