import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 min-h-[720px] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp" 
          alt="Wholesale retainer cases, cleaning boxes and dental accessories by Uvcare"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-right sm:object-center opacity-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-gray-900">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              OEM / ODM Dental Accessory Manufacturer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-gray-900">
              Dental Gift Box &amp; Retainer Case Manufacturer, <span className="text-blue-600">Built for Your Brand</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Source ready-to-brand retainer cases, cleaning boxes, gift packaging and orthodontic accessories from one B2B supplier. Tell us your quantity, branding and delivery needs — we will help match the right products and quotation path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/8618822885445?text=Hi%2C%20I%27d%20like%20a%20wholesale%20quote%20for%20dental%20accessories."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-200 text-center"
              >
                Request a Wholesale Quote
              </a>
              <a href="#products" className="bg-white/80 hover:bg-white border border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all shadow-sm text-center">
                Browse Product Categories
              </a>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 max-w-2xl">
              {[
                ["MOQ", "From 100 PCS"],
                ["Customization", "Logo & Packaging"],
                ["Lead Time", "5–20 Days"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/70 bg-white/75 backdrop-blur-sm px-4 py-3 shadow-sm">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{label}</dt>
                  <dd className="mt-1 text-sm font-bold text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
