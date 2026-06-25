export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
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
    description: "Our most popular classic design. Built-in high-definition mirror and magnetic closure. Food-grade materials.",
    imageUrl: "/images/products/一代牙套盒蓝色.jpg",
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
    description: "Premium circular design with an adjustable ventilation port. Sleek matte finish for a high-end feel.",
    imageUrl: "/images/products/圆形带可开合透气孔牙套盒黑色.png",
    category: "retainer-case",
    moq: "500 PCS",
    leadTime: "12-15 Days",
    customLogo: true,
    features: ["Switchable Vent", "Premium Matte", "Anti-Slip Bottom"]
  },
  {
    id: 3,
    name: "UV-C Sterilizer Case",
    tagline: "99.9% Bacteria Elimination",
    description: "USB rechargeable UV-C LED technology. Kills 99.9% of germs in 3 minutes. Compact and portable.",
    imageUrl: "/images/products/杀菌牙套盒黑色.jpg",
    category: "cleaning-box",
    moq: "100 PCS",
    leadTime: "10-15 Days",
    customLogo: true,
    features: ["UV-C LED", "Type-C Charging", "Auto-Off Sensor"]
  },
  {
    id: 4,
    name: "Professional Ultrasonic Cleaner",
    tagline: "High-Frequency Deep Cleaning",
    description: "45,000Hz ultrasonic waves for thorough plaque removal. Available in plug-in and battery portable versions.",
    imageUrl: "/images/products/紫外超声波清洗机白色插电.jpg",
    category: "cleaning-box",
    moq: "50 PCS",
    leadTime: "15-20 Days",
    customLogo: true,
    features: ["45kHz Frequency", "Stainless Steel Tank", "One-Button Control"]
  },
  {
    id: 5,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "Hygienic Removal & Seating",
    description: "Dual-purpose tool for easy aligner detachment and proper seating. Ergonomic design for patient comfort.",
    imageUrl: "/images/products/二合一取钩咬胶.png",
    category: "dental-accessories",
    moq: "1000 PCS",
    leadTime: "5-7 Days",
    customLogo: true,
    features: ["Non-Slip Grip", "Medical Grade Silicone", "Individually Wrapped"]
  },
  {
    id: 6,
    name: "Vented Aligner Case (V2)",
    tagline: "Breathable Daily Protection",
    description: "Enhanced ventilation holes to prevent moisture build-up. Compact square design for active lifestyles.",
    imageUrl: "/images/products/二代顶部带透气孔牙套盒白色.jpg",
    category: "retainer-case",
    moq: "200 PCS",
    leadTime: "7-12 Days",
    customLogo: true,
    features: ["Top Ventilation", "Slim Design", "Dishwasher Safe"]
  }
];
