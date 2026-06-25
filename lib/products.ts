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
    description: "Our most popular classic design. Built-in high-definition mirror and magnetic closure.",
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
    features: ["BPA-Free", "Magnetic Closure"]
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
    description: "USB rechargeable UV-C LED technology. Kills 99.9% of germs in 3 minutes.",
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
    tagline: "Professional Deep Cleaning",
    description: "45,000Hz ultrasonic waves for thorough plaque removal.",
    images: ["/images/products/ultrasonic-cleaner-white-plug.jpg"],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Tank"]
  },
  {
    id: 5,
    name: "Ultrasonic Cleaner (Black)",
    tagline: "High-Frequency Tech",
    description: "Powerful ultrasonic cleaning with professional black finish.",
    images: ["/images/products/ultrasonic-cleaner-black-plug.jpg"],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["One-Button Control"]
  },
  {
    id: 6,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "Hygienic Tool",
    description: "Dual-purpose tool for easy detachment and proper seating.",
    images: ["/images/products/aligner-remover-chewie.png"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade"]
  }
];
