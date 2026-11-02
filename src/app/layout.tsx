import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "TRAVEL SPHERE — Experience The Magic Of Flight",
  description:
    "Travelling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences. Journey to the skies made simple.",
  keywords: [
    "travel agency",
    "flights",
    "destinations",
    "travel packages",
    "Switzerland",
    "Rome",
    "Bhutan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8F9FA] text-[#111827] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
