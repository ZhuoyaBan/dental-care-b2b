export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/products/aligner-case-pro-black.png" 
          alt="Premium Aligner Case" 
          className="w-full h-full object-cover opacity-30 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Trusted by 500+ Dental Clinics Worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Your <span className="text-blue-500">Premier B2B</span><br />
              Partner for <span className="text-teal-400 underline decoration-4 decoration-teal-400/30 underline-offset-8">Aligner Care</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Precision-engineered invisible aligner accessories. From UV-C sterilizers to ultrasonic cleaners, we provide wholesale solutions with custom OEM/ODM branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/20 text-center">
                Explore Full Catalog
              </a>
              <a href="https://wa.me/8618822885445" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all text-center">
                Send Inquiry via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
