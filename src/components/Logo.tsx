import React from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant?: "dark" | "light";
  showText?: boolean;
}

export function TravelSphereLogoIcon({
  className = "w-6 h-6 text-current",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="2.5" r="1.8" fill="currentColor" />
      <path
        d="M 8.2 5.2 A 7.5 7.5 0 1 0 15.8 5.2"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  iconClassName = "w-6 h-6 sm:w-7 sm:h-7 shrink-0",
  textClassName = "",
  variant = "dark",
  showText = true,
}: LogoProps) {
  const isLight = variant === "light";
  const defaultTextClass = isLight
    ? "text-white font-extrabold tracking-wider text-lg sm:text-xl"
    : "text-gray-900 group-hover:text-blue-600 transition-colors font-extrabold tracking-wider text-lg sm:text-xl";

  const defaultIconColor = isLight
    ? "text-white"
    : "text-gray-900 group-hover:text-blue-600 transition-colors";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <TravelSphereLogoIcon className={`${iconClassName} ${defaultIconColor}`} />
      {showText && (
        <span className={textClassName || defaultTextClass}>
          TRAVEL SPHERE
        </span>
      )}
    </div>
  );
}
