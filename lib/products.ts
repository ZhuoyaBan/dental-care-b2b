"use client";

export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  category: "retainer-case" | "cleaning-box" | "gift-box" | "dental-accessories";
  moq: string;
  leadTime: string;
  customLogo: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Aligner Case",
    tagline: "Slim & Durable with Mirror",
    description: "Our most popular classic design. Built-in high-definition mirror and magnetic closure. Available in multiple colors.",
    images: [
      "/images/products/aligner-case-v1-blue.jpg",
      "/images/products/aligner-case-v1-black.jpg",
      "/images/products/aligner-case-v1-pink.jpg",
      "/images/products/aligner-case-v1-white.jpg"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["BPA-Free", "Magnetic Closure", "Integrated Mirror"]
  },
  {
    id: 2,
    name: "Pro Round Switchable Case",
    tagline: "Advanced Ventilation System",
    description: "Premium circular design with adjustable ventilation port. Sleek matte finish.",
    images: [
      "/images/products/aligner-case-pro-black.png",
      "/images/products/aligner-case-pro-white.png",
      "/images/products/aligner-case-pro-pink.png",
      "/images/products/aligner-case-pro-blue.png"
    ],
    category: "retainer-case",
    moq: "500 PCS",
    leadTime: "12-15 Days",
    customLogo: true,
    features: ["Switchable Vent", "Premium Matte", "Anti-Slip Base"]
  },
  {
    id: 3,
    name: "Vented Aligner Case (V2)",
    tagline: "Breathable Daily Protection",
    description: "Enhanced top ventilation holes prevent moisture build-up. Compact square design.",
    images: [
      "/images/products/aligner-case-v2-white.jpg",
      "/images/products/aligner-case-v2-black.jpg"
    ],
    category: "retainer-case",
    moq: "200 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Top Ventilation", "Slim Design", "Dishwasher Safe"]
  },
  {
    id: 4,
    name: "Rectangular Vented Case (V3)",
    tagline: "Modern Rectangular Form Factor",
    description: "Sleek rectangular profile with ventilation design. Ideal for modern clinics.",
    images: [
      "/images/products/aligner-case-v3-white.jpg"
    ],
    category: "retainer-case",
    moq: "300 PCS",
    leadTime: "10-14 Days",
    customLogo: true,
    features: ["Rectangular Design", "Side Ventilation"]
  },
  {
    id: 5,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination",
    description: "USB rechargeable UV-C LED technology. Kills germs in 3 minutes. Fits perfectly into your aligner routine.",
    images: [
      "/images/products/uv-sterilizer-case-white.jpg",
      "/images/products/uv-sterilizer-case-black.jpg"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED", "Type-C Charging", "Auto-Off Sensor"]
  },
  {
    id: 6,
    name: "Ultrasonic Cleaner (Plug-in)",
    tagline: "Professional-Grade Deep Cleaning",
    description: "45,000Hz ultrasonic waves for thorough plaque removal.",
    images: [
      "/images/products/ultrasonic-cleaner-white-plug.jpg",
      "/images/products/ultrasonic-cleaner-black-plug.jpg",
      "/images/products/ultrasonic-cleaner-blue-plug.jpg"
    ],
    category: "cleaning-box",
    moq: "50 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Tank"]
  },
  {
    id: 7,
    name: "Portable Ultrasonic Cleaner",
    tagline: "Battery-Powered Portability",
    description: "Compact battery-operated ultrasonic cleaner for on-the-go aligner hygiene.",
    images: [
      "/images/products/ultrasonic-cleaner-white-battery.png",
      "/images/products/ultrasonic-cleaner-black-battery.png"
    ],
    category: "cleaning-box",
    moq: "100 PCS",
    leadTime: "12-18 Days",
    customLogo: true,
    features: ["Battery Operated", "Travel Friendly"]
  },
  {
    id: 8,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "Hygienic Removal & Seating",
    description: "Dual-purpose tool for easy aligner detachment and proper seating.",
    images: [
      "/images/products/aligner-remover-chewie.png"
    ],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade Silicone", "Non-Slip Grip"]
  }
];
