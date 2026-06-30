import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Uvcare Aligner Accessories Wholesale",
  description: "Common questions about MOQ, custom logo printing, lead times, and international shipping for wholesale aligner cases, UV sterilizers and ultrasonic cleaners.",
};

const faqs = [
  { q: "What is your minimum order quantity (MOQ)?", a: "Standard MOQs start from 100-500 pcs depending on the product. We also support smaller sample orders for quality evaluation." },
  { q: "Can I customize the logo on the cases?", a: "Yes, we offer professional silk-screen printing and laser engraving for all our retainer cases and electronic cleaning devices. We support full OEM/ODM customization." },
  { q: "How long is the typical lead time?", a: "Standard orders are processed within 7-12 days. Custom OEM orders usually take 15-20 days depending on complexity." },
  { q: "Do you ship internationally?", a: "Absolutely. We ship to over 50 countries via air, sea, or express courier (DHL/FedEx/UPS)." },
  { q: "Are your products BPA-free and food-grade?", a: "Yes. All our aligner cases, retainer cases, and cleaning products are made from BPA-free, food-grade, medical-grade materials that are safe for oral contact." },
  { q: "Can I order samples before placing a bulk order?", a: "Yes, we strongly encourage sample orders so you can evaluate the quality, materials, and finish before committing to a bulk purchase. Contact us via WhatsApp for free samples." },
  { q: "What certifications do your products have?", a: "Our products and factory meet ISO 9001, CE, and FDA compliance standards, ensuring quality and safety for dental and orthodontic use." },
  { q: "What payment methods do you accept?", a: "We accept T/T (bank transfer), PayPal, and other common international payment methods. Payment terms can be discussed for repeat customers." },
];

export default function FAQPage() {
  // FAQ Schema for rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-24 min-h-screen bg-gray-50">
        <section className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}