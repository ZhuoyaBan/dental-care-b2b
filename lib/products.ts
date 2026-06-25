// ---------------------------------------------------------------------------
// Product data
// ---------------------------------------------------------------------------

export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  iconType: string;
  category: "retainer-case" | "cleaning-box" | "dental-accessories";
  iconBg: string;
  iconColor: string;
  imageUrl?: string;
  moq: string;
  leadTime: string;
  customLogo: boolean;
  features: string[];
}

export const products: Product[] = [
  // 类目一：retainer-case
  {
    id: 1,
    name: "Classic Aligner Case (White)",
    tagline: "一代经典款 - 简约便携",
    description: "The original slim design, perfect for daily aligner storage. High-quality food-grade material.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    imageUrl: "/images/products/一代牙套盒白色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["BPA-Free", "Food Grade", "Compact Design"]
  },
  {
    id: 2,
    name: "Classic Aligner Case (Pink)",
    tagline: "一代经典款 - 简约便携",
    description: "The original slim design, perfect for daily aligner storage. High-quality food-grade material.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    imageUrl: "/images/products/一代牙套盒粉色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["BPA-Free", "Food Grade", "Compact Design"]
  },
  {
    id: 3,
    name: "Classic Aligner Case (Blue)",
    tagline: "一代经典款 - 简约便携",
    description: "The original slim design, perfect for daily aligner storage. High-quality food-grade material.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    imageUrl: "/images/products/一代牙套盒蓝色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["BPA-Free", "Food Grade", "Compact Design"]
  },
  {
    id: 4,
    name: "Classic Aligner Case (Black)",
    tagline: "一代经典款 - 简约便携",
    description: "The original slim design, perfect for daily aligner storage. High-quality food-grade material.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-gray-50",
    iconColor: "text-gray-600",
    imageUrl: "/images/products/一代牙套盒黑色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["BPA-Free", "Food Grade", "Compact Design"]
  },
  {
    id: 5,
    name: "Ventilated Aligner Case (V2)",
    tagline: "二代带透气孔款 - 保持干爽",
    description: "Features top ventilation holes to prevent odor and moisture buildup. Ideal for active users.",
    iconType: "cleaning",
    category: "retainer-case",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    imageUrl: "/images/products/二代顶部带透气孔牙套盒白色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["Breathable Design", "Food Grade", "Anti-Odor"]
  },
  {
    id: 6,
    name: "Rectangular Ventilated Case (V3)",
    tagline: "三代长方形带孔款 - 大容量",
    description: "Spacious rectangular design with ventilation, suitable for larger orthodontic appliances.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    imageUrl: "/images/products/三代顶部带透气孔牙套盒长方形白色.jpg",
    moq: "500 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["Large Capacity", "Ventilated", "Durable"]
  },
  {
    id: 7,
    name: "Pro Round Switchable Case",
    tagline: "Pro 圆形带开合孔款 - 旗舰品质",
    description: "Premium round case with a switchable vent for versatile storage needs. Sleek and professional.",
    iconType: "case",
    category: "retainer-case",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    imageUrl: "/images/products/圆形带可开合透气孔牙套盒白色.png",
    moq: "100 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["Switchable Vent", "Premium Finish", "Mirror Included"]
  },

  // 类目二：cleaning-box
  {
    id: 8,
    name: "UV Sterilizer Case",
    tagline: "杀菌牙套盒 - 99.9% 杀菌率",
    description: "Portable UV-C LED sterilizer case that kills bacteria in minutes. Rechargeable and compact.",
    iconType: "uv",
    category: "cleaning-box",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    imageUrl: "/images/products/杀菌牙套盒黑色.jpg",
    moq: "100 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["UV-C Sterilization", "Rechargeable", "Travel Friendly"]
  },
  {
    id: 9,
    name: "Ultrasonic Cleaner (Plug-in)",
    tagline: "紫外超声波清洗机 - 深度清洁",
    description: "Professional-grade ultrasonic cleaner for thorough removal of plaque and stains.",
    iconType: "ultrasonic",
    category: "cleaning-box",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    imageUrl: "/images/products/紫外超声波清洗机白色插电.jpg",
    moq: "100 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["42kHz Ultrasonic", "Deep Cleaning", "Auto Shut-off"]
  },
  {
    id: 10,
    name: "Ultrasonic Cleaner (Battery)",
    tagline: "紫外超声波清洗机 - 无线便携",
    description: "Battery-powered ultrasonic cleaner for cleaning on the go without needing a power outlet.",
    iconType: "ultrasonic",
    category: "cleaning-box",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    imageUrl: "/images/products/紫外超声波清洗机白色便携电池.png",
    moq: "100 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["Wireless", "Battery Powered", "Compact"]
  },

  // 类目三：dental-accessories
  {
    id: 11,
    name: "2-in-1 Aligner Remover & Chewie",
    tagline: "二合一取钩咬胶 - 实用组合",
    description: "Combined removal hook and silicone chewie in one ergonomic tool for maximum convenience.",
    iconType: "hook",
    category: "dental-accessories",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    imageUrl: "/images/products/二合一取钩咬胶.png",
    moq: "1000 PCS",
    leadTime: "7-15 Days",
    customLogo: true,
    features: ["Dual Function", "Ergonomic", "Medical Grade Silicone"]
  }
];
