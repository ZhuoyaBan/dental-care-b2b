import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    { q: "What is your minimum order quantity (MOQ)?", a: "Standard MOQs start from 100-500 pcs depending on the product. We also support smaller sample orders for quality evaluation." },
    { q: "Can I customize the logo on the cases?", a: "Yes, we offer professional silk-screen printing and laser engraving for all our retainer cases and electronic cleaning devices." },
    { q: "How long is the typical lead time?", a: "Standard orders are processed within 7-12 days. Custom OEM orders usually take 15-20 days depending on complexity." },
    { q: "Do you ship internationally?", a: "Absolutely. We ship to over 50 countries via air, sea, or express courier (DHL/FedEx/UPS)." },
  ];

  return (
    <>
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
