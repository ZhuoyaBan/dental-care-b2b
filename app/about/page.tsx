import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Uvcare | B2B Aligner Care Manufacturer in Shenzhen",
  description: "Uvcare is a B2B manufacturer of invisible aligner care accessories based in Shenzhen, China. ISO 9001, CE, and FDA compliant. OEM/ODM with low MOQ and worldwide shipping.",
};

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Dental Clinic Clients" },
    { value: "50+", label: "Countries Shipped" },
    { value: "100 PCS", label: "Low MOQ" },
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
            name: "Uvcare B2B Supply",
            description: "Professional B2B manufacturer of invisible aligner care accessories. OEM/ODM solutions for dental clinics and distributors worldwide.",
            url: "https://dentalcarepack.com",
            logo: "https://dentalcarepack.com/logo.png",
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
            Your trusted B2B partner for aligner care accessories — from design to delivery.
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
              Uvcare is a B2B manufacturer based in Shenzhen, China, specializing in premium invisible aligner care
              accessories. Since 2016, we've supplied dental clinics, orthodontic distributors, and clear aligner
              brands across 50+ countries with customizable aligner cases, UV-C sterilizers, ultrasonic cleaners,
              and patient accessory kits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our product lineup covers the full aligner care lifecycle: <strong>storage</strong> (retainer cases,
              slim cases, round premium cases), <strong>hygiene</strong> (UV-C sterilizer cases, ultrasonic cleaners),
              <strong> cleaning</strong> (soaking boxes, cleaning tablets, brushes), and <strong>accessories</strong>
              (removal hooks, chewies, gift boxes). Every product is available with custom logo printing and
              OEM/ODM design support.
            </p>
          </div>

          {/* Mission + Factory */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To enhance the patient experience by providing high-quality, innovative, and hygienic aligner
                maintenance tools — while helping dental clinics build their brand through custom OEM/ODM
                solutions with low MOQ and fast lead times.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Factory Strength</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipped with advanced molding, printing, and assembly lines in Shenzhen's Bao'an District.
                We maintain rigorous quality control at every stage — from raw material inspection to final
                assembly — ensuring consistent product quality for global shipment via DHL, FedEx, and UPS.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Certifications & Standards</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-sm font-bold px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">OEM / ODM Customization</h4>
                <p className="text-sm text-gray-500">Custom logo printing, Pantone color matching, custom packaging, and full product design from scratch.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Low MOQ & Fast Lead Times</h4>
                <p className="text-sm text-gray-500">Starting at 100 PCS for standard cases, 7-15 day production lead times, worldwide express shipping.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Free Samples</h4>
                <p className="text-sm text-gray-500">Evaluate product quality and materials before committing to a bulk order. Contact us via WhatsApp.</p>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Material Safety</h4>
                <p className="text-sm text-gray-500">All products are BPA-free, food-grade, and medical-grade. Compliant with ISO 9001, CE, and FDA standards.</p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <Link href="/products" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Browse Products →</h4>
              <p className="text-sm text-gray-500">Explore our full catalog of aligner cases, cleaners, and accessories.</p>
            </Link>
            <Link href="/insights" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Read Our Guides →</h4>
              <p className="text-sm text-gray-500">Expert buying guides, product comparisons, and dental care insights.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="p-8 bg-blue-600 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
            <p className="text-blue-100 mb-6">Contact us for free samples, wholesale pricing, and OEM customization.</p>
            <a
              href="https://wa.me/8618822885445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
