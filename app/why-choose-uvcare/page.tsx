import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Dental Brands Choose Uvcare | B2B Aligner Care Manufacturer",
  description: "Uvcare is a Shenzhen-based B2B manufacturer of aligner care accessories. OEM/ODM capabilities, factory-direct pricing, ISO 9001/CE/FDA compliant, low MOQ, and worldwide shipping for dental brands and distributors.",
  alternates: { canonical: "https://www.dentalcarepack.com/why-choose-uvcare" },
};

const trustSignals = [
  {
    icon: "🏭",
    title: "Shenzhen Manufacturing Base",
    desc: "Our factory in Shenzhen's Bao'an District is equipped with injection molding, UV-C LED assembly, silk-screen printing, and packaging lines. We own the molds, control the production process, and guarantee quality at every stage — from raw material inspection to final assembly.",
  },
  {
    icon: "🏷️",
    title: "Full OEM/ODM Customization",
    desc: "OEM: Custom logo printing, Pantone color matching, and branded packaging on existing products. ODM: Full custom product development from concept to mass production — including industrial design, tooling, electronics integration, and prototyping. Clients bring the idea; we deliver the finished product.",
  },
  {
    icon: "🌍",
    title: "Global Export Experience",
    desc: "We ship to 50+ countries via DHL, FedEx, and UPS. Our clients include dental clinics, orthodontic distributors, clear aligner brands, and private-label buyers across North America, Europe, the Middle East, and Asia-Pacific. We handle export documentation and customs requirements.",
  },
  {
    icon: "🔬",
    title: "Custom Mold Development",
    desc: "Need a product that doesn't exist yet? Our ODM team can develop it. From the 2-in-1 aligner remover and chewie (our innovation) to custom UV-C case designs, we have experience turning concepts into manufacturable products. Tooling investment and 5,000+ PCS MOQ for full ODM projects.",
  },
  {
    icon: "📦",
    title: "Low MOQ Support",
    desc: "We understand that B2B buyers need to test before committing. Standard cases start at 100 PCS MOQ. Electronic products (UV-C cases, ultrasonic cleaners) start at 500-1,000 PCS. Free samples are available for quality evaluation before placing a bulk order.",
  },
  {
    icon: "✅",
    title: "Quality Control & Certifications",
    desc: "ISO 9001 certified quality management system. CE compliance for European markets. FDA compliant materials for US markets. All products are BPA-free, food-grade, and made from medical-grade materials safe for oral contact. Every batch goes through QC inspection before shipping.",
  },
];

const clientTypes = [
  { type: "Clear Aligner Brands", need: "Private-label retainer cases and UV-C sterilizers with brand logo", solution: "OEM logo printing on existing case designs, MOQ 100-1000 PCS" },
  { type: "Dental Labs", need: "Impression kits and workflow accessories for lab-to-clinic supply", solution: "Putty impression kits with custom packaging, scan box ODM development" },
  { type: "Orthodontic Clinics", need: "Patient starter kits with branded storage cases and accessories", solution: "Custom-logo cases, chewies, removal tools, and gift box packaging" },
  { type: "Distributors", need: "Full product catalog at factory-direct pricing for resale", solution: "Volume pricing tiers, white-label packaging, worldwide shipping" },
  { type: "Private Label Buyers", need: "Complete product line under their own brand", solution: "Full OEM/ODM from product selection to branded packaging" },
  { type: "Dental Product Startups", need: "Custom product development from concept", solution: "ODM service: design, prototyping, tooling, mass production" },
];

export default function WhyChooseUvcarePage() {
  const trustSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Why Dental Brands Choose Uvcare",
    description: "Uvcare is a Shenzhen-based B2B manufacturer of aligner care accessories with OEM/ODM capabilities, ISO 9001/CE/FDA compliance, and worldwide shipping.",
    url: "https://www.dentalcarepack.com/why-choose-uvcare",
    mainEntity: {
      "@type": "Organization",
      name: "Uvcare",
      url: "https://www.dentalcarepack.com",
      logo: "https://www.dentalcarepack.com/logo.png",
      foundingLocation: "Shenzhen, China",
      certifications: ["ISO 9001", "CE", "FDA Compliant"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trustSchema) }} />
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Trust & Credibility
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Dental Brands Choose Uvcare</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Uvcare, operating at DentalCarePack.com, is a B2B manufacturer — not a trading company or reseller. Here's why dental labs, clinics, brands, and distributors worldwide partner with us.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4" aria-hidden="true">{signal.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{signal.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{signal.desc}</p>
              </div>
            ))}
          </div>

          {/* Client Types Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Who We Work With</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-2xl overflow-hidden text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-gray-900">Client Type</th>
                    <th className="text-left p-4 font-bold text-gray-900">What They Need</th>
                    <th className="text-left p-4 font-bold text-gray-900">How Uvcare Helps</th>
                  </tr>
                </thead>
                <tbody>
                  {clientTypes.map((client, i) => (
                    <tr key={client.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="p-4 font-bold text-gray-900">{client.type}</td>
                      <td className="p-4 text-gray-600">{client.need}</td>
                      <td className="p-4 text-gray-600">{client.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cooperation Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Share Your Logo & Idea", desc: "Send your brand logo (AI/EPS) and product requirements." },
                { step: "02", title: "Sample & Mockup", desc: "We create design mockups and ship samples for evaluation." },
                { step: "03", title: "Production & QC", desc: "Tooling, assembly, and quality control with photo updates." },
                { step: "04", title: "Global Shipping", desc: "Worldwide delivery via DHL/FedEx/UPS, 7-30 day lead times." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-blue-600 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to partner with a manufacturer?</h3>
            <p className="text-blue-100 mb-6">Contact us for free samples, OEM pricing, and custom product development.</p>
            <a
              href="https://wa.me/8618822885445?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20partnering%20with%20Uvcare%20for%20OEM%2FODM%20dental%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Internal links */}
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <Link href="/products" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Browse All Products →</h4>
              <p className="text-sm text-gray-500">Explore our complete aligner care catalog.</p>
            </Link>
            <Link href="/about" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">About Uvcare →</h4>
              <p className="text-sm text-gray-500">Learn more about our company and factory.</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
