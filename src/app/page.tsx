"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersBar from "@/components/PartnersBar";
import DestinationCarousel from "@/components/DestinationCarousel";
import HowItWorks from "@/components/HowItWorks";
import PromoBanner from "@/components/PromoBanner";
import AboutUsStats from "@/components/AboutUsStats";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BottomHighlights from "@/components/BottomHighlights";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("Switzerland");

  const handleOpenBooking = (destinationName?: string) => {
    if (destinationName) {
      setSelectedDestination(destinationName);
    }
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero Section with Aircraft & Quick Search */}
      <HeroSection
        onOpenBooking={() => handleOpenBooking()}
        onOpenVideo={() => setVideoModalOpen(true)}
      />

      {/* 3. Social Follow & OTA Partners (Booking.com, Expedia, TripAdvisor, Trivago) */}
      <PartnersBar />

      {/* 4. Popular Destination Carousel */}
      <DestinationCarousel
        onSelectDestination={(dest) => handleOpenBooking(dest)}
      />

      {/* 5. Journey To The Skies Made Simple (3 Step Cards with Center Highlight) */}
      <HowItWorks onOpenBooking={() => handleOpenBooking()} />

      {/* 6. Promotional Banner (20% OFF Aerial Coast + Sky Button) */}
      <PromoBanner onOpenBooking={() => handleOpenBooking()} />

      {/* 7. About Us Section & 3 Big Stat Cards */}
      <AboutUsStats />

      {/* 8. Discover The World From Above (3 Pillars with Blue Icons) */}
      <FeaturesSection />

      {/* 9. Loved By Thousand Travellers (3 Cards with Center Highlight) */}
      <TestimonialsSection />

      {/* 10. Bottom Highlights (Circular Photos: Explore Skies & Discover World) */}
      <BottomHighlights onOpenBooking={() => handleOpenBooking()} />

      {/* 11. Comprehensive Footer with Newsletter */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDestination={selectedDestination}
      />

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </main>
  );
}
