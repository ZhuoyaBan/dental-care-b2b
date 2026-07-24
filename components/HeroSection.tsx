import Image from "next/image";
import Link from "next/link";

const buyerEntries = [
  {
    label: "For Dental Brands",
    title: "Private Label & OEM Products",
    desc: "Custom-logo retainer cases, UV-C sterilizers, cleaning products, and gift packaging — built for your brand identity.",
    href: "/products",
    icon: "🏷️",
  },
  {
    label: "For Dental Labs",
    title: "Orthodontic Workflow Supplies",
    desc: "Impression kits, scan box concepts, aligner accessories, and cleaning solutions for lab-to-clinic workflows.",
    href: "/products/dental-impression-kit",
    icon: "🔬",
  },
  {
    label: "For Clinics",
    title: "Patient Care Solutions",
    desc: "Ready-to-brand storage cases, chewies, removal tools, and hygiene products for patient starter kits.",
    href: "/products/retainer-case",
    icon: "🦷",
  },
] as const;

const processSteps = [
  { step: "01", title: "Share Your Logo & Idea", desc: "Send us your brand logo (vector format) and a brief description of what you need." },
  { step: "02", title: "We Design & Prototype", desc: "Our in-house team creates mockups, confirms specs, and produces samples for evaluation." },
  { step: "03", title: "Production & QC", desc: "From tooling to assembly, we manage production with photo/video updates throughout." },
  { step: "04", title: "Global Shipping", desc: "Worldwide delivery via DHL, FedEx, UPS. 7-30 day lead times depending on product." },
] as const;

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 min-h-[720px] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Uvcare aligner care manufacturing facility - retainer cases, UV-C sterilizers, ultrasonic cleaners"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-right sm:object-center opacity-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-gray-900">
        <div className="space-y-7 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
            Uvcare, operating at DentalCarePack.com — B2B Manufacturer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-gray-900">
            Custom Aligner Care Solutions <span className="text-blue-600">Manufacturer</span> for Dental Labs, Clinics and Brands
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            Uvcare specializes in OEM retainer cases, UV-C sterilizing cases, ultrasonic cleaners, orthodontic accessories, impression kits, and private-label dental products for global dental companies. From impression to maintenance — one manufacturer, complete solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/8618822885445?text=Hi%2C%20I%27m%20looking%20for%20a%20dental%20product%20manufacturer%20for%20OEM%2FODM%20custom%20branding."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-200 text-center"
            >
              Request OEM Pricing
            </a>
            <a href="#products" className="bg-white/80 hover:bg-white border border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all shadow-sm text-center">
              Browse Product Categories
            </a>
          </div>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl">
            {[
              ["MOQ", "From 100 PCS"],
              ["Lead Time", "7–30 Days"],
              ["OEM / ODM", "Logo & Packaging"],
              ["Certified", "ISO · CE · FDA"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/70 bg-white/75 backdrop-blur-sm px-4 py-3 shadow-sm">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm font-bold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Three buyer entry cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-3 gap-4">
            {buyerEntries.map((entry) => (
              <Link
                key={entry.label}
                href={entry.href}
                className="group block bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden="true">{entry.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{entry.label}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{entry.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{entry.desc}</p>
                <span className="mt-3 inline-flex items-center text-sm font-bold text-blue-600">
                  Explore <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
