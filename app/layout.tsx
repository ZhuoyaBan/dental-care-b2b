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
    title: "Uvcare | B2B Wholesale Aligner Care Accessories Manufacturer",
    description:
      "Trusted B2B supplier for invisible aligner care accessories. UV sterilizers, ultrasonic cleaners, retainer cases. Low MOQ, OEM/ODM custom branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Uvcare B2B Supply",
    description: "Professional B2B manufacturer of invisible aligner care accessories. OEM/ODM solutions for dental clinics and distributors worldwide.",
    url: "https://dentalcarepack.com",
    logo: "https://dentalcarepack.com/logo.png",
    email: "ban@grouprsh.com",
    telephone: "+86 188 2288 5445",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A309, Fanghua Industrial Area, xin'an Street",
      addressLocality: "Bao'an District, Shenzhen",
      addressCountry: "CN",
    },
    sameAs: [
      "https://wa.me/8618822885445",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
