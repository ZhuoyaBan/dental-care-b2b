// ---------------------------------------------------------------------------
// Product data
// ---------------------------------------------------------------------------

export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  iconType: string;
  category: "Storage" | "Hygiene" | "Cleaning" | "Accessories" | "Packaging";
  iconBg: string;
  iconColor: string;
  imageUrl?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aligner Case",
    tagline: "Slim & Durable Carry Protection",
    description:
      "Compact hard-shell cases designed for safe aligner transportation. Available in 20+ colors with custom logo printing for clinic branding.",
    iconType: "case",
    category: "Storage",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    imageUrl: "/images/products/一代牙套盒蓝色.jpg",
  },
  {
    id: 2,
    name: "UV Sterilizer Aligner Case",
    tagline: "99.9% Bacteria Eliminated",
    description:
      "USB-rechargeable case with built-in UV-C LED technology. Kills 99.9% of bacteria in under 3 minutes — elevates patient hygiene standards.",
    iconType: "uv",
    category: "Hygiene",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    imageUrl: "/images/products/杀菌牙套盒黑色.jpg",
  },
  {
    id: 3,
    name: "Ultrasonic Cleaning Case",
    tagline: "Professional-Grade Deep Cleaning",
    description:
      "High-frequency ultrasonic vibrations remove plaque and debris thoroughly. Compact one-button design ideal for clinic retail programs.",
    iconType: "ultrasonic",
    category: "Cleaning",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    imageUrl: "/images/products/紫外超声波清洗机白色插电.jpg",
  },
  {
    id: 4,
    name: "Regular Cleaning Case",
    tagline: "Simple Daily Cleansing Solution",
    description:
      "Cost-effective soaking tray for daily aligner hygiene routines. Works seamlessly with effervescent tablets. Multiple color and size options.",
    iconType: "cleaning",
    category: "Cleaning",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    imageUrl: "/images/products/二代顶部带透气孔牙套盒白色.jpg",
  },
  {
    id: 5,
    name: "Aligner Removal Hook",
    tagline: "Comfortable & Hygienic Removal",
    description:
      "Ergonomic hook tool that safely detaches aligners without nail damage or contamination. Ideal for sensitive-tooth patients and first-time wearers.",
    iconType: "hook",
    category: "Accessories",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    imageUrl: "/images/products/二合一取钩咬胶.png",
  },
  {
    id: 6,
    name: "Chewies",
    tagline: "Better Seating, Better Outcomes",
    description:
      "BPA-free silicone chewies that ensure proper aligner seating for maximum treatment efficacy. Available in multiple colors and custom packaging.",
    iconType: "chewies",
    category: "Accessories",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    imageUrl: "/images/products/二合一取钩咬胶.png",
  },
  {
    id: 7,
    name: "Aligner Bag",
    tagline: "Branded Carry Pouches",
    description:
      "Lightweight organza and non-woven aligner pouches perfect for clinic gifting and branding. Low minimum order quantities, custom logo available.",
    iconType: "bag",
    category: "Packaging",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 8,
    name: "Aligner Gift Box",
    tagline: "Premium Unboxing Experience",
    description:
      "Elegant gift box sets with custom inserts, sleeves, and logo printing. Perfect for new patient welcome kits and white-label brand solutions.",
    iconType: "giftbox",
    category: "Packaging",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: 9,
    name: "Effervescent Cleaning Tablets",
    tagline: "Clinically Safe & Effective",
    description:
      "Dental-grade, individually wrapped effervescent tablets that dissolve odors and plaque. Gentle formula with multiple fragrance options for bulk orders.",
    iconType: "tablets",
    category: "Cleaning",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: 10,
    name: "Aligner Cleaning Brush",
    tagline: "Micro-Bristle Precision Care",
    description:
      "Ultra-soft micro-bristle brush for thorough yet non-abrasive aligner cleaning. Custom handle colors and brand imprinting available for wholesale orders.",
    iconType: "brush",
    category: "Cleaning",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];
