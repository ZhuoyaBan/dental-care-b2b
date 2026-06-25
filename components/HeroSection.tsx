export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.webp" 
          alt="Uvcare Aligner Care Collection" 
          className="w-full h-full object-cover object-right sm:object-center opacity-90 scale-105"
        />
        {/* 增加一个从左到右的白色渐变，确保文字清晰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-gray-900">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Trusted by 500+ Dental Clinics Worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
              Your <span className="text-blue-600">Premier B2B</span><br />
              Partner for <span className="relative inline-block">Aligner Care<span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500/20 rounded-full" /></span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Precision-engineered invisible aligner accessories. From UV-C sterilizers to ultrasonic cleaners, we provide complete wholesale solutions with custom branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-200 text-center">
                Explore Full Catalog
              </a>
              <a href="https://wa.me/8618822885445" className="bg-white/80 hover:bg-white border border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all shadow-sm text-center">
                Send Inquiry via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
