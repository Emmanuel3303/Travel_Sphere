"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="footer" className="bg-[#111827] text-white pt-16 sm:pt-20 pb-12 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Card */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200">
              STAY IN THE LOOP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get 20% Off Your Next Flight
            </h3>
            <p className="text-sm text-blue-100 font-normal">
              Subscribe to the Travel Sphere newsletter for seasonal discounts, hidden flight gems, and expert travel guides.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <div className="relative flex-1">
              <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/80 shadow-md"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-black text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-2 shrink-0 hover:scale-105 active:scale-95"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 pb-14 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Travelling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences. Journey to the skies made simple.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>IATA Certified & 100% Protected Bookings</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home Flight</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Popular Destinations</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Sky Wings</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Switzerland (Alps)</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Rome (Historical)</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Bhutan (Himalayas)</a></li>
              <li><a href="#destinations" className="hover:text-blue-400 transition-colors">Maldives (Beach)</a></li>
            </ul>
          </div>

          {/* Company / Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#footer" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#footer" className="hover:text-blue-400 transition-colors">Baggage Policy</a></li>
              <li><a href="#footer" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#footer" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TRAVEL SPHERE Airlines & Travel Agency. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-gray-400 cursor-pointer">English (US)</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">USD ($)</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
