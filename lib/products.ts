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
    name: "Classic Aligner Case (V1)",
    tagline: "Slim & Durable with Mirror",
    description: "Our most popular classic design with a high-definition mirror and magnetic closure. Premium medical-grade materials.",
    images: [
      "/images/products/aligner-case-v1-blue.webp",
      "/images/products/aligner-case-v1-black.webp",
      "/images/products/aligner-case-v1-pink.webp",
      "/images/products/aligner-case-v1-white.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Integrated Mirror", "Magnetic Closure"]
  },
  {
    id: 2,
    name: "Pro Round Switchable Case",
    tagline: "Advanced Ventilation Port",
    description: "High-end circular design featuring an adjustable ventilation port for optimal airflow control.",
    images: [
      "/images/products/aligner-case-pro-black.webp",
      "/images/products/aligner-case-pro-white.webp",
      "/images/products/aligner-case-pro-pink.webp",
      "/images/products/aligner-case-pro-blue.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "12-15 Days",
    customLogo: true,
    features: ["Switchable Vent", "Premium Matte Finish"]
  },
  {
    id: 3,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination",
    description: "Compact rechargeable case using hospital-grade UV-C LED to sanitize your aligners in 3 minutes.",
    images: [
      "/images/products/uv-sterilizer-case-black.webp",
      "/images/products/uv-sterilizer-case-white.webp"
    ],
    category: "retainer-case",
    moq: "1000 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED Tech", "Type-C Charging"]
  },
  {
    id: 4,
    name: "Professional Ultrasonic Cleaner",
    tagline: "Deep Cleaning Technology (Plug-in)",
    description: "45,000Hz high-frequency waves for clinical-grade cleaning. Available in multiple professional colors.",
    images: [
      "/images/products/ultrasonic-cleaner-white-plug.webp",
      "/images/products/ultrasonic-cleaner-black-plug.webp",
      "/images/products/ultrasonic-cleaner-blue-plug.webp"
    ],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Steel Tank"]
  },
  {
    id: 5,
    name: "Portable Ultrasonic Cleaner (Black)",
    tagline: "Battery-Powered Freedom",
    description: "Take professional hygiene anywhere. Powerful battery-operated ultrasonic cleaner in a sleek black finish.",
    images: ["/images/products/ultrasonic-cleaner-black-battery.webp"],
    category: "cleaning-box",
    moq: "100 PCS",
    leadTime: "12-18 Days",
    customLogo: true,
    features: ["AA Battery Operated", "Travel Ready"]
  },
  {
    id: 6,
    name: "Portable Ultrasonic Cleaner (White)",
    tagline: "On-the-Go Hygiene",
    description: "Compact battery-powered cleaner in clinical white. No power cord needed for perfect aligner care anywhere.",
    images: ["/images/products/ultrasonic-cleaner-white-battery.webp"],
    category: "cleaning-box",
    moq: "100 PCS",
    leadTime: "12-18 Days",
    customLogo: true,
    features: ["Silent Motor", "Compact Design"]
  },
  {
    id: 7,
    name: "Vented Aligner Case (V2)",
    tagline: "Breathable Daily Case",
    description: "Square ventilated design in crisp white. Prevents odor and moisture buildup during daily use.",
    images: ["/images/products/aligner-case-v2-white.webp"],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Top Ventilation", "BPA-Free"]
  },
  {
    id: 8,
    name: "Rectangular Vented Case (V3)",
    tagline: "Modern Rectangular Profile",
    description: "Space-saving rectangular form with integrated ventilation. Ideal for modern dental kits.",
    images: ["/images/products/aligner-case-v3-white.webp"],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "10-14 Days",
    customLogo: true,
    features: ["Slim Profile", "Side Vents"]
  },
  {
    id: 9,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "Essential Maintenance Tool",
    description: "Ensure proper seating and hygienic removal of your aligners with this dual-purpose professional tool.",
    images: ["/images/products/aligner-remover-chewie.webp"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade Silicone", "Ergonomic Grip"]
  }
];
