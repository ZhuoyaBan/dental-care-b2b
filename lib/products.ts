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
    description: "Our most popular classic design. Built-in high-definition mirror and magnetic closure. Food-grade materials.",
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
    features: ["BPA-Free", "Integrated Mirror"]
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
    moq: "100 PCS",
    leadTime: "12-15 Days",
    customLogo: true,
    features: ["Premium Matte", "Switchable Vent"]
  },
  {
    id: 3,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination",
    description: "USB rechargeable UV-C LED technology. Kills 99.9% of germs in 3 minutes. (Image 4 Left)",
    images: [
      "/images/products/uv-sterilizer-case-black.jpg",
      "/images/products/uv-sterilizer-case-white.jpg"
    ],
    category: "retainer-case",
    moq: "1000 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED", "Auto-Off Sensor"]
  },
  {
    id: 4,
    name: "Ultrasonic Cleaner (Digital White)",
    tagline: "High-Frequency Professional Deep Cleaning",
    description: "45,000Hz ultrasonic waves for thorough plaque removal. White digital display version.",
    images: ["/images/products/ultrasonic-cleaner-white-plug.jpg"],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Steel Tank"]
  },
  {
    id: 5,
    name: "Ultrasonic Cleaner (Professional Black)",
    tagline: "Deep Cleaning with UV-C Support",
    description: "Powerful ultrasonic cleaning for aligners. Professional black finish with ergonomic design.",
    images: ["/images/products/ultrasonic-cleaner-black-plug.jpg"],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["Professional Grade", "One-Button Operation"]
  },
  {
    id: 6,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "Hygienic Removal & Seating",
    description: "Dual-purpose tool for easy aligner detachment and proper seating. (Image 4 Right)",
    images: ["/images/products/aligner-remover-chewie.png"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade", "Non-Slip"]
  },
  {
    id: 7,
    name: "Vented Aligner Case (V2)",
    tagline: "Breathable Daily Protection",
    description: "Enhanced ventilation holes prevent moisture build-up. Compact design.",
    images: [
      "/images/products/aligner-case-v2-white.jpg",
      "/images/products/aligner-case-v2-black.jpg"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Top Ventilation", "Slim Design"]
  },
  {
    id: 8,
    name: "Rectangular Vented Case (V3)",
    tagline: "Modern Rectangular Form Factor",
    description: "Sleek rectangular profile with ventilation design.",
    images: ["/images/products/aligner-case-v3-white.jpg"],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "10-14 Days",
    customLogo: true,
    features: ["Rectangular Design", "Side Vents"]
  }
];
