"use client";

import React, { useState } from "react";
import { X, Plane, Calendar, Users, CheckCircle, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialDestination = "Switzerland",
}: BookingModalProps) {
  const [destination, setDestination] = useState(initialDestination);
  const [origin, setOrigin] = useState("New York (JFK)");
  const [travelDate, setTravelDate] = useState("2026-10-28");
  const [cabin, setCabin] = useState("Economy Class");
  const [guests, setGuests] = useState("2 Passengers");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close booking modal"
          id="close-booking-modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                  Book Your Sky Flight
                </h3>
                <p className="text-xs text-gray-500">
                  Select your flight details for immediate confirmation
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Origin Airport
                </label>
                <input
                  type="text"
                  required
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-semibold text-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Destination
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-semibold text-gray-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Cabin Class
                  </label>
                  <select
                    value={cabin}
                    onChange={(e) => setCabin(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none bg-white"
                  >
                    <option value="Economy Class">Economy Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business Class">Business Class</option>
                    <option value="First Class">First Class Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-semibold text-gray-900 focus:outline-none bg-white"
                >
                  <option value="1 Passenger">1 Passenger</option>
                  <option value="2 Passengers">2 Passengers</option>
                  <option value="3 Passengers">3 Passengers</option>
                  <option value="4+ Passengers (Group)">4+ Passengers (Group)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  id="confirm-booking-btn"
                >
                  <span>Confirm Flight Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-gray-900">
              Reservation Confirmed!
            </h4>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Your flight to <strong className="text-gray-800">{destination}</strong> from {origin} has been reserved. Check your email for booking confirmation and boarding pass.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="bg-gray-900 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
