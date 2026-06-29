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

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
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
    id: 7,
    name: "Aligner Case (V2)",
    tagline: "Sleek Modern Design",
    description: "Modern aligner case with a sleek slim profile. Features a compact design perfect for dental clinics to offer as a stylish alternative. BPA-free, food-grade materials with ODM customization available. Available in black and white.",
    images: [
      "/images/products/aligner-case-v2-black.webp",
      "/images/products/aligner-case-v2-white.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Compact Profile", "Durable Build"]
  },
  {
    id: 8,
    name: "Aligner Case (V3)",
    tagline: "Ultra-Slim Storage",
    description: "Ultra-slim aligner case in white. Perfect for on-the-go storage with a minimal footprint. Medical-grade, BPA-free materials designed for dental clinics and distributors. ODM customization and low MOQ available.",
    images: [
      "/images/products/aligner-case-v3-white.webp"
    ],
    category: "retainer-case",
    moq: "100 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["Ultra-Slim", "Lightweight"]
  },
  {
    id: 10,
    name: "Premium Round Retainer Case with Mirror",
    tagline: "Elegant Circular Design",
    description: "Sleek round profile with a high-quality mirror. Available in a variety of colors.",
    images: [
      "/images/products/round-retainer-case-black-with-mirror.webp",
      "/images/products/round-retainer-case-white-with-mirror.webp",
      "/images/products/round-retainer-case-pink-with-mirror.webp",
      "/images/products/round-retainer-case-green-with-mirror.webp",
      "/images/products/round-retainer-case-yellow-with-mirror.webp"
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
      "/images/products/round-retainer-case-black-double-silicon.webp",
      "/images/products/round-retainer-case-white-double-silicon.webp",
      "/images/products/round-retainer-case-pink-double-silicon.webp",
      "/images/products/round-retainer-case-green-double-silicon.webp",
      "/images/products/round-retainer-case-yellow-double-silicon.webp"
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
      "/images/products/silicon-retainer-case-blue.webp",
      "/images/products/silicon-retainer-case-green.webp",
      "/images/products/silicon-retainer-case-pink.webp",
      "/images/products/silicon-retainer-case-purple.webp"
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
      "/images/products/planet-cleaning-box-black.webp",
      "/images/products/planet-cleaning-box-blue.webp",
      "/images/products/planet-cleaning-box-white.webp"
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
      "/images/products/vented-cleaning-box-black-brown.webp",
      "/images/products/vented-cleaning-box-white-brown.webp",
      "/images/products/vented-cleaning-box-white-green.webp"
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
      "/images/products/dental-cleaning-box-blue-v1.webp",
      "/images/products/dental-cleaning-box-purple-v1.webp",
      "/images/products/dental-cleaning-box-white-v1.webp"
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
      "/images/products/dental-gift-box-v1-1.webp",
      "/images/products/dental-gift-box-v1-2.webp"
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
    images: ["/images/products/dental-hook-1.webp"],
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
    images: ["/images/products/orthodontic-teether-1.webp"],
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Medical Grade Silicone", "Multiple Flavors", "Anti-slip"]
  },
  {
    id: 42,
    name: "Aligner Remover & Chewie",
    tagline: "Complete Aligner Tool Kit",
    description: "Combination tool for easy aligner removal and perfect seating. Essential for every aligner wearer. BPA-free, medical-grade silicone. Wholesale supply for dental clinics with custom branding options.",
    images: ["/images/products/aligner-remover-chewie.webp"],
    category: "dental-accessories",
    moq: "500 PCS",
    leadTime: "7-10 Days",
    customLogo: true,
    features: ["2-in-1 Design", "Ergonomic Grip", "Medical Grade"]
  },
  {
    id: 4,
    name: "Professional Ultrasonic Cleaner (Plug-in)",
    tagline: "Deep Cleaning Technology",
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
    id: 5,
    name: "Professional Ultrasonic Cleaner (Battery - Black)",
    tagline: "Portable Deep Cleaning Technology",
    description: "45,000Hz high-frequency waves for clinical-grade cleaning. Battery-powered for on-the-go use. Stainless steel tank, portable design. BPA-free and food-grade. Wholesale supply for dental clinics with ODM options.",
    images: ["/images/products/ultrasonic-cleaner-black-battery.webp"],
    category: "cleaning-box",
    moq: "500 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Battery Powered", "Portable"]
  },
  {
    id: 6,
    name: "Professional Ultrasonic Cleaner (Battery - White)",
    tagline: "Portable Deep Cleaning Technology",
    description: "45,000Hz high-frequency waves for clinical-grade cleaning. Battery-powered for on-the-go use. Stainless steel tank, portable design. BPA-free and food-grade. Wholesale supply for dental clinics with ODM options.",
    images: ["/images/products/ultrasonic-cleaner-white-battery.webp"],
    category: "cleaning-box",
    moq: "500 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Battery Powered", "Portable"]
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