import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalcarepack.com"),
  title: "Uvcare | Custom Aligner Care Solutions Manufacturer for Dental Labs, Clinics & Brands",
  description: "Uvcare is a B2B manufacturer of OEM retainer cases, UV-C sterilizers, ultrasonic cleaners, orthodontic accessories, and private-label dental products. ISO 9001, CE, FDA compliant. Low MOQ, worldwide shipping.",
  keywords: [
    "aligner case manufacturer",
    "retainer case manufacturer China",
    "UV-C sterilizer case manufacturer",
    "OEM dental products",
    "private label aligner accessories",
    "orthodontic accessories supplier",
    "dental lab supplies manufacturer",
    "custom dental product development",
  ],
  alternates: {
    canonical: "https://www.dentalcarepack.com/",
  },
  openGraph: {
    title: "Uvcare | Custom Aligner Care Solutions Manufacturer",
    description:
      "B2B manufacturer of OEM retainer cases, UV-C sterilizers, ultrasonic cleaners, and private-label dental products. For dental labs, clinics, and brands worldwide.",
    type: "website",
    url: "https://www.dentalcarepack.com/",
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
    name: "Uvcare",
    description: "Uvcare, operating at DentalCarePack.com, is a China-based B2B manufacturer of invisible aligner care accessories. OEM/ODM solutions for dental labs, orthodontic clinics, clear aligner brands, and distributors worldwide.",
    url: "https://www.dentalcarepack.com",
    logo: "https://www.dentalcarepack.com/logo.png",
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
