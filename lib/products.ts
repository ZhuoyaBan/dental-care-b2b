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
    tagline: "Elegant Circular Design",
    description: "Sleek round profile with a high-quality mirror. Available in a variety of colors.",
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
    features: ["Round Mirror", "Slim Profile"]
  },
  {
    id: 11,
    name: "Premium Round Retainer Case with Silicon",
    tagline: "Double Silicon Protection",
    description: "Enhanced protection with a double silicon interior to keep retainers secure.",
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
    features: ["Double Silicon", "Shock Absorption"]
  },
  {
    id: 12,
    name: "Classic Silicon Retainer Case",
    tagline: "Soft & Flexible Protection",
    description: "Standard medical-grade silicon case for comfortable and safe retainer storage.",
    images: [
      "/images/products/silicon retainer case blue.webp",
      "/images/products/silicon retainer case green.webp",
      "/images/products/silicon retainer case pink.webp",
      "/images/products/silicon retainer case purple.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Soft Silicon", "BPA Free"]
  },
  {
    id: 20,
    name: "Planet Cleaning Box",
    tagline: "Orbital Design Soaking Box",
    description: "Unique planetary-inspired soaking box for aligner hygiene. Durable and stylish.",
    images: [
      "/images/products/Planet cleaning box black.webp",
      "/images/products/Planet cleaning box blue.webp",
      "/images/products/Planet cleaning box white.webp"
    ],
    category: "cleaning-box",
    moq: "200 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["BPA-Free", "Unique Shape", "Easy Drain"]
  },
  {
    id: 21,
    name: "Vented Cleaning Box",
    tagline: "Enhanced Airflow Hygiene",
    description: "Denture and aligner soaking box with high-performance ventilation design.",
    images: [
      "/images/products/Vented cleaning box black brown.webp",
      "/images/products/Vented cleaning box white brown.webp",
      "/images/products/Vented cleaning box white green.webp"
    ],
    category: "cleaning-box",
    moq: "200 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Side Vents", "Compact Storage", "Durable PP"]
  },
  {
    id: 22,
    name: "Classic Denture Cleaning Box",
    tagline: "Standard Soaking Solution",
    description: "Classic design for daily cleaning and soaking of dentures and aligners.",
    images: [
      "/images/products/Dental cleaning box blue v1.webp",
      "/images/products/Dental cleaning box purple v1.webp",
      "/images/products/Dental cleaning box white v1.webp"
    ],
    category: "cleaning-box",
    moq: "200 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Standard Size", "Secure Lid"]
  },
  {
    id: 30,
    name: "Dental Gift Box V1",
    tagline: "Premium Orthodontic Packaging",
    description: "Luxury kit box for aligner delivery. High-quality presentation to elevate the patient unboxing experience.",
    images: [
      "/images/products/Dental Gift box v1-1.webp",
      "/images/products/Dental Gift box v1-2.webp"
    ],
    category: "gift-box",
    moq: "100 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["Magnetic Lid", "Custom Inserts", "Luxury Finish"]
  },
  {
    id: 40,
    name: "Professional Dental Hook",
    tagline: "Hygienic Aligner Removal",
    description: "Precision tool designed for easy and safe removal of clear aligners without manual contact.",
    images: ["/images/products/Dental hook-1.webp"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Ergonomic Grip", "High strength", "BPA Free"]
  },
  {
    id: 41,
    name: "Orthodontic Teether",
    tagline: "Comfortable Seating Solution",
    description: "Specialized silicone chewie to ensure perfect seating of invisible aligners for optimal results.",
    images: ["/images/products/Dental Teether-1.webp"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade Silicone", "Multiple Flavors", "Anti-slip"]
  },
  {
    id: 4,
    name: "Professional Ultrasonic Cleaner",
    tagline: "Deep Cleaning Technology (Plug-in)",
    description: "45,000Hz high-frequency waves for clinical-grade cleaning. Multiple professional colors.",
    images: [
      "/images/products/ultrasonic-cleaner-white-plug.webp",
      "/images/products/ultrasonic-cleaner-black-plug.webp",
      "/images/products/ultrasonic-cleaner-blue-plug.webp"
    ],
    category: "cleaning-box",
    moq: "1000 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Steel"]
  },
  {
    id: 3,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination",
    description: "Rechargeable case using hospital-grade UV-C LED to sanitize your aligners in 3 minutes.",
    images: [
      "/images/products/uv-sterilizer-case-black.webp",
      "/images/products/uv-sterilizer-case-white.webp"
    ],
    category: "retainer-case",
    moq: "1000 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED Tech", "Type-C Charging"]
  }
];
