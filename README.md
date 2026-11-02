# ✈️ Travel Sphere - Modern Travel & Flight Agency Platform

![Next.js](https://img.shields.io/badge/Next.js-16.4.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-blueviolet?style=for-the-badge)

A pixel-perfect, high-performance travel agency web application crafted from modern Figma specifications. Built using **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Hero Experience**: Immersive sky and passenger jet visual, milestone progress tracker (1-2-3), quick trip-booking call-to-actions, and interactive video playback trigger.
- **Animated Partners Marquee**: Seamless, infinite horizontal brand ticker (`Booking.com`, `Expedia`, `Tripadvisor`, `Trivago`) featuring hover-to-pause and authentic brand color reveal animations.
- **Popular Destinations Carousel**: Interactive destination showcase with high-res imagery, rating indicators, location badges, and smooth slide navigation.
- **Journey To The Skies (How It Works)**: Signature 3-step service layout with the exact Figma corner-anchored quarter-circle cutout (`rounded-bl-[100%]`), golden-hour flight roadway visuals, and custom vector icons.
- **Interactive Booking Modal**: Complete reservation dialog allowing travelers to choose destinations, input personal travel details, and request immediate confirmation.
- **Video Showcase Modal**: Embedded modal player showcasing the brand's travel documentary and promotional film.
- **Social Proof & Stats**: Highlighted customer testimonials, community reviews, and travel agency track record metrics.
- **Responsive by Design**: Handcrafted for smooth viewing across smartphones, tablets, laptops, and ultra-wide displays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Vectors
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)
- **Bundler**: Turbopack

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, icons, vectors)
│   ├── cabin_window.jpg
│   ├── hero_airplane.png
│   ├── hero_sky.jpg
│   ├── journey-highway.jpg
│   ├── service-book.png
│   ├── service-card.png
│   └── service-pin.png
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & custom animations (marquee, float)
│   │   ├── layout.tsx      # Root layout & font configuration
│   │   └── page.tsx        # Homepage composing all sections & modals
│   └── components/
│       ├── AboutUsStats.tsx
│       ├── BookingModal.tsx
│       ├── BottomHighlights.tsx
│       ├── DestinationCarousel.tsx
│       ├── FeaturesSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── HowItWorks.tsx   # "Journey To The Skies" service cards
│       ├── Logo.tsx
│       ├── Navbar.tsx
│       ├── PartnersBar.tsx # Animated partner logos marquee
│       ├── PromoBanner.tsx
│       ├── TestimonialsSection.tsx
│       └── VideoModal.tsx
├── next.config.ts          # Next.js configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- Node.js 20.19.0+ or Node.js 22.13.0+ (LTS recommended)
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Emmanuel3303/Travel_Sphere.git
cd Travel_Sphere
npm install
```

### Running the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile and optimize the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
