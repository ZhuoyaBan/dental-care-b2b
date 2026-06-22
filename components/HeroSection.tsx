const stats = [
  { value: "500+", label: "Global Clients" },
  { value: "10+", label: "Product Lines" },
  { value: "50+", label: "Countries Served" },
  { value: "5M+", label: "Units Shipped" },
];

const trustBadges = [
  "ISO Certified",
  "BPA-Free Materials",
  "Custom OEM / ODM",
  "Fast Lead Time",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/50 to-teal-50/30 overflow-hidden"
    >
      <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow" />
              Trusted by 500+ Dental Clinics Worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.12] tracking-tight">
              Your <span className="text-blue-600">Premier B2B</span><br />
              Partner for <span className="relative inline-block">Aligner Care<span className="absolute -bottom-1 left-0 right-0 h-1 bg-teal-300/60 rounded-full" /></span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              We manufacture and supply premium invisible aligner care accessories — from UV sterilizers to cleaning brushes. Low MOQ, custom OEM/ODM branding, and reliable global shipping to 50+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary justify-center sm:justify-start">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
                Explore Products
              </a>
              <a href="https://wa.me/8618822885445" className="btn-secondary justify-center sm:justify-start">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Send Inquiry
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Product Catalog</p>
                      <p className="text-xs text-gray-500">10 Premium SKUs</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">In Stock</span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="space-y-2.5">
                  {[
                    { name: "UV Sterilizer Case", from: "From $3.80/pc", pill: "bg-yellow-100 text-yellow-700" },
                    { name: "Ultrasonic Cleaner", from: "From $8.50/pc", pill: "bg-teal-100 text-teal-700" },
                    { name: "Effervescent Tablets", from: "From $0.08/pc", pill: "bg-sky-100 text-sky-700" },
                    { name: "Aligner Case", from: "From $0.60/pc", pill: "bg-blue-100 text-blue-700" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                      <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.pill}`}>{item.from}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/8618822885445" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors duration-200">
                  Request Full Price List →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
