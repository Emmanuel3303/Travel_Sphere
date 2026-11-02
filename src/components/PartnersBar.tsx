"use client";

import React from "react";

export default function PartnersBar() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://linkedin.com",
    },
  ];

  const renderLogosGroup = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14">
      {/* Booking.com */}
      <div className="group/logo flex items-center gap-2 font-bold text-[#8a8a8a] hover:text-[#003580] transition-all duration-300 cursor-pointer select-none hover:scale-105">
        <span className="w-6 h-5 sm:w-7 sm:h-6 rounded bg-[#8a8a8a] group-hover/logo:bg-[#003580] text-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-normal transition-colors">
          B<span className="text-[10px]">.</span>
        </span>
        <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">Booking.com</span>
      </div>

      {/* Expedia */}
      <div className="group/logo flex items-center gap-2 font-bold text-[#8a8a8a] hover:text-[#00355f] transition-all duration-300 cursor-pointer select-none hover:scale-105">
        <div className="w-6 h-6 rounded-full bg-[#8a8a8a] group-hover/logo:bg-[#FFCC00] flex items-center justify-center transition-colors">
          <svg
            className="w-3.5 h-3.5 fill-white group-hover/logo:fill-[#00355f] transform -rotate-45 transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
        <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight">Expedia</span>
      </div>

      {/* TripAdvisor */}
      <div className="group/logo flex items-center gap-2 font-bold text-[#8a8a8a] hover:text-[#00AF87] transition-all duration-300 cursor-pointer select-none hover:scale-105">
        <svg
          className="w-7 h-4 sm:w-8 sm:h-5 stroke-[#8a8a8a] group-hover/logo:stroke-[#00AF87] fill-none transition-colors"
          viewBox="0 0 48 30"
        >
          <circle cx="12" cy="17" r="8.5" strokeWidth="2.6" />
          <circle cx="36" cy="17" r="8.5" strokeWidth="2.6" />
          <circle
            cx="12"
            cy="17"
            r="3.2"
            className="fill-[#8a8a8a] group-hover/logo:fill-[#00AF87] stroke-none transition-colors"
          />
          <circle
            cx="36"
            cy="17"
            r="3.2"
            className="fill-[#8a8a8a] group-hover/logo:fill-[#00AF87] stroke-none transition-colors"
          />
          <path d="M4 10c5-4 10-5 20-5s15 1 20 5" strokeWidth="2.6" strokeLinecap="round" />
          <path d="m24 6 3-4 3 4" className="fill-[#8a8a8a] group-hover/logo:fill-[#00AF87] stroke-none transition-colors" />
        </svg>
        <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight lowercase">tripadvisor</span>
      </div>

      {/* Trivago */}
      <div className="group/logo flex items-center gap-0.5 font-black text-lg sm:text-xl lg:text-2xl tracking-tighter text-[#8a8a8a] hover:text-inherit transition-all duration-300 cursor-pointer select-none hover:scale-105">
        <span className="group-hover/logo:text-[#E74C3C] transition-colors">tri</span>
        <span className="group-hover/logo:text-[#007FAF] transition-colors">va</span>
        <span className="group-hover/logo:text-[#E67E22] transition-colors">go</span>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left: Follow & Social Icons */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Follow:
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow us on ${item.name}`}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-110 active:scale-95"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Animated Marquee Partner Logos with Gradient Fade Edges */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-2xl lg:max-w-3xl overflow-hidden relative mask-gradient-x py-1">
          <div className="animate-marquee flex items-center">
            {renderLogosGroup("group-1")}
            {renderLogosGroup("group-2")}
          </div>
        </div>
      </div>
    </section>
  );
}
