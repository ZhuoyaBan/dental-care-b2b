.const stats = [
  { value: "500+", label: "Global Clients" },
  { value: "10+", label: "Product Lines" },
  { value: "50+", label: "Countries Served" },
  { value: "5M+", label: "Units Shipped" },
];
















const trustBadges = [
  "ISO Certified",
  "BPA-Free Materials",
  "Custom OEM / ODM",
  "Fast Lead Time", // test change
];
















export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/50 to-teal-50/30 overflow-hidden"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-50/20 rounded-full blur-3xl pointer-events-none" />
















      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
















          {/* ── Left: headline + CTAs ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow" />
              Trusted by 500+ Dental Clinics Worldwide
            </div>









