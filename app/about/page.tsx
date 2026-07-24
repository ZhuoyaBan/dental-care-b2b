import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Uvcare | B2B Aligner Care Manufacturer in Shenzhen, China",
  description: "Uvcare, operating at DentalCarePack.com, is a B2B manufacturer of invisible aligner care accessories. OEM/ODM solutions for dental labs, clinics, brands, and distributors worldwide.",
  alternates: { canonical: "https://www.dentalcarepack.com/about" },
};

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "B2B Clients Worldwide" },
    { value: "50+", label: "Countries Shipped" },
    { value: "100 PCS", label: "Lowest MOQ" },
  ];

  const certifications = ["ISO 9001", "CE Certified", "FDA Compliant", "BPA-Free Materials"];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Uvcare",
            description: "Uvcare, operating at DentalCarePack.com, is a China-based B2B manufacturer of invisible aligner care accessories. OEM/ODM solutions for dental labs, orthodontic clinics, clear aligner brands, and distributors worldwide.",
            url: "https://www.dentalcarepack.com",
            logo: "https://www.dentalcarepack.com/logo.png",
            email: "ban@grouprsh.com",
            telephone: "+86 188 2288 5445",
            address: {
              "@type": "PostalAddress",
              streetAddress: "A309, Fanghua Industrial Area, xin'an Street",
              addressLocality: "Bao'an District, Shenzhen",
              addressCountry: "CN",
            },
            certification: ["ISO 9001", "CE", "FDA Compliant"],
          }),
        }}
      />
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Uvcare</h1>
          <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            A B2B manufacturer — not a trading company. We make aligner care products for dental brands worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 rounded-2xl p-6">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed">
              Uvcare, operating at DentalCarePack.com, is a B2B manufacturer based in Shenzhen, China.
              We specialize in invisible aligner care accessories — from dental impression kits and scan box
              concepts to retainer cases, UV-C sterilizers, ultrasonic cleaners, cleaning products, orthodontic
              accessories, and premium gift packaging. Our clients include clear aligner laboratories, orthodontic
              clinics, dental brands, and distributors across 50+ countries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are the manufacturer. We own the molds, control the production lines, and guarantee quality at
              every stage. Our factory in Shenzhen's Bao'an District is equipped with injection molding, UV-C LED
              assembly, silk-screen printing, and packaging lines. Whether you need 100 custom-logo retainer cases
              for a single clinic or 10,000 UV-C sterilizer cases for a national brand rollout, we scale production
              to meet your demand.
            </p>
          </div>

          {/* Mission + Factory */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most reliable manufacturing partner for dental brands worldwide — providing
                high-quality, innovative aligner care products with full OEM/ODM customization, low MOQ,
                and fast global delivery.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Factory Strength</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced molding, printing, and assembly lines in Shenzhen's Bao'an District. Rigorous
                quality control from raw material inspection to final assembly. Photo and video updates
                throughout production.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Certifications & Standards</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="text-sm font-bold px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">{cert}</span>
              ))}
            </div>
          </div>

          {/* Trust page link */}
          <div className="mb-12 p-8 bg-blue-50 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Want to know why dental brands choose us?</h3>
            <p className="text-gray-600 mb-6">See our manufacturing capabilities, client types, and cooperation process.</p>
            <Link href="/why-choose-uvcare" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Why Choose Uvcare →
            </Link>
          </div>

          {/* Internal links */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <Link href="/products" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Browse Products →</h4>
              <p className="text-sm text-gray-500">Explore our full catalog of aligner care products.</p>
            </Link>
            <Link href="/insights" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Read Our Guides →</h4>
              <p className="text-sm text-gray-500">Expert buying guides and dental care insights.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-blue-600 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
            <p className="text-blue-100 mb-6">Contact us for free samples, wholesale pricing, and OEM customization.</p>
            <a href="https://wa.me/8618822885445" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
