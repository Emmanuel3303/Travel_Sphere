"use client";

import React from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gray-900 rounded-3xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative border border-gray-800 animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-black shadow-inner">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&rel=0"
            title="Travel Sphere - The Magic of Flight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="pt-4 flex items-center justify-between text-white">
          <div>
            <h4 className="font-bold text-base sm:text-lg">
              Experience The Magic Of Flight — Aerial Showcase
            </h4>
            <p className="text-xs text-gray-400">
              4K Cinematic Flight Experience across Alps & Islands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
