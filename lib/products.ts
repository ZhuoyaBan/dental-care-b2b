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
    id: 10,
    name: "Premium Round Retainer Case with Mirror",
    tagline: "Elegant Circular Design with Built-in Mirror",
    description: "Sleek round profile with a high-quality mirror. Available in a variety of vibrant colors to suit any clinic's branding.",
    images: [
      "/images/products/Round Retainer case black with mirrow.webp",
      "/images/products/Round Retainer case white with mirrow.webp",
      "/images/products/Round Retainer case pink with mirrow.webp",
      "/images/products/Round Retainer case green with mirrow.webp",
      "/images/products/Round Retainer case yellow with mirrow.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Round Mirror", "Slim Profile", "Multi-Color"]
  },
  {
    id: 11,
    name: "Premium Round Retainer Case with Silicon",
    tagline: "Double Silicon Protection & Support",
    description: "Enhanced protection with a double silicon interior to keep retainers secure, quiet, and scratch-free.",
    images: [
      "/images/products/Round Retainer case black double silicon.webp",
      "/images/products/Round Retainer case white double silicon.webp",
      "/images/products/Round Retainer case pink double silicon.webp",
      "/images/products/Round Retainer case green double silicon.webp",
      "/images/products/Round Retainer case yellow double silicon.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "10-14 Days",
    customLogo: true,
    features: ["Double Silicon", "Shock Absorption", "Anti-Slip"]
  },
  {
    id: 12,
    name: "Soft Silicone Retainer Case",
    tagline: "Flexible, Lightweight & Washable",
    description: "Constructed from high-quality food-grade silicone. Flexible, durable, and extremely easy to clean.",
    images: [
      "/images/products/silicon retainer case blue.webp",
      "/images/products/silicon retainer case pink.webp",
      "/images/products/silicon retainer case green.webp",
      "/images/products/silicon retainer case purple.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Soft Touch", "Waterproof", "BPA-Free"]
  },
  {
    id: 3,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination in 3 Mins",
    description: "Compact rechargeable case using hospital-grade UV-C LED to sanitize your aligners quickly and safely.",
    images: [
      "/images/products/uv-sterilizer-case-black.webp",
      "/images/products/uv-sterilizer-case-white.webp"
    ],
    category: "retainer-case",
    moq: "1000 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED Tech", "Type-C Charging", "Auto-Off"]
  },
  {
    id: 4,
    name: "Professional Ultrasonic Cleaner (Plug-in)",
    tagline: "45,000Hz Clinical-Grade Deep Cleaning",
    description: "High-frequency sonic waves remove plaque and debris thoroughly. Professional plug-in version for maximum power.",
    images: [
      "/images/products/ultrasonic-cleaner-white-plug.webp",
      "/images/products/ultrasonic-cleaner-black-plug.webp",
      "/images/products/ultrasonic-cleaner-blue-plug.webp"
    ],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Steel", "Digital UI"]
  },
  {
    id: 13,
    name: "Classic Denture Cleaning Box",
    tagline: "Simple & Effective Soaking Solution",
    description: "Traditional soaking box with filter tray for daily aligner and denture hygiene. Simple, durable design.",
    images: [
      "/images/products/Dental cleaning box blue v1.webp",
      "/images/products/Dental cleaning box purple v1.webp",
      "/images/products/Dental cleaning box white v1.webp"
    ],
    category: "cleaning-box",
    moq: "200 PCS",
    leadTime: "5-10 Days",
    customLogo: true,
    features: ["BPA-Free PP", "Internal Filter", "Leak-Proof"]
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
    features: ["Battery Operated", "Travel Ready"]
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
    tagline: "Hygienic Tool for Removal & Seating",
    description: "Ensure proper seating and hygienic removal of your aligners with this dual-purpose professional tool.",
    images: ["/images/products/aligner-remover-chewie.webp"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade Silicone", "Non-Slip Grip"]
  }
];
