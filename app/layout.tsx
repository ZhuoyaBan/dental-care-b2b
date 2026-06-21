import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uvcare | Professional B2B Supplier for Aligner Care Accessories",
  description: "Uvcare is a premier wholesale manufacturer of premium invisible aligner accessories, including UV sterilizers, ultrasonic cleaners, and custom cases. Support OEM/ODM with low MOQ.",
  keywords: [
    "aligner case",
    "UV sterilizer aligner case",
    "ultrasonic cleaner",
    "chewies",
    "effervescent tablets",
    "B2B dental supply",
    "OEM aligner accessories",
  ],
  openGraph: {
    title: "AlignerPro Supply — B2B Invisible Aligner Care",
    description:
      "Trusted B2B supplier for invisible aligner care accessories. Low MOQ, custom branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
