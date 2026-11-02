import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          blueHover: "#1D4ED8",
          blueDark: "#1E40AF",
          blueLight: "#EFF6FF",
          sky: "#38BDF8",
          dark: "#111827",
          muted: "#4B5563",
          subtle: "#6B7280",
          surface: "#F8F9FA",
          cardLight: "#F3F4F6",
          cardBorder: "#E5E7EB",
          star: "#2563EB",
        },
      },
      borderRadius: {
        "card-sm": "16px",
        "card-md": "20px",
        "card-lg": "24px",
        "card-xl": "32px",
        "card-2xl": "40px",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        cardHover: "0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.06)",
        blueGlow: "0 10px 25px -5px rgba(37, 99, 235, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
